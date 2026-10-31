"""Generate a light-theme override stylesheet for the homepage's dark-designed rules.
Every emitted selector is scoped under [data-theme="light"], so the default (dark) site is untouched.
Colour mapping (neutral = low saturation):
  text-like props: light neutral -> ink at boosted alpha; light saturated accent -> same hue darkened (L .34);
  backgrounds/borders: dark neutral -> off-white/paper; dark saturated -> pale tint of same hue;
                       white-alpha overlays/borders -> ink-alpha; saturated/brand colours untouched;
  shadows: dark -> softened; white glows -> faint ink.
"""
import re, sys, colorsys, tinycss2
SRC, OUT = sys.argv[1], sys.argv[2]
PREFIX = re.compile(r'\.(dmh-|dma-|dmx-|dma\b|dmh\b|footer\b|footer-|site-header\b)')
SCOPE = '[data-theme="light"]'
INK = (17, 20, 28)  # #11141c
TEXT = {'color','fill','stroke','-webkit-text-fill-color','caret-color','text-decoration-color','column-rule-color'}
SHADOW = {'box-shadow','text-shadow','filter'}
COLOR_RE = re.compile(r'#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|(?<![-\w])white\b|(?<![-\w])black\b')
VARS = {'var(--white)': '#ffffff', 'var(--navy)': '#15243a', 'var(--text)': '#151922'}
# Photo overlays keep their dark scrims and white text (they sit on images, not on the page background).
EXCLUDE = re.compile(r'dmh-spotlight-(shade|name|slide|tag)')

def parse(tok):
    t = tok.lower()
    if t == 'white': return (255,255,255,1.0)
    if t == 'black': return (0,0,0,1.0)
    if t.startswith('#'):
        h = t[1:]
        if len(h) in (3,4): h = ''.join(c*2 for c in h)
        if len(h) not in (6,8): return None
        r,g,b = (int(h[i:i+2],16) for i in (0,2,4)); a = int(h[6:8],16)/255 if len(h)==8 else 1.0
        return (r,g,b,a)
    nums = re.findall(r'[\d.]+%?', t)
    if len(nums) < 3: return None
    def ch(v): return float(v[:-1])*2.55 if v.endswith('%') else float(v)
    r,g,b = (ch(v) for v in nums[:3])
    a = 1.0
    if len(nums) > 3: a = float(nums[3][:-1])/100 if nums[3].endswith('%') else float(nums[3])
    return (r,g,b,a)

def fmt(r,g,b,a):
    r,g,b = (max(0,min(255,round(x))) for x in (r,g,b))
    return f'rgba({r},{g},{b},{round(a,3)})' if a < 0.999 else f'#{r:02x}{g:02x}{b:02x}'

def hls(r,g,b): return colorsys.rgb_to_hls(r/255,g/255,b/255)
def from_hls(h,l,s): return tuple(x*255 for x in colorsys.hls_to_rgb(h,l,s))

def map_color(c, kind, target_l=0.34):
    r,g,b,a = c; h,l,s = hls(r,g,b)
    neutral = s < 0.22 or l > 0.93 or l < 0.06
    if kind == 'text':
        if l < 0.35: return None                      # already dark text (on a light tile)
        if neutral:
            return fmt(*INK, min(1.0, a + 0.16) if a < 0.84 else 1.0)
        if 0.14 < h < 0.56 and target_l < 0.4: target_l = 0.26       # yellow/green/cyan read lighter: go deeper for AA
        return fmt(*from_hls(h, target_l if l > target_l + 0.1 else l, min(s, 0.9)), max(a, 0.9))
    if kind == 'shadow':
        if l < 0.25: return fmt(r*0.2+20, g*0.2+25, b*0.2+40, round(a*0.28, 3))
        if neutral and l > 0.85: return fmt(*INK, round(a*0.5, 3))
        return fmt(r,g,b, round(a*0.6, 3))
    # background / border
    if neutral and l > 0.85:
        return fmt(*INK, a) if a < 0.5 else None          # white overlay -> ink overlay; white tile stays
    if l < 0.38:
        if neutral: nl = 0.985 - l*0.12; return fmt(*from_hls(h, nl, min(s, 0.25)), a)
        return fmt(*from_hls(h, 0.955, min(s, 0.55)), a)
    return None

def kind_for(prop):
    p = prop.lower()
    if p.startswith('--'):
        return 'text' if re.search(r'text|ink|fg|muted|copy', p) else 'bg'
    if p in TEXT: return 'text'
    if p in SHADOW: return 'shadow'
    if p.startswith(('background','border','outline')) or p in ('stop-color',): return 'bg'
    return None

PURE_COLOR = re.compile(r'^\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]*\)|white|black|transparent)\s*$')

def transform_value(prop, val, clip_text=False):
    k = kind_for(prop)
    if not k: return None
    target = 0.34
    if clip_text and prop.lower().startswith('background'): k, target = 'text', 0.45   # gradient display text: richer, still >= 3:1
    changed = False
    def rep(m):
        nonlocal changed
        c = parse(m.group(0))
        if not c: return m.group(0)
        n = map_color(c, k, target)
        if n is None: return m.group(0)
        changed = True; return n
    for k2, v2 in VARS.items(): val = val.replace(k2, v2)
    out = COLOR_RE.sub(rep, val)
    if changed: return out
    # Re-emit unchanged colours too, so scoped rules keep the original cascade order between themselves
    # (otherwise a scoped base rule would beat an unscoped modifier such as .dma-logo-img { background: #fff }).
    if prop.lower() == 'background' and not PURE_COLOR.match(val): return None
    if COLOR_RE.search(val) or 'transparent' in val: return out
    return None

def scope_selectors(prelude):
    sels = [s.strip() for s in prelude.split(',') if s.strip()]
    keep = [s for s in sels if PREFIX.search(s) and not EXCLUDE.search(s)]
    if not keep: return None
    return ', '.join(f'{SCOPE} {s}' for s in keep)

BRAND_KEYS = set()
def base_key(sel): return re.sub(r':{1,2}[\w-]+(\([^)]*\))?', '', sel).strip()

def rules_to_css(rules, depth=0):
    out = []
    for r in rules:
        if r.type == 'qualified-rule':
            pre = tinycss2.serialize(r.prelude).strip()
            sc = scope_selectors(pre)
            if not sc or pre.startswith(('from','to')) or re.match(r'^[\d.%, ]+$', pre): continue
            decls = tinycss2.parse_declaration_list(r.content, skip_comments=True, skip_whitespace=True)
            body = []
            raw = tinycss2.serialize(r.content)
            clip = 'background-clip' in raw and 'text' in raw and 'transparent' in raw
            # Text sitting on a saturated brand fill (gradient CTAs, pink chips) keeps its colour.
            on_brand = False
            for d in decls:
                if d.type == 'declaration' and d.lower_name in ('background', 'background-color', 'background-image') and not clip:
                    for m in COLOR_RE.finditer(tinycss2.serialize(d.value)):
                        c = parse(m.group(0))
                        if c and c[3] > 0.6:
                            hh, ll, ss = hls(*c[:3])
                            if ss > 0.45 and 0.35 < ll < 0.85: on_brand = True
                    if 'var(--grad' in tinycss2.serialize(d.value): on_brand = True
            keys = {base_key(x) for x in pre.split(',')}
            if on_brand: BRAND_KEYS.update(keys)
            elif keys & BRAND_KEYS: on_brand = True
            for d in decls:
                if d.type != 'declaration': continue
                val = tinycss2.serialize(d.value).strip()
                if on_brand and kind_for(d.lower_name) == 'text': continue
                nv = transform_value(d.lower_name if not d.name.startswith('--') else d.name, val, clip)
                if nv: body.append(f'{d.name}: {nv}{" !important" if d.important else ""}')
            if clip and any(b.startswith('background') for b in body):
                body += ['-webkit-background-clip: text', 'background-clip: text']
            if body: out.append(f'{sc} {{ ' + '; '.join(body) + '; }')
        elif r.type == 'at-rule' and r.lower_at_keyword in ('media', 'supports') and r.content:
            inner = rules_to_css(tinycss2.parse_rule_list(r.content, skip_comments=True, skip_whitespace=True), depth+1)
            if inner: out.append(f'@{r.at_keyword} {tinycss2.serialize(r.prelude).strip()} {{\n' + '\n'.join(inner) + '\n}')
    return out

css = open(SRC).read()
rules = tinycss2.parse_stylesheet(css, skip_comments=True, skip_whitespace=True)
gen = rules_to_css(rules)
open(OUT, 'w').write('/* AUTO-GENERATED by gen_light.py from app/globals.css: light-theme overrides for the dark homepage, header and footer.\n   Scoped to [data-theme="light"]; the default dark theme is unchanged. Hand-tuned fixes live in theme-light.css. */\n' + '\n'.join(gen) + '\n')
print(len(gen), 'rules/blocks')
