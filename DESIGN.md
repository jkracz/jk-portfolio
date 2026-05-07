---
name: joekracz.com
description: Personal portfolio and hire-me surface for Joe Kracz, freelance software engineer.
colors:
  cobalt: "#2c3ea8"
  cobalt-dark: "#4757c7"
  ink: "#0a0e1c"
  paper: "#fbfcfe"
  mist: "#f1f3f8"
  mist-dark: "#1d2030"
  text-soft: "#6c7280"
  text-soft-dark: "#9ca0ad"
  hairline: "#dfe3ec"
  hairline-dark: "#25293a"
  alarm: "#d9433a"
typography:
  display:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-large:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lead:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "clamp(1.125rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  caption:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "1px"
  md: "2px"
  lg: "4px"
  xl: "6px"
  "2xl": "8px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "64px"
  "2xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-quiet-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
  link-text:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  link-text-hover:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "40px"
---

# Design System: joekracz.com

## 1. Overview

**Creative North Star: "The Senior Engineer's Notebook"**

A quiet, confident surface for evaluating Joe. The structure is calm and scannable, the type does most of the work, and the personality lives in the details: monospaced body copy, an animated underline on every link, a single cobalt accent that you notice precisely because it is rare. The system rejects the pieces that betray a templated origin — no gradient hero bloom doing the heavy lifting, no Skittles-pack of feature-card colors, no SaaS-cream pastels, no decorative glassmorphism, no cycling marketing typewriter. Where personality is wanted, the page leans on typographic confidence and asymmetric composition. Where atmosphere is wanted, it reaches for a single deliberate shape, not a smeared gradient.

The destination palette is **Cobalt Ink on faintly-tinted Paper**: a deeper, more saturated blue than the shadcn default, paired with a near-black tinted toward the accent and a Paper that carries a hair of cool to kill the pure-white tell. Both light and dark themes share the doctrine: restrained, type-forward, one voice.

This system explicitly rejects: SaaS-cream gradient hero pages, neo-brutalist marquee agency style, "creative developer" 3D-blob WebGL playgrounds, the dark-with-neon-green hacker terminal, and the generic "Hi, I'm X" Tailwind-starter dev portfolio. It also rejects template silhouettes — symmetric two-column heroes, four identical feature cards in a row, a "Let's Build Something Great Together" centered contact section. Even when individual elements are clean, that silhouette is what makes a senior visitor read "framework" instead of "Joe."

**Key Characteristics:**
- Mono body, sans display — the contrast is the personality
- One accent color, used on ≤10% of any screen (Cobalt Ink, never green/amber/purple/teal alongside it)
- Typography-forward composition — type carries hierarchy before color or shape do
- Asymmetric layouts where templates would default to symmetric
- Motion is feedback and entrance, never choreography or ornament
- Section bands (alternating Paper and Mist) are the layout primitive, not card grids on uniform backgrounds

## 2. Colors: The Cobalt Ink Palette

A deliberately tight palette: a single saturated cobalt accent, a near-black ink tinted faintly toward the accent, and an off-white Paper. Both themes share the same Cobalt; surfaces invert.

### Primary
- **Cobalt** (`#2c3ea8` / `oklch(48% 0.17 257)`): The single accent. Primary buttons, link hover underlines, focus rings, the rare bold mark inside a dense layout. Used on no more than ~10% of a rendered screen. Its weight comes from its scarcity.
- **Cobalt (dark theme)** (`#4757c7` / `oklch(58% 0.18 255)`): The accent lifts in lightness when riding on Ink so perceived saturation stays even. Same hue family.

### Neutral
- **Ink** (`#0a0e1c` / `oklch(15% 0.02 255)`): Foreground text in light mode, base background in dark mode. Near-black, tinted faintly toward Cobalt — never pure `#000`.
- **Paper** (`#fbfcfe` / `oklch(99% 0.004 250)`): Base background in light mode. A hair cool. Never pure `#ffffff`.
- **Mist** (`#f1f3f8` light / `#1d2030` dark): Section backgrounds for the alternating bands between Hero, Services, Portfolio, About, Contact. Also surface for muted chips and inactive states.
- **Text Soft** (`#6c7280` light / `#9ca0ad` dark): Supporting copy, captions, technology lists. Lower-weight content that should sit behind primary text.
- **Hairline** (`#dfe3ec` light / `#25293a` dark): Borders, dividers, input strokes. Always 1px. Visible but never assertive.

### Tertiary (rare)
- **Alarm** (`#d9433a` / `oklch(58% 0.20 25)`): Destructive actions and form validation only. Slightly tinted off the default red so it doesn't read shadcn. Never decorative.

### Named Rules
**The One Voice Rule.** The site has exactly one accent: Cobalt. No green, amber, purple, teal, or violet siblings on primary surfaces. The four service cards use Cobalt or no color, never four different hues. If a layout needs to differentiate items, use position, scale, weight, or icon — never color.

**The 10% Rule.** Cobalt covers no more than ~10% of any rendered screen. If a layout needs more emphasis, use weight, scale, or whitespace, not more Cobalt. The accent's power is its scarcity.

**The No-Pure-Black-Or-White Rule.** Never `#000` or `#ffffff`. Use Ink (`#0a0e1c`) and Paper (`#fbfcfe`). Pure black on pure white reads as templated; the faintly-tinted versions read as considered.

## 3. Typography

**Display Font:** Switzer (system-ui, sans-serif fallback)
**Body Font:** Geist Mono (ui-monospace, monospace fallback)
**Label Font:** Geist Mono

**Character:** A clean grotesque against a precise mono. Switzer is architectural: minimal humanist softness, geometric without being naive, distinctive without being weird. Reads like a magazine masthead or spec sheet. Paired with Geist Mono on body, the contrast carries the personality: structured display, precise body. Together they signal a builder who reads typography books AND ships production systems. The body's monospace is the single most distinctive choice in the system — preserve it.

### Hierarchy
- **Display** (Switzer 700, `clamp(3rem, 8vw, 5.5rem)`, line-height 1, `letter-spacing: -0.025em`): Hero claim only. Tracks tight, set on one or two lines, never centered.
- **Headline** (Switzer 500, `clamp(1.875rem, 4vw, 3rem)`, line-height 1.1, `letter-spacing: -0.015em`): Section headers (`h2`). Medium weight (not bold). Switzer's clean lines read editorial at medium; bold would feel heavy in body context. Always paired with a one-sentence subhead in mono.
- **Title** (Switzer 600, `1.5rem`, line-height 1.2): Card titles, sub-section headers (`h3`).
- **Body** (Geist Mono 400, `1rem`, line-height 1.65): Default running copy. **Cap line length at 65–75ch** — mono is wide; long lines fatigue fast.
- **Body Large** (Geist Mono 400, `1.125rem`, line-height 1.65): About-section paragraphs and other "read me carefully" passages.
- **Lead** (Geist Mono 400, `clamp(1.125rem, 1.6vw, 1.25rem)`, line-height 1.55): One-line subheads beneath section headlines and the hero. Smaller than the previous spec — leads should not compete with the headline.
- **Caption** (Geist Mono 400, `0.875rem`, line-height 1.5): Tech labels, metadata, footer text.

### Voice (copy as part of the system)

Copy is implementation. These rules apply to every word that ships, not just to the design tokens.

- **Short declarative sentences.** Mono punishes verbosity; the visual rhythm of a long mono paragraph is wrong. Break paragraphs more often than feels necessary.
- **Specific over generic.** Replace any sentence that could appear on 100 other portfolios. "Software that actually works" is generic. "Shipped Zinegeist (writer-first publishing, 5→1,000 publication capacity per writer)" is specific.
- **Show the work, don't claim the trait.** Never write "passionate," "results-driven," "thoughtful," "modern," "scalable" as adjectives applied to Joe or his output. Show the result instead.
- **No em dashes.** Use commas, colons, semicolons, periods, parentheses. Also not `--`.
- **First person, plainly.** "I built" not "we delivered." "I work with" not "available for engagements." The site is one person; the voice is one person.
- **No category words doing positioning work.** "Web Apps / Mobile Apps / Digital Products" is a list of categories, not a claim. Replace with a sentence that says who Joe is good for and what he ships.

### Named Rules
**The Mono-Body Rule.** Body copy is always Geist Mono. Switching body to Switzer flattens the personality and turns the site into a generic shadcn template. The mono IS the differentiator.

**The Negative-Tracking Rule.** Display always carries `-0.025em` tracking; Headline always `-0.015em`. It tightens Switzer into something more editorial. The default tracking reads as a default.

**The One-Line Subhead Rule.** Every section headline gets exactly one line of mono lead beneath it. No multi-paragraph intros, no double-stacked subheads. If you can't say it in one line, the headline is wrong.

## 4. Elevation

The system is **flat-by-default with constrained atmosphere.** No `box-shadow` lifts. Depth comes from three things, in this order: tonal layering (alternating Mist and Paper section bands), generous whitespace between sections, and a single deliberate shape per section (a horizontal hairline, a soft circle behind a corner, a thin vertical Cobalt mark). Atmosphere is a *shape*, not a smear.

The header gains a subtle 1px Hairline border + `backdrop-blur-xs` once scrolled — the only meaningful "elevation" in the system. Cards do not lift. Buttons do not float.

### Motion philosophy

- **Default ease:** `cubic-bezier(0, 0, 0.2, 1)` (ease-out). No spring on layout, no bounce, no elastic. Springs allowed only on small playful moments (header logo, social-icon hover) where they read as personality, never on entrance animations.
- **Default duration:** 200ms for color transitions, 300ms for underline reveals and entrance fades, 400ms for entrance translates. If something feels slow, halve the duration before anything else.
- **Stagger:** 100ms per item, max 5 items. Larger lists fall back to `whileInView` per-item without stagger.
- **Reduced motion:** Honor `prefers-reduced-motion` for all entrance animations, the typewriter, and the header transition. Reduced-motion users see opacity changes only, no transforms.

### Named Rules
**The No-Lift Rule.** Cards, services, portfolio items, and form fields have zero shadow at rest. Hover reveals through color (background nudge to Mist, border to Cobalt), never through elevation. The single permitted shadow is the header's `0 1px 0 rgba(10, 14, 28, 0.06)` once scrolled.

**The Single-Shape Rule.** Decorative atmosphere is a *deliberate* shape — one per section, max. A soft 24rem-wide low-opacity Cobalt circle behind a corner, a hairline rule beneath a headline, a thin vertical Cobalt mark before a paragraph. Never two atmospheric blurs in the same section. Never a full-section radial gradient bloom.

## 5. Components

### Buttons
- **Shape:** Architectural — rounded medium corners (`2px`). Reads as crisp, almost-square; the slight rounding remains tactile but the silhouette is no longer soft.
- **Primary:** Cobalt fill, Paper text, weight 500 at `text-sm`. Padding `8px 16px` at default; `12px 24px` at large. Hover transitions to Ink fill (not "Cobalt at 90%"); the dark hover reads more confident than a faded version of the resting state.
- **Quiet (secondary):** Paper background, Ink text, Hairline border. The default secondary CTA. Hover fills with Mist. Used when a button is genuinely needed; for "see the work" or "back" actions, prefer a text link.
- **Text Link:** Inline text color Ink, animated cobalt underline that slides in left-to-right on hover (200ms). For secondary navigation actions like "view my work" beside a primary CTA — replaces the second button on the hero.
- **Focus:** 2px Cobalt focus ring at low alpha, 2px offset in Paper. Always visible.
- **Forbidden:** The white-translucent left-to-right wipe on hover. It was a 2010s skeuomorphism; the system uses color and background nudges only.

### Cards
- **Corner Style:** Rounded large (`4px`). Architectural — almost-square but with just enough roundness to register as a contained block.
- **Background:** Paper at rest.
- **Shadow Strategy:** None at rest. See Elevation.
- **Border:** 1px Hairline.
- **Internal Padding:** `24px` standard, `32px` for content-heavy cards.
- **Hover (when interactive):** Background nudge to a tinted Mist, border tightens to Cobalt at 25% alpha. Optional 1px translateY for portfolio items only — never for static info cards.

### Inputs
- **Style:** 1px Hairline border, Paper background, `2px` radius, height `40px`, padding `8px 12px`. Body text in Geist Mono — yes, including form fields. The mono is the consistency.
- **Focus:** 2-ring offset in Cobalt at low alpha. No glow, no bare border-color shift.
- **Error:** Border switches to Alarm. Helper text below in Alarm at caption size. No background tint.
- **Autocomplete:** Every form field MUST set the matching `autoComplete` attribute (`name`, `email`, `organization`, etc.). Browsers auto-fill when this is correct; the form should not punish a logged-in user with a typed-from-scratch experience.

### Navigation (Header)
- **Style:** Fixed top, transparent until scroll. Once scrolled, gains `bg-background/95` + `backdrop-blur-xs` + 1px Hairline border-bottom.
- **Typography:** Body small (`0.875rem`), weight 500, sentence case via `capitalize`.
- **Default / Hover / Active:** Animated Cobalt underline reveals on hover (left-to-right, 300ms). Active route gets a full-width underline at 60% Cobalt alpha.
- **URL fragments:** Click-to-scroll MUST update the URL fragment via `history.pushState`. Deep-linking and browser-back navigation depend on this.
- **Mobile:** Slide-down full-width sheet, same blur treatment, items stagger in (100ms per item).

### Section Bands (the layout primitive)
The page alternates two surface styles to create rhythm without decorative containers:
- **Paper bands** (Hero, Portfolio, Contact): `bg-paper`, with at most a single Single-Shape atmospheric mark per section.
- **Mist bands** (Services, About, Footer): `bg-mist`, with no atmosphere — Mist is its own atmosphere.

This alternation IS the layout primitive. There are no card grids floating on a single uniform background.

### Hero (canonical pattern)
The hero is the single most-seen surface and the hardest to get right. Required structure:

- **Asymmetric two-column.** Type column slightly wider than the illustration column (`60/40` on desktop). Symmetric `50/50` is forbidden — symmetry is what makes hero compositions read as templates.
- **Display claim, single line of mono lead, one specific proof line.** No cycling typewriter, no category list, no "Built for Results" filler. The claim says who Joe is good for and what he ships. The lead names a register (fractional / FT / project). The proof line cites one specific recent shipment with a number.
- **One primary CTA + one Text Link, not two buttons.** Two equally-weighted buttons read template; one button + one underlined text link reads confident.
- **Lottie illustration kept, sized to ~60% of its previous footprint.** It is the human element, sitting in the smaller column as punctuation. It does not compete with the type.
- **Atmosphere: Single-Shape Rule.** A single low-opacity Cobalt circle behind the Lottie's bottom-right corner OR a thin Cobalt vertical mark to the left of the claim. Choose one. Never both. Never a corner-to-corner radial bloom.

### Signature: Animated Underline Link
The system's most distinctive small detail. A Cobalt 2px underline slides in from left on hover, 300ms ease-out. Used on header nav, footer nav, the "see the work" hero text link, and inline body links. Do not use it as a button-like wrapper around an icon — it is for text only.

### Signature: Lottie Illustration
The hero pairs the claim with a `freelancer.lottie` animation. It is the human, low-saturation, line-art-forward element. If replaced, the replacement must be similarly understated (line-art, low chroma, contained motion). Never a 3D blob, never a shader, never an audio-reactive element.

## 6. Do's and Don'ts

### Do:
- **Do** keep Geist Mono as the body face. The mono is the most distinctive choice in the system.
- **Do** alternate Paper and Mist section bands for rhythm. Vertical padding `py-16 md:py-24` is the standard.
- **Do** use Cobalt on ≤10% of a screen. Buttons, link underlines, focus rings, the rare deliberate accent shape. Stop there.
- **Do** prefer a text link to a second button when "secondary" actions are needed.
- **Do** honor `prefers-reduced-motion` for the typewriter, hero entrance, and Framer animations.
- **Do** use Ink (`#0a0e1c`) and Paper (`#fbfcfe`) — never `#000` or `#ffffff`.
- **Do** set `autoComplete` attributes on every form field.
- **Do** call `history.pushState` on smooth-scroll nav clicks so URLs reflect position.
- **Do** ship asymmetric layouts in heroes and feature sections; symmetric two-columns are the template tell.
- **Do** write copy in short declarative sentences, first person, specific over generic.

### Don't:
- **Don't** use the legacy `gradient-text` utility (`from-primary to-purple-500 bg-clip-text`). Decorative gradient text is forbidden — single solid color, weight for emphasis. **Delete this utility from `globals.css` if it is still defined.**
- **Don't** use multiple accent colors on primary surfaces. The four service cards use Cobalt or no color, never green + amber + purple + violet. The pastel `from-green-500/20 to-amber-500/20` halos in `content/services.ts` are forbidden — collapse to one Cobalt halo with positional variation.
- **Don't** use `#000` or `#ffffff` literals anywhere. The current `bg-black` on dialog/alert-dialog overlays needs to migrate to Ink at low alpha.
- **Don't** add `box-shadow`-based card lifts. No-Lift Rule. If something needs to feel raised, increase contrast, not elevation.
- **Don't** wrap sections in cards-within-cards. No nested cards, ever.
- **Don't** add `border-left` or `border-right` accents greater than 1px as colored stripes.
- **Don't** add 3D blob shaders, audio-reactive WebGL, scroll-jacked physics, or oversized scrolling marquee text.
- **Don't** ship the dark-with-neon-green hacker-terminal aesthetic.
- **Don't** add a glassmorphic blur as decoration. The header's `backdrop-blur-xs` on scroll is the one sanctioned use.
- **Don't** use em dashes in body copy. Commas, colons, periods, parentheses only.
- **Don't** add a third typeface. Sans + Mono is the system.
- **Don't** add a "Hi, I'm Joe 👋" hero, a tech-icon wall, or a "Let's Build Something Great Together" centered contact headline. Each is on PRODUCT.md's anti-reference list.
- **Don't** ship a custom `mix-blend-mode: difference` cursor. Cursor mods read "creative developer," not "senior engineer."
- **Don't** ship the white-translucent left-to-right button wipe on hover. Color or background nudge only.
- **Don't** cycle category words on the hero ("Web Apps / Mobile Apps / Digital Products"). Categories are not positioning.
- **Don't** use two equally-weighted buttons on the hero. One button + one text link.
- **Don't** stack two atmospheric blurs in the same section. Single-Shape Rule.
