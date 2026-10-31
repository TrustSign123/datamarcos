/* Lead form styles. Rendered inside shadow roots, so they never touch (or inherit) site CSS. */

/** Shared form styles: fields, button, errors, success state. Themed through CSS variables. */
export const leadFormStyles = `
:host{all:initial;display:block;--grad:linear-gradient(135deg,#ff4ab8,#ff7a59 52%,#48d5ff);--btn-bg:var(--grad);--btn-shadow:0 14px 42px rgba(255,74,184,.30);--btn-shadow-hover:0 18px 48px rgba(255,74,184,.38);--focus:#ff4ab8;--focus-ring:rgba(255,74,184,.14);--check:#ff4ab8;--dot:var(--grad);--teal:#63d8d0;--text:#151922;--muted:#667085;--line:#d8e2ea;--field-bg:#fbfcfe;--radius:12px;--btn-radius:999px;
font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display",Inter,Manrope,"Segoe UI",Roboto,sans-serif;-webkit-font-smoothing:antialiased;color:var(--text)}
*,*::before,*::after{box-sizing:border-box}
.lf{container-type:inline-size}
form{display:grid;gap:14px}
.row{display:grid;gap:14px}
@container (min-width:520px){.row{grid-template-columns:1fr 1fr}}
.f{display:grid;gap:6px;align-content:start}
label{font-size:.8rem;font-weight:750;color:var(--text)}
label .req{color:#e0368f}
input[type=text],input[type=email],input[type=tel],select{width:100%;height:46px;padding:0 14px;border:1.5px solid var(--line);border-radius:var(--radius);background:var(--field-bg);font:inherit;font-size:.95rem;color:var(--text);outline:none;transition:border-color .15s,box-shadow .15s,background .15s;appearance:none;-webkit-appearance:none}
input::placeholder{color:#9aa4b2}
input:focus,select:focus{border-color:var(--focus);background:#fff;box-shadow:0 0 0 4px var(--focus-ring)}
select{background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27 viewBox=%270 0 12 8%27%3E%3Cpath d=%27M1 1.5l5 5 5-5%27 stroke=%27%23667085%27 stroke-width=%271.8%27 fill=%27none%27 stroke-linecap=%27round%27/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:38px;cursor:pointer}
.phone{display:grid;grid-template-columns:96px 1fr;gap:8px}
.phone select{padding:0 26px 0 12px;background-position:right 10px center}
.f.bad input,.f.bad select{border-color:#e5484d;box-shadow:0 0 0 4px rgba(229,72,77,.1)}
.err{display:none;font-size:.76rem;color:#d1343a;font-weight:600}
.f.bad .err{display:block}
.program{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--radius);background:var(--field-bg);border:1.5px dashed var(--line);font-size:.86rem;color:var(--muted)}
.program b{color:var(--text);font-weight:800}
.consent{display:flex;gap:10px;align-items:flex-start;font-size:.78rem;line-height:1.45;color:var(--muted);font-weight:500;cursor:pointer}
.consent input{flex:none;width:18px;height:18px;margin:1px 0 0;accent-color:var(--check);cursor:pointer}
.consent.bad{color:#d1343a}.consent.bad input{outline:2px solid #e5484d;outline-offset:1px}
.btn{position:relative;height:52px;border:0;border-radius:var(--btn-radius);background:var(--btn-bg);color:#fff;font:inherit;font-size:1rem;font-weight:800;letter-spacing:.01em;cursor:pointer;box-shadow:var(--btn-shadow);display:flex;align-items:center;justify-content:center;gap:10px;transition:transform .15s,box-shadow .15s,filter .15s}
.btn:hover{transform:translateY(-1px);box-shadow:var(--btn-shadow-hover);filter:saturate(1.08)}
.btn:disabled{cursor:progress;opacity:.85;transform:none}
.spin{display:none;width:18px;height:18px;border-radius:50%;border:2.5px solid rgba(255,255,255,.4);border-top-color:#fff;animation:sp .7s linear infinite}
.loading .spin{display:block}.loading .arrow{display:none}
@keyframes sp{to{transform:rotate(360deg)}}
.banner{display:none;padding:11px 14px;border-radius:12px;background:#fff1f2;border:1px solid #fecdd3;color:#be123c;font-size:.82rem;line-height:1.4}
.banner.show{display:block}
.trust{display:flex;justify-content:center;flex-wrap:wrap;gap:6px 14px;font-size:.72rem;color:var(--muted);font-weight:650;margin-top:-2px;text-align:center}
.trust span{display:inline-flex;align-items:center;gap:6px}
.trust span::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--dot)}
.trust span:only-child{display:block;font-weight:600;line-height:1.45}.trust span:only-child::before{display:none}
.hp{position:absolute!important;left:-9999px!important;width:1px;height:1px;opacity:0}
.done{padding:10px 4px 6px;text-align:center}
.tick{width:68px;height:68px;margin:0 auto 16px;border-radius:50%;background:var(--btn-bg);display:grid;place-items:center;box-shadow:var(--btn-shadow)}
.tick svg{width:32px;height:32px}
.done h3{margin:0 0 8px;font-size:1.35rem;font-weight:850;color:var(--text)}
.done p{margin:0 auto 20px;max-width:360px;font-size:.92rem;line-height:1.5;color:var(--muted)}
.links{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
.ghost{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 20px;border-radius:999px;border:1.5px solid var(--line);color:var(--text);background:#fff;text-decoration:none;font-weight:750;font-size:.88rem;transition:border-color .15s}
.ghost:hover{border-color:var(--focus)}
.dl{display:inline-flex;align-items:center;gap:8px;height:46px;padding:0 22px;border-radius:999px;background:var(--btn-bg);color:#fff;text-decoration:none;font-weight:800;font-size:.92rem;box-shadow:var(--btn-shadow)}
.dl:hover{box-shadow:var(--btn-shadow-hover)}
.picks{display:grid;gap:10px;margin-top:4px}
.picks a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;border:1.5px solid var(--line);border-radius:var(--radius);color:var(--text);text-decoration:none;font-weight:750;font-size:.92rem;background:var(--field-bg);transition:border-color .15s}
.picks a:hover{border-color:var(--focus)}
.picks a span{color:var(--focus);font-size:.8rem;font-weight:800;white-space:nowrap}
.picks a.inline{display:inline;padding:0;border:0;background:none;color:var(--focus)}
.picks p{margin:6px 0 0;color:var(--muted);font-size:.85rem;line-height:1.5;text-align:center}
.ghost svg{width:18px;height:18px}
`;

/** Popup chrome: overlay, card, dark brand header, close button. */
export const leadModalStyles = `
.overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(3,5,10,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .22s ease}
.overlay.open{opacity:1;pointer-events:auto}
.card{position:relative;width:100%;max-width:480px;border-radius:20px;background:#fff;box-shadow:0 30px 90px rgba(0,0,0,.45),0 0 0 1px rgba(255,255,255,.08);overflow:auto;max-height:calc(100vh - 40px);transform:translateY(16px) scale(.98);transition:transform .28s cubic-bezier(.2,.8,.2,1)}
.overlay.open .card{transform:none}
.head{position:relative;padding:22px 26px;color:#f7fbff;background:radial-gradient(ellipse at 8% 0%,rgba(199,35,177,.55),transparent 55%),radial-gradient(ellipse at 100% 0%,rgba(255,151,45,.42),transparent 50%),linear-gradient(180deg,#0b0f1a,#070b14)}
.head::after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;background:var(--grad)}
.brand{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.mark{width:36px;height:36px;border-radius:9px;background:#fff;display:grid;place-items:center;box-shadow:0 0 26px rgba(255,74,184,.35)}
.mark svg{width:26px;height:26px}
.bname{display:grid;gap:3px;line-height:1}
.bname b{font-size:.9rem;font-weight:900;letter-spacing:.14em;color:#fff}
.bname small{font-size:.56rem;font-weight:800;letter-spacing:.19em;text-transform:uppercase;color:rgba(235,241,255,.68)}
.eyebrow{font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);margin:0 0 6px}
.title{font-size:1.55rem;line-height:1.12;font-weight:850;margin:0 0 6px;letter-spacing:-.01em;color:#fff}
.sub{font-size:.88rem;line-height:1.45;color:#c9c6d1;margin:0}
.close{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.06);color:#fff;font-size:20px;line-height:1;cursor:pointer;display:grid;place-items:center;transition:background .15s}
.close:hover{background:rgba(255,255,255,.16)}
.body{padding:22px 26px 24px}
.body .done{padding:12px 2px 6px}
@media (max-width:520px){.overlay{padding:0;align-items:flex-end}.card{max-width:none;border-radius:20px 20px 0 0;max-height:94vh;transform:translateY(40px)}.head{padding:20px}.title{font-size:1.32rem}.body{padding:18px 20px 22px}}
/* Light theme: host carries data-theme="light" (mirrored from <html> by ShadowPortal). */
:host([data-theme=light]) .overlay{background:rgba(20,24,36,.42)}
:host([data-theme=light]) .card{box-shadow:0 30px 80px rgba(20,24,40,.22),0 0 0 1px rgba(17,20,28,.08)}
:host([data-theme=light]) .head{color:#11141c;background:radial-gradient(ellipse at 8% 0%,rgba(223,26,168,.16),transparent 55%),radial-gradient(ellipse at 100% 0%,rgba(255,141,28,.16),transparent 50%),linear-gradient(180deg,#fbf7fb,#f6f4f8)}
:host([data-theme=light]) .mark{box-shadow:0 0 0 1px rgba(17,20,28,.08),0 6px 18px rgba(255,74,184,.18)}
:host([data-theme=light]) .bname b,:host([data-theme=light]) .title{color:#11141c}
:host([data-theme=light]) .bname small{color:#5b6070}
:host([data-theme=light]) .eyebrow{color:#0b7d8a}
:host([data-theme=light]) .sub{color:#4a5060}
:host([data-theme=light]) .close{border-color:rgba(17,20,28,.14);background:#fff;color:#11141c}
:host([data-theme=light]) .close:hover{background:#f1f2f5}
`;

/** Forward Deployed AI Engineer page theme: navy + solid orange, Avenir/Montserrat, 10px corners. */
export const fdeInlineStyles = `
:host{--btn-bg:#ff5e1f;--btn-shadow:0 10px 26px rgba(245,103,25,.28);--btn-shadow-hover:0 14px 32px rgba(245,103,25,.36);--focus:#ff5e1f;--focus-ring:rgba(255,94,31,.15);--check:#ff5e1f;--dot:#ff5e1f;--text:#14233a;--muted:#5b6b7f;--line:#d6dee8;--field-bg:#fff;--radius:8px;--btn-radius:8px;
font-family:"Avenir Next",Montserrat,"Segoe UI",-apple-system,BlinkMacSystemFont,sans-serif}
.btn:hover{filter:none;background:#e9500f}
.card{overflow:hidden;border-radius:12px;background:#f8fafc;box-shadow:0 26px 76px rgba(0,5,15,.35);border:1px solid rgba(255,255,255,.5)}
.head{position:relative;padding:24px 26px 22px;color:#f4f7fa;background:radial-gradient(ellipse at 100% 0%,rgba(255,94,31,.30),transparent 55%),linear-gradient(160deg,#0a1b2a,#061625)}
.head::after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,#ff5e1f,#ff9b57)}
.eyebrow{margin:0 0 8px;color:#ff7a3d;font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}
.title{margin:0 0 8px;font-size:1.65rem;line-height:1.1;font-weight:900;color:#fff;letter-spacing:-.01em}
.sub{margin:0 0 16px;color:#aab8c6;font-size:.9rem;line-height:1.5}
.benefits{list-style:none;margin:0;padding:0;display:grid;gap:9px}
.benefits li{display:flex;gap:10px;align-items:flex-start;font-size:.86rem;line-height:1.45;color:#e6edf4}
.benefits li b{color:#fff}
.benefits svg{flex:none;width:18px;height:18px;margin-top:1px}
@container (min-width:560px){.benefits{grid-template-columns:1fr 1fr;gap:10px 18px}}
.body{padding:22px 26px 24px}
.bare .body{padding:0}
.bare .card{background:transparent;box-shadow:none;border:0;border-radius:0}
.bare form{gap:11px}.bare .f{gap:5px}.bare input[type=text],.bare input[type=email],.bare input[type=tel],.bare select{height:42px}.bare .program{padding:9px 14px}.bare .btn{height:48px}
@media (max-width:520px){.head{padding:20px 18px}.title{font-size:1.38rem}.body{padding:18px 18px 20px}}
`;
