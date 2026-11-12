"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import type { CountryCode } from "libphonenumber-js";
import { useMarket } from "@/components/MarketProvider";
import { isIndiaMarket } from "@/lib/geo";
import {
  allPhoneCountries,
  parseEnteredPhone,
  phoneCountry,
  pinnedPhoneCountries,
  readDetectedPhoneCountry,
  toE164,
  type PhoneCountry
} from "@/lib/phone";
import { phoneFieldStyles } from "./phoneFieldStyles";

export type PhoneFieldProps = {
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  placeholder?: string;
  onValueChange?: (e164: string) => void;
};

function matches(country: PhoneCountry, query: string) {
  const q = query.trim().toLowerCase().replace(/\s+/g, "");
  if (!q) return true;
  const dial = country.dial.replace(/\s+/g, "").toLowerCase();
  return (
    country.name.toLowerCase().includes(query.trim().toLowerCase()) ||
    country.iso.toLowerCase().includes(q) ||
    dial.includes(q) ||
    dial.replace("+", "").includes(q.replace("+", ""))
  );
}

export function PhoneField({
  id,
  name = "phone",
  required = true,
  disabled = false,
  autoComplete = "tel-national",
  placeholder = "Your mobile number",
  onValueChange
}: PhoneFieldProps) {
  const market = useMarket();
  const reactId = useId();
  const listId = `${reactId}-list`;
  const searchId = `${reactId}-search`;
  const inputId = id || `${reactId}-num`;
  const countries = useMemo(() => allPhoneCountries(), []);
  const pinned = useMemo(() => pinnedPhoneCountries(), []);

  const [iso, setIso] = useState<CountryCode | "">(isIndiaMarket(market) ? "IN" : "");
  const [national, setNational] = useState("");
  const [e164, setE164] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [panel, setPanel] = useState({ top: 0, left: 0, width: 280, maxHeight: 320 });

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const detected = readDetectedPhoneCountry();
    if (detected) {
      setIso(detected);
      return;
    }
    setIso(isIndiaMarket(market) ? "IN" : "");
  }, [market]);

  const selected = iso ? phoneCountry(iso) : undefined;
  const filtered = useMemo(() => {
    const list = countries.filter((item) => matches(item, query));
    if (query.trim()) return list;
    const pinIsos = new Set(pinned.map((item) => item.iso));
    return [...pinned, ...list.filter((item) => !pinIsos.has(item.iso))];
  }, [countries, pinned, query]);

  function commit(nextIso: CountryCode | "", nextNational: string) {
    setIso(nextIso);
    setNational(nextNational);
    const parsed = parseEnteredPhone(nextNational, nextIso || null);
    const value = parsed?.e164 || toE164(nextNational, nextIso || null) || "";
    if (parsed?.country && parsed.country !== nextIso) setIso(parsed.country);
    if (parsed && nextNational.trim().startsWith("+")) setNational(parsed.national);
    setE164(value);
    onValueChange?.(value);
  }

  function placePanel() {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const width = Math.max(280, Math.min(320, window.innerWidth - 16));
    const left = Math.min(Math.max(8, rect.left), window.innerWidth - width - 8);
    const spaceBelow = window.innerHeight - rect.bottom - 8;
    const spaceAbove = rect.top - 8;
    const maxHeight = Math.min(320, Math.max(160, spaceBelow >= 200 || spaceBelow >= spaceAbove ? spaceBelow : spaceAbove));
    const top = spaceBelow >= 200 || spaceBelow >= spaceAbove ? rect.bottom + 4 : Math.max(8, rect.top - maxHeight - 4);
    setPanel({ top, left, width, maxHeight });
  }

  useEffect(() => {
    if (!open) return;
    placePanel();
    const onReposition = () => placePanel();
    const onPointer = (event: MouseEvent) => {
      const path = event.composedPath();
      if (rootRef.current && path.includes(rootRef.current)) return;
      setOpen(false);
      setQuery("");
    };
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    const id = window.requestAnimationFrame(() => searchRef.current?.focus());
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, listId]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) return;
    const item = listRef.current?.querySelector("[data-active=true]");
    item?.scrollIntoView({ block: "nearest" });
  }, [active, open, filtered.length]);

  function pick(country: PhoneCountry) {
    commit(country.iso, national.startsWith("+") ? national : national);
    setOpen(false);
    setQuery("");
    document.getElementById(inputId)?.focus();
  }

  function onSearchKey(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((value) => Math.min(filtered.length - 1, value + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((value) => Math.max(0, value - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = filtered[active];
      if (item) pick(item);
    }
  }

  const onNumber = (value: string) => {
    const pasted = parseEnteredPhone(value, iso || null);
    if (pasted) {
      commit(pasted.country, pasted.national);
      return;
    }
    commit(iso, value);
  };

  return (
    <div className="dm-phone" ref={rootRef}>
      <style>{phoneFieldStyles}</style>
      <input type="hidden" name={name} value={e164} />
      {iso ? <input type="hidden" name="phoneCountry" value={iso} /> : null}
      <button
        ref={buttonRef}
        type="button"
        className="dm-phone-cc"
        aria-label="Country code"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        disabled={disabled}
        onClick={() => setOpen((value) => !value)}
      >
        {selected ? (
          <>
            <span className="dm-phone-flag" aria-hidden="true">{selected.flag}</span>
            {selected.dial}
          </>
        ) : (
          "Code"
        )}
      </button>
      {open && (
        <div
          className="dm-phone-panel"
          style={{ top: panel.top, left: panel.left, width: panel.width, maxHeight: panel.maxHeight }}
          role="presentation"
        >
          <input
            ref={searchRef}
            id={searchId}
            className="dm-phone-search"
            type="search"
            value={query}
            placeholder="Search country or code"
            autoComplete="off"
            aria-label="Search country or code"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onSearchKey}
          />
          <ul ref={listRef} id={listId} className="dm-phone-list" role="listbox" aria-label="Country codes">
            {filtered.length === 0 && <li className="dm-phone-empty">No countries match that search.</li>}
            {filtered.map((item, index) => (
              <li key={item.iso} role="presentation">
                {index === pinned.length && !query.trim() ? <hr className="dm-phone-pin" /> : null}
                <button
                  type="button"
                  className="dm-phone-option"
                  role="option"
                  aria-selected={item.iso === iso}
                  data-active={index === active}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => pick(item)}
                >
                  <span className="dm-phone-flag" aria-hidden="true">{item.flag}</span>
                  <b>{item.name}</b>
                  <span>{item.dial}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <input
        id={inputId}
        className="dm-phone-num"
        type="tel"
        inputMode="tel"
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        value={national}
        onChange={(event) => onNumber(event.target.value)}
      />
    </div>
  );
}
