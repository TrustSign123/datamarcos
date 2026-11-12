/** Shared styles for the international phone field. Injected inside the
 *  component so they work both in the lead-form shadow root and on the page. */
export const phoneFieldStyles = `
.dm-phone{position:relative;display:grid;grid-template-columns:max-content 1fr;gap:8px;width:100%;font:inherit;color:inherit}
.dm-phone-cc{display:inline-flex;align-items:center;gap:6px;height:46px;padding:0 28px 0 10px;border:1.5px solid var(--dm-phone-line, var(--line, #d8e2ea));border-radius:var(--dm-phone-radius, var(--radius, 12px));background:var(--dm-phone-bg, var(--field-bg, #fbfcfe));color:inherit;font:inherit;font-size:.95rem;line-height:1;cursor:pointer;white-space:nowrap;position:relative;appearance:none}
.dm-phone-cc:focus,.dm-phone-search:focus{outline:none;border-color:var(--dm-phone-focus, var(--focus, #ff4ab8));box-shadow:0 0 0 4px var(--dm-phone-focus-ring, var(--focus-ring, rgba(255,74,184,.14)))}
.dm-phone-cc::after{content:"";position:absolute;right:10px;top:50%;width:7px;height:7px;margin-top:-5px;border:solid currentColor;border-width:0 1.6px 1.6px 0;transform:rotate(45deg);opacity:.5}
.dm-phone-cc[aria-expanded=true]::after{margin-top:-1px;transform:rotate(-135deg)}
.dm-phone-flag{font-size:1.05rem;line-height:1}
.dm-phone-num{width:100%;min-width:0;height:46px;padding:0 14px;border:1.5px solid var(--dm-phone-line, var(--line, #d8e2ea));border-radius:var(--dm-phone-radius, var(--radius, 12px));background:var(--dm-phone-bg, var(--field-bg, #fbfcfe));color:inherit;font:inherit;font-size:.95rem;outline:none}
.dm-phone-num:focus{border-color:var(--dm-phone-focus, var(--focus, #ff4ab8));box-shadow:0 0 0 4px var(--dm-phone-focus-ring, var(--focus-ring, rgba(255,74,184,.14)))}
.dm-phone-panel{position:fixed;z-index:2147483646;display:flex;flex-direction:column;width:min(320px, calc(100vw - 16px));max-height:320px;padding:8px;border:1px solid var(--dm-phone-line, #d8e2ea);border-radius:12px;background:var(--dm-phone-panel-bg, #fff);color:var(--dm-phone-panel-text, #151922);box-shadow:0 18px 48px rgba(15,18,24,.22);font:inherit}
.dm-phone-search{width:100%;height:38px;padding:0 12px;border:1.5px solid var(--dm-phone-line, #d8e2ea);border-radius:8px;background:var(--dm-phone-bg, #fbfcfe);color:inherit;font:inherit;font-size:.88rem;margin:0 0 6px}
.dm-phone-list{overflow:auto;margin:0;padding:0;list-style:none;flex:1}
.dm-phone-option{display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;font-size:.86rem;text-align:left;cursor:pointer}
.dm-phone-option[data-active=true],.dm-phone-option:hover{background:var(--dm-phone-hover, #f3f5f8)}
.dm-phone-option b{font-weight:750;flex:1}
.dm-phone-option span{color:var(--dm-phone-muted, #667085);font-weight:650}
.dm-phone-empty{padding:12px 10px;color:var(--dm-phone-muted, #667085);font-size:.86rem}
.dm-phone-pin{margin:4px 0;border:0;border-top:1px solid var(--dm-phone-line, #d8e2ea)}
.f.bad .dm-phone-cc,.f.bad .dm-phone-num{border-color:#e5484d;box-shadow:0 0 0 4px rgba(229,72,77,.1)}
`;
