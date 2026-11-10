import { NextRequest, NextResponse } from "next/server";
import { GEO_COOKIE, MARKET_HEADER, MARKET_QUERY, parseCountryCode, resolveMarket } from "@/lib/geo";

/**
 * Cache-safe geo variants:
 * - Resolve market from ?country= (persisted in the dm-country cookie), else
 *   x-vercel-ip-country, else India.
 * - Internally rewrite with ?__m=in|intl so the Next.js/Vercel Full Route Cache
 *   stores two HTML documents for the same public URL.
 * - Also set Vary: x-vercel-ip-country, Cookie so shared caches do not reuse
 *   one variant for the other. The visible URL never includes __m.
 * Combined with force-dynamic on the root layout (it reads x-dm-market), a
 * statically prerendered India HTML cannot be served to international visitors.
 *
 * Brochure PDFs: India keeps /brochures/*.pdf. International visitors are
 * rewritten to /brochures/intl/*.pdf (USD-fee copies) so a leftover India
 * href still serves the right file after the lead-form gate.
 */
export function middleware(request: NextRequest) {
  const incoming = request.nextUrl;
  const countryParam = incoming.searchParams.get("country");
  const clearOverride = (countryParam || "").toLowerCase() === "clear";
  const queryCountry = parseCountryCode(countryParam);
  const cookieCountry = parseCountryCode(request.cookies.get(GEO_COOKIE)?.value);

  const market = resolveMarket({
    overrideCountry: clearOverride ? null : queryCountry || cookieCountry,
    vercelCountry: request.headers.get("x-vercel-ip-country")
  });

  // Persist or clear the manual override, then drop ?country= from the URL.
  if (queryCountry || clearOverride) {
    const redirectUrl = incoming.clone();
    redirectUrl.searchParams.delete("country");
    const redirect = NextResponse.redirect(redirectUrl, 307);
    if (queryCountry) {
      redirect.cookies.set(GEO_COOKIE, queryCountry, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
        secure: request.nextUrl.protocol === "https:"
      });
    } else {
      redirect.cookies.delete(GEO_COOKIE);
    }
    redirect.headers.set("Vary", "x-vercel-ip-country, Cookie");
    redirect.headers.set(MARKET_HEADER, market);
    return redirect;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(MARKET_HEADER, market);

  const isBrochurePdf = incoming.pathname.startsWith("/brochures/") && incoming.pathname.endsWith(".pdf");
  if (isBrochurePdf) {
    const rewriteUrl = incoming.clone();
    if (market !== "in" && !incoming.pathname.startsWith("/brochures/intl/")) {
      rewriteUrl.pathname = "/brochures/intl/" + incoming.pathname.slice("/brochures/".length);
    }
    const rewritten = incoming.pathname !== rewriteUrl.pathname;
    const response = rewritten
      ? NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } })
      : NextResponse.next({ request: { headers: requestHeaders } });
    response.headers.set("Vary", "x-vercel-ip-country, Cookie");
    response.headers.set(MARKET_HEADER, market);
    // The public /brochures/*.pdf URL can serve India or intl bytes.
    if (rewritten) response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const rewriteUrl = incoming.clone();
  rewriteUrl.searchParams.set(MARKET_QUERY, market);
  const response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
  response.headers.set("Vary", "x-vercel-ip-country, Cookie");
  response.headers.set(MARKET_HEADER, market);
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf|txt|xml|woff2?|map)$).*)",
    "/brochures/:path*"
  ]
};
