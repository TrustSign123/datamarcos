"use client";

import { createContext, useContext } from "react";
import type { Market } from "@/lib/geo";

const MarketContext = createContext<Market>("in");

export function MarketProvider({ market, children }: { market: Market; children: React.ReactNode }) {
  return <MarketContext.Provider value={market}>{children}</MarketContext.Provider>;
}

export function useMarket(): Market {
  return useContext(MarketContext);
}
