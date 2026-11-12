/**
 * International phone numbers for every form on the site.
 *
 * Every country in libphonenumber-js is accepted — there is no allowlist or
 * blocklist. Pakistan (+92) and all other countries are included. Numbers are
 * stored and submitted in E.164 (e.g. +923001234567, +14155552671).
 */
import {
  getCountries,
  getCountryCallingCode,
  isSupportedCountry,
  parsePhoneNumberFromString,
  type CountryCode
} from "libphonenumber-js";
import { GEO_COOKIE, GEO_IP_COOKIE, parseCountryCode } from "@/lib/geo";

export const PHONE_ERROR = "Please enter a valid phone number.";

export type PhoneCountry = {
  iso: CountryCode;
  name: string;
  dial: string;
  flag: string;
};

/** Display-only pin order. Every other country still appears in the list. */
const PINNED: CountryCode[] = [
  "IN", "US", "GB", "PK", "AE", "SG", "AU", "SA", "DE", "CA", "NG", "ZA", "PH", "MY", "QA"
];

export function flagEmoji(iso: string): string {
  return iso
    .toUpperCase()
    .replace(/[A-Z]/g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

function countryName(iso: CountryCode): string {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(iso) || iso;
  } catch {
    return iso;
  }
}

let cached: PhoneCountry[] | null = null;

export function allPhoneCountries(): PhoneCountry[] {
  if (cached) return cached;
  cached = getCountries()
    .map((iso) => ({
      iso,
      name: countryName(iso),
      dial: `+${getCountryCallingCode(iso)}`,
      flag: flagEmoji(iso)
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return cached;
}

export function isPhoneCountry(value: string | null | undefined): value is CountryCode {
  return Boolean(value && isSupportedCountry(value));
}

export function phoneCountry(iso: CountryCode): PhoneCountry | undefined {
  return allPhoneCountries().find((item) => item.iso === iso);
}

export function pinnedPhoneCountries(): PhoneCountry[] {
  const all = allPhoneCountries();
  return PINNED.map((iso) => all.find((item) => item.iso === iso)).filter((item): item is PhoneCountry => Boolean(item));
}

export function toE164(input: string, country?: CountryCode | "" | null): string | null {
  const raw = input.trim();
  if (!raw) return null;
  const parsed = raw.startsWith("+")
    ? parsePhoneNumberFromString(raw)
    : parsePhoneNumberFromString(raw, country || undefined);
  if (!parsed?.isValid()) return null;
  return parsed.number;
}

export function isValidInternationalPhone(value: string): boolean {
  return toE164(value) !== null;
}

export type ParsedPhone = {
  e164: string;
  country: CountryCode;
  national: string;
};

export function parseEnteredPhone(input: string, country?: CountryCode | "" | null): ParsedPhone | null {
  const raw = input.trim();
  if (!raw) return null;
  const parsed = raw.startsWith("+")
    ? parsePhoneNumberFromString(raw)
    : parsePhoneNumberFromString(raw, country || undefined);
  if (!parsed?.isValid()) return null;
  const iso = parsed.country || (country && isPhoneCountry(country) ? country : undefined);
  if (!iso) return null;
  return {
    e164: parsed.number,
    country: iso,
    national: parsed.nationalNumber
  };
}

export function readDetectedPhoneCountry(): CountryCode | null {
  if (typeof document === "undefined") return null;
  const cookie = (name: string) => {
    const match = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`));
    return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
  };
  const detected = parseCountryCode(cookie(GEO_COOKIE)) || parseCountryCode(cookie(GEO_IP_COOKIE));
  return isPhoneCountry(detected) ? detected : null;
}
