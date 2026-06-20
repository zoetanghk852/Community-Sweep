# Design Language: 社區換物carousell，鼓勵交換閒置物品、預約修繕

> Extracted from `https://community-sweep.vercel.app/` on June 19, 2026
> 731 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#4d7a64` | rgb(77, 122, 100) | hsl(151, 23%, 39%) | 21 |
| Secondary | `#a85538` | rgb(168, 85, 56) | hsl(16, 50%, 44%) | 25 |
| Accent | `#f5f1ea` | rgb(245, 241, 234) | hsl(38, 35%, 94%) | 33 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#ffffff` | hsl(0, 0%, 100%) | 214 |
| `#5a4e3c` | hsl(36, 20%, 29%) | 172 |
| `#000000` | hsl(0, 0%, 0%) | 90 |
| `#736456` | hsl(29, 14%, 39%) | 74 |
| `#e4ede8` | hsl(147, 20%, 91%) | 27 |
| `#b8a48a` | hsl(34, 24%, 63%) | 10 |

### Background Colors

Used on large-area elements: `#f5f1ea`, `#faf8f4`, `#fffcf8`, `#133220`, `#64170a`, `#e9e0d2`, `#fff8ef`, `#355a47`, `#c6d8ce`, `#f0e8dc`

### Text Colors

Text color palette: `#000000`, `#2a2318`, `#ffffff`, `#355a47`, `#736456`, `#5a4e3c`, `#4d7a64`, `#a85538`

### Gradients

```css
background-image: radial-gradient(80% 60% at 20% 0px, rgba(77, 122, 100, 0.14), rgba(0, 0, 0, 0) 55%);
```

```css
background-image: linear-gradient(oklab(0.979547 0.000585675 0.00570798 / 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgb(245, 241, 234) 100%);
```

```css
background-image: linear-gradient(rgb(245, 241, 234) 0%, oklab(0.937899 -0.0110451 0.0036127 / 0.25) 100%);
```

```css
background-image: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0) 50%);
```

```css
background-image: linear-gradient(to right bottom in oklab, rgb(168, 85, 56) 0%, rgb(135, 68, 40) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#2a2318` | text, border | 688 |
| `#ffffff` | text, border, background | 214 |
| `#355a47` | background, text, border | 179 |
| `#5a4e3c` | text, border | 172 |
| `#000000` | text, border | 90 |
| `#736456` | text, border | 74 |
| `#f5f1ea` | background | 33 |
| `#e4ede8` | background | 27 |
| `#a85538` | background, text, border | 25 |
| `#4d7a64` | background, text, border | 21 |
| `#ebe3d6` | background, border | 18 |
| `#ddd2c2` | border, background | 17 |
| `#64170a` | background, border | 11 |
| `#b8a48a` | border | 10 |
| `#c8b190` | background | 9 |
| `#133220` | background, border | 7 |
| `#d4c4ab` | border | 5 |
| `#c6d8ce` | background | 4 |

## Typography

### Font Families

- **Noto Sans TC** — used for all (697 elements)
- **Noto Serif TC** — used for all (34 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 67.5px | 4.2188rem | 700 | 67.5px | -1.6875px | p |
| 54px | 3.375rem | 700 | 60.48px | -1.35px | h1 |
| 40.5px | 2.5313rem | 700 | 45.36px | -1.0125px | h2 |
| 33.75px | 2.1094rem | 700 | 40.5px | -0.84375px | dd, h3 |
| 27px | 1.6875rem | 700 | 36px | normal | p, h3, span |
| 22.5px | 1.4063rem | 400 | 36.5625px | normal | p, h3, h2, span |
| 20.25px | 1.2656rem | 600 | 31.5px | normal | a, svg, path, p |
| 18px | 1.125rem | 400 | 27px | normal | html, head, meta, link |
| 15.75px | 0.9844rem | 600 | 25.2px | normal | a, p, dd, div |
| 13.5px | 0.8438rem | 400 | 18px | normal | p, dt, span |

### Heading Scale

```css
h1 { font-size: 54px; font-weight: 700; line-height: 60.48px; }
h2 { font-size: 40.5px; font-weight: 700; line-height: 45.36px; }
h3 { font-size: 33.75px; font-weight: 700; line-height: 40.5px; }
h3 { font-size: 27px; font-weight: 700; line-height: 36px; }
h3 { font-size: 22.5px; font-weight: 400; line-height: 36.5625px; }
h3 { font-size: 20.25px; font-weight: 600; line-height: 31.5px; }
h4 { font-size: 18px; font-weight: 400; line-height: 27px; }
```

### Body Text

```css
body { font-size: 15.75px; font-weight: 600; line-height: 25.2px; }
```

### Font Weights in Use

`400` (519x), `600` (126x), `500` (48x), `700` (38x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-54 | 54px | 3.375rem |
| spacing-63 | 63px | 3.9375rem |
| spacing-72 | 72px | 4.5rem |
| spacing-90 | 90px | 5.625rem |
| spacing-99 | 99px | 6.1875rem |
| spacing-108 | 108px | 6.75rem |
| spacing-136 | 136px | 8.5rem |
| spacing-181 | 181px | 11.3125rem |
| spacing-208 | 208px | 13rem |
| spacing-325 | 325px | 20.3125rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| md | 7px | 27 |
| lg | 14px | 44 |
| xl | 18px | 46 |
| full | 27px | 4 |
| full | 32px | 2 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.86829 0.00544527 0.0242809 / 0.5) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.544523 0.0902701 0.0748228 / 0.2) 0px 4px 6px -1px, oklab(0.544523 0.0902701 0.0748228 / 0.2) 0px 2px 4px -2px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 4px 6px -1px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 2px 4px -2px;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset, rgba(53, 90, 71, 0.1) 0px 4px 24px -4px;
```

**lg** — blur: 24px
```css
box-shadow: rgba(53, 90, 71, 0.1) 0px 4px 24px -4px;
```

**xl** — blur: 48px
```css
box-shadow: rgba(53, 90, 71, 0.14) 0px 16px 48px -12px;
```

## CSS Custom Properties

### Colors

```css
--foreground: #2a2318;
--ink-muted: #5a4e3c;
--border-warm: #ddd2c2;
--card: #fffcf8;
--muted: #736456;
--border-light: #ebe3d6;
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--color-zinc-200: lab(90.6853% .399232 -1.45452);
--color-zinc-900: lab(8.30603% .618205 -2.16572);
--tw-inset-ring-shadow: 0 0 #0000;
--color-amber-500: lab(72.7183% 31.8672 97.9407);
--color-gray-900: lab(8.11897% .811279 -12.254);
--tw-ring-offset-color: #fff;
--color-white: #fff;
--color-gray-600: lab(35.6337% -1.58697 -10.8425);
--tw-border-style: solid;
--color-zinc-950: lab(2.51107% .242703 -.886115);
--color-gray-100: lab(96.1596% -.0823438 -1.13575);
--tw-ring-offset-width: 0px;
--color-amber-50: lab(98.6252% -.635922 8.42309);
```

### Spacing

```css
--spacing: .25rem;
--tw-space-y-reverse: 0;
```

### Typography

```css
--text-2xl: 1.5rem;
--leading-relaxed: 1.625;
--leading-snug: 1.375;
--tracking-tighter: -.05em;
--text-7xl: 4.5rem;
--text-lg: 1.125rem;
--text-5xl--line-height: 1;
--text-2xl--line-height: calc(2 / 1.5);
--text-base--line-height: calc(1.5 / 1);
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--tracking-wider: .05em;
--text-xl--line-height: calc(1.75 / 1.25);
--font-weight-semibold: 600;
--text-sm: .875rem;
--font-noto-serif-tc: "Noto Serif TC", "Noto Serif TC Fallback";
--text-lg--line-height: calc(1.75 / 1.125);
--leading-tight: 1.25;
--font-sans: "Noto Sans TC", "Noto Sans TC Fallback", "PingFang TC", "Microsoft JhengHei", system-ui, sans-serif;
--text-4xl: 2.25rem;
--font-weight-bold: 700;
--font-noto-sans-tc: "Noto Sans TC", "Noto Sans TC Fallback";
--text-sm--line-height: calc(1.25 / .875);
--text-3xl--line-height: calc(2.25 / 1.875);
--text-5xl: 3rem;
--text-6xl: 3.75rem;
--text-3xl: 1.875rem;
--text-xs: .75rem;
--text-xs--line-height: calc(1 / .75);
--default-font-family: "Noto Sans TC", "Noto Sans TC Fallback", "PingFang TC", "Microsoft JhengHei", system-ui, sans-serif;
--font-weight-medium: 500;
--font-display: "Noto Serif TC", "Noto Serif TC Fallback", "Songti TC", "PMingLiU", serif;
--text-7xl--line-height: 1;
--text-6xl--line-height: 1;
--text-4xl--line-height: calc(2.5 / 2.25);
--text-xl: 1.25rem;
--text-base: 1rem;
--default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--tracking-tight: -.025em;
```

### Shadows

```css
--shadow-warm: 0 4px 24px -4px #355a471a;
--shadow-warm-lg: 0 16px 48px -12px #355a4724;
--shadow-lift: 0 24px 64px -16px #2a23181f;
--tw-inset-shadow-alpha: 100%;
--tw-drop-shadow-alpha: 100%;
--tw-inset-shadow: 0 0 #0000;
--tw-shadow-alpha: 100%;
--tw-shadow: 0 0 #0000;
```

### Radii

```css
--radius-3xl: 1.5rem;
--radius-xl: .75rem;
--radius-2xl: 1rem;
--radius-md: .375rem;
--radius-lg: .5rem;
```

### Other

```css
--background: #faf8f4;
--cream: #faf8f4;
--cream-dark: #f0e8dc;
--terracotta: #a85538;
--terracotta-dark: #874428;
--wood: #b8986a;
--wood-light: #e5d9c6;
--sage: #4d7a64;
--sage-light: #e4ede8;
--sage-dark: #355a47;
--page: #f5f1ea;
--z-nav: 40;
--z-overlay: 50;
--z-modal: 60;
--container-md: 28rem;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--tw-outline-style: solid;
--container-5xl: 64rem;
--tw-translate-z: 0;
--tw-gradient-via: rgba(0, 0, 0, 0);
--tw-scale-y: 1;
--container-6xl: 72rem;
--container-3xl: 48rem;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0, 0, .2, 1);
--animate-spin: spin 1s linear infinite;
--tw-gradient-from: rgba(0, 0, 0, 0);
--tw-gradient-to: rgba(0, 0, 0, 0);
--blur-3xl: 64px;
--tw-divide-y-reverse: 0;
--tw-scale-z: 1;
--container-2xl: 42rem;
--container-sm: 24rem;
--tw-translate-x: 0;
--tw-gradient-via-position: 50%;
--container-lg: 32rem;
--tw-scale-x: 1;
--tw-gradient-to-position: 100%;
--default-transition-duration: .15s;
--container-xl: 36rem;
--container-xs: 20rem;
--container-7xl: 80rem;
--tw-gradient-from-position: 0%;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 640px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`

**Durations:** `0.2s`, `0.15s`

### Common Transitions

```css
transition: all;
transition: top 0.2s;
transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s;
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), translate 0.2s cubic-bezier(0.4, 0, 0.2, 1), scale 0.2s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (26 instances)

```css
.button {
  background-color: rgb(77, 122, 100);
  color: rgb(255, 255, 255);
  font-size: 15.75px;
  font-weight: 600;
  padding-top: 9px;
  padding-right: 0px;
  border-radius: 13.5px;
}
```

### Cards (35 instances)

```css
.card {
  background-color: rgb(255, 252, 248);
  border-radius: 18px;
  box-shadow: rgba(53, 90, 71, 0.1) 0px 4px 24px -4px;
  padding-top: 9px;
  padding-right: 0px;
}
```

### Inputs (10 instances)

```css
.input {
  background-color: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  border-color: rgb(221, 210, 194);
  border-radius: 13.5px;
  font-size: 18px;
  padding-top: 13.5px;
  padding-right: 18px;
}
```

### Links (25 instances)

```css
.link {
  color: rgb(90, 78, 60);
  font-size: 15.75px;
  font-weight: 500;
}
```

### Navigation (2 instances)

```css
.navigatio {
  color: rgb(42, 35, 24);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.foote {
  background-color: rgb(240, 232, 220);
  color: rgb(42, 35, 24);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 18px;
}
```

### Modals (2 instances)

```css
.modal {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (1 instances)

```css
.dropdown {
  border-radius: 0px;
  border-color: rgb(42, 35, 24);
  padding-top: 0px;
}
```

### Accordions (10 instances)

```css
.accordion {
  background-color: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  font-size: 18px;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(235, 227, 214);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Link — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: oklab(0.992252 0.00160345 0.00600511 / 0.9);
  color: rgb(42, 35, 24);
  padding: 18px 31.5px 18px 31.5px;
  border-radius: 13.5px;
  border: 1px solid rgb(221, 210, 194);
  font-size: 20.25px;
  font-weight: 600;
```

### Card — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  padding: 99px 0px 108px 0px;
  border-radius: 0px;
  border: 0px solid rgb(42, 35, 24);
  font-size: 18px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: oklab(0.992252 0.00160345 0.00600511 / 0.7);
  color: rgb(42, 35, 24);
  padding: 36px 36px 36px 36px;
  border-radius: 18px;
  border: 0px solid rgb(42, 35, 24);
  font-size: 18px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  padding: 13.5px 18px 13.5px 18px;
  border-radius: 0px;
  border: 0px 0px 1px solid rgb(235, 227, 214);
  font-size: 15.75px;
  font-weight: 600;
```

### Input — 4 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  padding: 13.5px 18px 13.5px 45px;
  border-radius: 13.5px;
  border: 1px solid rgb(221, 210, 194);
  font-size: 18px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(42, 35, 24);
  padding: 13.5px 18px 13.5px 18px;
  border-radius: 13.5px;
  border: 2px solid rgb(221, 210, 194);
  font-size: 18px;
  font-weight: 400;
```

### Button — 23 instances, 3 variants

**Variant 1** (12 instances)

```css
  background: rgb(77, 122, 100);
  color: rgb(255, 255, 255);
  padding: 9px 15.75px 9px 15.75px;
  border-radius: 9px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 15.75px;
  font-weight: 500;
```

**Variant 2** (10 instances)

```css
  background: rgb(255, 252, 248);
  color: rgb(90, 78, 60);
  padding: 9px 15.75px 9px 15.75px;
  border-radius: 9px;
  border: 0px solid rgb(90, 78, 60);
  font-size: 15.75px;
  font-weight: 500;
```

**Variant 3** (1 instance)

```css
  background: oklab(0.992252 0.00160345 0.00600511 / 0.9);
  color: rgb(42, 35, 24);
  padding: 15.75px 0px 15.75px 0px;
  border-radius: 13.5px;
  border: 1px solid rgb(221, 210, 194);
  font-size: 18px;
  font-weight: 600;
```

### Input — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  padding: 13.5px 18px 13.5px 18px;
  border-radius: 13.5px;
  border: 1px solid rgb(221, 210, 194);
  font-size: 18px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(42, 35, 24);
  padding: 13.5px 18px 13.5px 18px;
  border-radius: 13.5px;
  border: 2px solid rgb(221, 210, 194);
  font-size: 18px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(77, 122, 100);
  color: rgb(255, 255, 255);
  padding: 13.5px 22.5px 13.5px 22.5px;
  border-radius: 13.5px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 600;
```

### Card — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  padding: 0px 0px 0px 0px;
  border-radius: 18px;
  border: 1px solid rgb(235, 227, 214);
  font-size: 18px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  padding: 31.5px 31.5px 31.5px 31.5px;
  border-radius: 18px;
  border: 0px solid rgb(42, 35, 24);
  font-size: 18px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 252, 248);
  color: rgb(42, 35, 24);
  padding: 0px 0px 0px 0px;
  border-radius: 18px;
  border: 0px solid rgb(42, 35, 24);
  font-size: 18px;
  font-weight: 400;
```

### Other — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 400;
```

## Layout System

**18 grid containers** and **99 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1296px | 27px |
| 100% | 0px |
| 432px | 0px |
| 864px | 27px |
| 576px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 2-column | 11x |
| 4-column | 4x |
| 3-column | 3x |

### Grid Templates

```css
grid-template-columns: 396.656px 396.672px 396.656px;
gap: 18px;
grid-template-columns: 568px 568px;
gap: 90px;
grid-template-columns: 490.438px 663.562px;
gap: 72px;
grid-template-columns: 527.391px 644.609px;
gap: 54px;
grid-template-columns: 605.844px 548.141px;
gap: 72px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 69x |
| column/nowrap | 18x |
| row/wrap | 12x |

**Gap values:** `11.25px`, `13.5px`, `13.5px 27px`, `18px`, `2.25px`, `22.5px`, `27px`, `36px`, `45px`, `54px`, `72px`, `90px`, `9px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 48 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#4d7a64` | 4.9:1 | AAA |
| `#5a4e3c` | `#fffcf8` | 7.93:1 | AAA |
| `#2a2318` | `#e4ede8` | 13:1 | AAA |
| `#355a47` | `#e4ede8` | 6.5:1 | AA |
| `#ffffff` | `#355a47` | 7.76:1 | AAA |
| `#ffffff` | `#a85538` | 5.22:1 | AAA |
| `#2a2318` | `#fff8ef` | 14.74:1 | AAA |
| `#736456` | `#f0e8dc` | 4.69:1 | AA |
| `#355a47` | `#f5f1ea` | 6.9:1 | AAA |

## Design System Score

**Overall: 88/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 90/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 90/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 92% of CSS is unused — consider purging
- 3835 duplicate CSS declarations

## Gradients

**5 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| radial | — | 3 | bold |
| linear | — | 3 | bold |
| linear | — | 2 | brand |
| radial | circle at 80% 20% | 2 | brand |
| linear | to right bottom in oklab | 2 | brand |

```css
background: radial-gradient(80% 60% at 20% 0px, rgba(77, 122, 100, 0.14), rgba(0, 0, 0, 0) 55%);
background: linear-gradient(oklab(0.979547 0.000585675 0.00570798 / 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgb(245, 241, 234) 100%);
background: linear-gradient(rgb(245, 241, 234) 0%, oklab(0.937899 -0.0110451 0.0036127 / 0.25) 100%);
background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0) 50%);
background: linear-gradient(to right bottom in oklab, rgb(168, 85, 56) 0%, rgb(135, 68, 40) 100%);
```

## Z-Index Map

**4 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 100,100 | a.s.k.i.p.-.l.i.n.k |
| sticky | 10,50 | div.a.b.s.o.l.u.t.e. .-.l.e.f.t.-.6. .t.o.p.-.8. .z.-.1.0. .h.i.d.d.e.n. .m.a.x.-.w.-.[.1.1.r.e.m.]. .r.o.u.n.d.e.d.-.2.x.l. .g.l.a.s.s.-.p.a.n.e.l. .p.-.4. .l.g.:.b.l.o.c.k, div.a.b.s.o.l.u.t.e. .-.b.o.t.t.o.m.-.5. .-.r.i.g.h.t.-.4. .z.-.1.0. .r.o.u.n.d.e.d.-.2.x.l. .b.g.-.s.a.g.e. .p.x.-.5. .p.y.-.4. .t.e.x.t.-.w.h.i.t.e. .s.h.a.d.o.w.-.w.a.r.m.-.l.g. .s.m.:.-.r.i.g.h.t.-.8, div.g.r.a.i.n.-.o.v.e.r.l.a.y |
| base | 1,1 | img.r.e.l.a.t.i.v.e. .z.-.[.1.]. .w.-.f.u.l.l. .r.o.u.n.d.e.d.-.[.1...7.5.r.e.m.]. .s.h.a.d.o.w.-.l.i.f.t. .r.i.n.g.-.1. .r.i.n.g.-.b.o.r.d.e.r.-.w.a.r.m./.5.0 |

## SVG Icons

**24 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| sm | 1 |
| md | 15 |
| lg | 7 |
| xl | 1 |

**Icon colors:** `currentColor`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Noto Sans TC | self-hosted | 400, 500, 600, 700 | normal |
| Noto Serif TC | self-hosted | 600, 700 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 11 | objectFit: fill, borderRadius: 13.5px, shape: rounded |
| general | 1 | objectFit: fill, borderRadius: 31.5px, shape: pill |

**Aspect ratios:** 1:1 (11x), 16:9 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |

### Easing Families

- **custom** (48 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`

## Component Anatomy

### button — 24 instances

**Slots:** label
**Sizes:** lg · xl

### card — 17 instances

**Slots:** media
**Sizes:** lg · sm

### input — 6 instances

**Variants:** outline
**Sizes:** xl

## Brand Voice

**Tone:** playful · **Pronoun:** third-person · **Headings:** all-lowercase (tight)

### Top CTA Verbs

- **app** (1)

### Button Copy Patterns

- "以 2 積分預約換取" (4×)
- "以 3 積分預約換取" (3×)
- "全部" (2×)
- "體驗示範 app" (1×)
- "衣物" (1×)
- "玩具" (1×)
- "餐具" (1×)
- "書報" (1×)
- "家電" (1×)
- "其他" (1×)

### Sample Headings

> 社區換物carousell
> 社區換物carousell
> 活化社區閒置資源
> 改善心理與社交孤立
> 強化社區凝聚力
> 社區換物carousell
> 社區換物carousell
> 活化社區閒置資源
> 改善心理與社交孤立
> 強化社區凝聚力

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** 針對有囤積習慣的長者，每月舉辦換物市集並提供線上換物，發掘舊物價值，重建街坊連結。

## Section Roles

Reading order (top→bottom): nav → nav → content → content → content → content → feature-grid → content → testimonial → content → content → content → hero → faq → hero → pricing-table → footer → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | content | 社區換物carousell | 0.3 |
| 3 | content | 社區換物carousell | 0.3 |
| 4 | content | 社區換物carousell | 0.3 |
| 5 | content | 發掘價值 · 與人交流 · 藝術美學 | 0.3 |
| 6 | feature-grid | 三大社區服務支柱 | 0.8 |
| 7 | content | 服務類別與平台比較 | 0.3 |
| 8 | testimonial | 長者友善的App端設計 | 0.8 |
| 9 | content | — | 0.3 |
| 10 | content | 快捷功能 | 0.3 |
| 11 | content | 線上換物預覽 | 0.3 |
| 12 | hero | 真實的社區回饋 | 0.4 |
| 13 | faq | 常見問題 | 0.85 |
| 14 | hero | 登記參加社區活動 | 0.4 |
| 15 | pricing-table | 工作坊報名付款（示範） | 0.9 |
| 16 | footer | — | 0.95 |
| 17 | nav | — | 0.9 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.282 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 32px |
| backdrop-filter in use | no |
| Gradients | 5 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 12, svg 0, icon 2, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** soft

## Component Library

**Detected:** `shadcn/ui` (confidence 0.65)

Evidence:
- shadcn css tokens

Also considered: tailwindcss (0.3)

## Component Screenshots

19 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| card--default--xl | 0 | 189 × 70 | `screenshots/card-default-xl-0.png` |
| card--default | 0 | 1280 × 817 | `screenshots/card-default-0.png` |
| card--default | 1 | 1280 × 802 | `screenshots/card-default-1.png` |
| card--default | 2 | 1280 × 979 | `screenshots/card-default-2.png` |
| card--default--lg | 0 | 1172 × 180 | `screenshots/card-default-lg-0.png` |
| card--default--lg | 1 | 1172 × 180 | `screenshots/card-default-lg-1.png` |
| card--default--lg | 2 | 1172 × 180 | `screenshots/card-default-lg-2.png` |
| card--default--sm | 0 | 430 × 51 | `screenshots/card-default-sm-0.png` |
| card--default--sm | 1 | 664 × 627 | `screenshots/card-default-sm-1.png` |
| input--outline--xl | 0 | 1172 × 56 | `screenshots/input-outline-xl-0.png` |
| input--outline--xl | 1 | 473 × 56 | `screenshots/input-outline-xl-1.png` |
| input--outline--xl | 2 | 473 × 110 | `screenshots/input-outline-xl-2.png` |
| button--default--lg | 0 | 63 × 41 | `screenshots/button-default-lg-0.png` |
| button--default--lg | 1 | 63 × 41 | `screenshots/button-default-lg-1.png` |
| button--default--lg | 2 | 63 × 41 | `screenshots/button-default-lg-2.png` |
| button--default--xl | 0 | 352 × 50 | `screenshots/button-default-xl-0.png` |
| button--default--xl | 1 | 352 × 50 | `screenshots/button-default-xl-1.png` |
| button--default--xl | 2 | 352 × 50 | `screenshots/button-default-xl-2.png` |
| other--default | 0 | 23 × 23 | `screenshots/other-default-0.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Noto Sans TC` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
