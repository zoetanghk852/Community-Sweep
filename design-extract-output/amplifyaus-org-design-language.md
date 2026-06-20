# Design Language: AMPLIFY Australia | We Need To Act — While We Still Can

> Extracted from `https://www.amplifyaus.org/` on June 19, 2026
> 2472 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#00530d` | rgb(0, 83, 13) | hsl(129, 100%, 16%) | 336 |
| Secondary | `#831672` | rgb(131, 22, 114) | hsl(309, 71%, 30%) | 2071 |
| Accent | `#ff8eff` | rgb(255, 142, 255) | hsl(300, 100%, 78%) | 81 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 272 |
| `#ffffff` | hsl(0, 0%, 100%) | 60 |
| `#ffe3ff` | hsl(300, 100%, 95%) | 13 |
| `#eeeeee` | hsl(0, 0%, 93%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#000000`, `#00ffe6`, `#ff8eff`, `#00fa7f`, `#eeeeee`, `#831672`, `#00530d`, `#ff0580`, `#003da2`, `#fcdc4d`

### Text Colors

Text color palette: `#000000`, `#831672`, `#ffffff`, `#00ffe6`, `#ffe3ff`, `#005768`, `#ffc7ff`, `#00fa7f`, `#00530d`, `#003da2`

### Gradients

```css
background-image: linear-gradient(90deg, rgb(131, 22, 114) calc(100% - 1px), rgba(0, 0, 0, 0));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#831672` | text, border, background | 2071 |
| `#003da2` | background, text, border | 777 |
| `#00530d` | background, text, border | 336 |
| `#000000` | text, border, background | 272 |
| `#00ffe6` | text, border, background | 226 |
| `#ffc7ff` | text, border, background | 120 |
| `#ff8eff` | background, text, border | 81 |
| `#ffffff` | background, text, border | 60 |
| `#00fa7f` | text, border, background | 58 |
| `#ff0580` | background, text, border | 25 |
| `#005768` | text, border, background | 21 |
| `#b42318` | text, border | 18 |
| `#ffe3ff` | text, border, background | 13 |
| `#fcdc4d` | text, border, background | 7 |
| `#eeeeee` | background | 1 |

## Typography

### Font Families

- **Roboto** — used for all (2034 elements)
- **Roboto Condensed** — used for all (374 elements)
- **Times New Roman** — used for body (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 168px | 10.5rem | 800 | 142.8px | -6.72px | h1, div, span |
| 159.6px | 9.975rem | 800 | 135.66px | -6.72px | span |
| 112.674px | 7.0421rem | 500 | 169.01px | -0.368px | div, h3, h2 |
| 104.16px | 6.51rem | 800 | 88.536px | -6.72px | span |
| 86.4331px | 5.4021rem | 800 | 95.0764px | -3.45732px | h2, div |
| 73.0519px | 4.5657rem | 500 | 109.578px | -0.368px | div, h3 |
| 66.43px | 4.1519rem | 700 | 99.645px | -0.368px | div, details, summary, a |
| 51.1591px | 3.1974rem | 800 | 56.275px | -2.04636px | p, h4 |
| 46.0997px | 2.8812rem | 500 | 69.1495px | -0.368px | div, h3 |
| 44.8px | 2.8rem | 500 | 49.28px | -1.792px | p, span, strong, br |
| 39.4823px | 2.4676rem | 800 | 59.2235px | -0.368px | ul, div, li, a |
| 30.5387px | 1.9087rem | 700 | 41.2272px | -0.610773px | p, h6 |
| 27.6px | 1.725rem | 500 | 41.4px | -0.368px | div, span, p |
| 22px | 1.375rem | 500 | 24.2px | normal | input |
| 18.4px | 1.15rem | 500 | 27.6px | -0.368px | body, div, style, svg |

### Heading Scale

```css
h1 { font-size: 168px; font-weight: 800; line-height: 142.8px; }
h3 { font-size: 112.674px; font-weight: 500; line-height: 169.01px; }
h2 { font-size: 86.4331px; font-weight: 800; line-height: 95.0764px; }
h3 { font-size: 73.0519px; font-weight: 500; line-height: 109.578px; }
h3 { font-size: 66.43px; font-weight: 700; line-height: 99.645px; }
h4 { font-size: 51.1591px; font-weight: 800; line-height: 56.275px; }
h3 { font-size: 46.0997px; font-weight: 500; line-height: 69.1495px; }
h3 { font-size: 39.4823px; font-weight: 800; line-height: 59.2235px; }
h6 { font-size: 30.5387px; font-weight: 700; line-height: 41.2272px; }
```

### Body Text

```css
body { font-size: 44.8px; font-weight: 500; line-height: 49.28px; }
```

### Font Weights in Use

`500` (1924x), `800` (360x), `700` (122x), `400` (66x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-37 | 37px | 2.3125rem |
| spacing-44 | 44px | 2.75rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-70 | 70px | 4.375rem |
| spacing-80 | 80px | 5rem |
| spacing-93 | 93px | 5.8125rem |
| spacing-135 | 135px | 8.4375rem |
| spacing-160 | 160px | 10rem |
| spacing-240 | 240px | 15rem |
| spacing-426 | 426px | 26.625rem |
| spacing-444 | 444px | 27.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| md | 6px | 1 |
| xl | 23px | 21 |
| full | 36px | 3 |
| full | 44px | 97 |
| full | 50px | 1 |
| full | 57px | 1 |
| full | 82px | 12 |
| full | 97px | 1 |
| full | 320px | 21 |
| full | 1280px | 3 |
| full | 15984px | 1 |

## Box Shadows

**lg** — blur: 20px
```css
box-shadow: rgb(0, 0, 0) 0px 2px 20px -3px;
```

## CSS Custom Properties

### Colors

```css
--_color---white: white;
--_color---elements--text-primary<deleted|relume-variable-text-color-1>: var(--_colors---main--black\<deleted\|relume-variable-color-primary-1\>);
--_colors---main--black<deleted|relume-variable-color-primary-1>: #111;
--_button---border: var(--_theme---button-primary--border);
--_color---transparent: transparent;
--_colors---main--transparent<deleted|variable-40324ddf-abac-0252-d4e5-2508bdaefdfb>: transparent;
--_button---border-hover: var(--_theme---button-primary--border-hover);
--_color---currentcolor: currentColor;
--_theme---background-secondary: var(--_color---white);
--_colors---main--white<deleted|relume-variable-color-primary-2>: white;
--_color---elements--link-hover<deleted|relume-variable-link-color-2>: var(--_color---elements--text-primary\<deleted\|relume-variable-text-color-1\>);
--_color---elements--background-primary<deleted|relume-variable-background-color-1>: var(--_colors---main--white\<deleted\|relume-variable-color-primary-2\>);
--_color---elements--text-alternate<deleted|relume-variable-text-color-3>: var(--_colors---main--white\<deleted\|relume-variable-color-primary-2\>);
--_theme---states--success-bg: #ecfdf3;
--_theme---states--error-bg: #fef3f2;
--_color---elements--background-alternate<deleted|relume-variable-background-color-4>: black;
--color--border--border-primary<deleted|relume-variable-border-color-1>: var(--base-color-neutral--black\<deleted\|relume-variable-color-neutral-1\>);
--base-color-neutral--white<deleted|relume-variable-color-neutral-2>: white;
--base-color-neutral--black<deleted|relume-variable-color-neutral-1>: black;
--base-color-neutral--neutral-lightest<deleted|relume-variable-color-neutral-3>: #eee;
--_color---magenta: #ff8eff;
--_color---black: black;
--_color---elements--background-secondary<deleted|relume-variable-background-color-2>: #eee;
--_theme---text-secondary: var(--_color---black);
--_color---teal: #00ffe6;
--_color---core-purple: #831672;
--_color---magenta-lightest: #ffe3ff;
--_color---elements--link-primary<deleted|relume-variable-link-color-1>: var(--_color---elements--text-primary\<deleted\|relume-variable-text-color-1\>);
--_color---pink: #ff0580;
--_color---yellow-dark: #fcdc4d;
--_color---mint: #00fa7f;
--_color---grey: #eee;
--_theme---button-primary--background: var(--_color---core-purple);
--_mode---blue-secondary: var(--_color---blue);
--_theme---button-secondary--background: var(--_color---magenta-light);
--_theme---button-secondary--text: var(--_color---core-purple);
--_mode---green-primary: var(--_color---mint);
--_mode---green-secondary: var(--_color---green);
--_mode---purple-primary: var(--_color---magenta);
--_mode---purple-secondary: var(--_color---core-purple);
--_mode---blue-primary: var(--_color---teal);
--_mode---yellow-pink-primary: var(--_color---yellow-dark);
--_mode---yellow-pink-secondary: var(--_color---pink);
--_color---grey-dark: #c2b4b4;
--_helper---inherit-color: inherit;
--_mode---text-secondary: var(--_color---core-purple);
--_theme---button-primary--text: var(--_color---white);
--_theme---button-primary--border: var(--_color---transparent);
--_color---magenta-light: #ffc7ff;
--_theme---button-primary--background-hover: var(--_theme---button-primary--background);
--_color---green: #00530d;
--_theme---button-primary--text-hover: var(--_theme---button-primary--text);
--_theme---button-primary--border-hover: var(--_theme---button-primary--border);
--_color---blue: #003da2;
--_color---yellow: #fde67f;
--_theme---button-secondary--border: var(--_color---transparent);
--_theme---button-secondary--background-hover: color-mix(in srgb,var(--_theme---button-secondary--background),var(--_color---black)10%);
--_theme---button-secondary--text-hover: var(--_theme---button-secondary--text);
--_theme---button-secondary--border-hover: var(--_theme---button-secondary--border);
```

### Spacing

```css
--_text-style---size: var(--_text-base---scale--m);
--_text-style---letter-spacing: -.02em;
--_space---0: 0rem;
--_space---1: clamp(0.9426rem, calc(0.9426rem + (0.0574 * ((100vw - 320px) / 100))), 1rem);
--_space---1-25: clamp(1.1554rem, calc(1.1554rem + (0.0946 * ((100vw - 320px) / 100))), 1.25rem);
--_space---0-25: .25rem;
--_space---0-5: clamp(0.49rem, calc(0.49rem + (0.01 * ((100vw - 320px) / 100))), 0.5rem);
--_space---2: clamp(1.7419rem, calc(1.7419rem + (0.2581 * ((100vw - 320px) / 100))), 2rem);
--_space---3: clamp(2.4108rem, calc(2.4108rem + (0.5892 * ((100vw - 320px) / 100))), 3rem);
--_space---1-5: clamp(1.3594rem, calc(1.3594rem + (0.1406 * ((100vw - 320px) / 100))), 1.5rem);
--_space---0-75: clamp(0.7209rem, calc(0.7209rem + (0.0291 * ((100vw - 320px) / 100))), 0.75rem);
--_space---4: clamp(2.9637rem, calc(2.9637rem + (1.0363 * ((100vw - 320px) / 100))), 4rem);
--_space---5: clamp(3.4164rem, calc(3.4164rem + (1.5836 * ((100vw - 320px) / 100))), 5rem);
--page-padding: 2.5vw;
--_space---7: clamp(4.0963rem, calc(4.0963rem + (2.9037 * ((100vw - 320px) / 100))), 7rem);
--_space---6: clamp(3.7869rem, calc(3.7869rem + (2.2131 * ((100vw - 320px) / 100))), 6rem);
--_space---8: clamp(4.3709rem, calc(4.3709rem + (3.6291 * ((100vw - 320px) / 100))), 8rem);
--_space---0-125: .125rem;
--_space---10: clamp(5rem, calc(5rem + (5 * ((100vw - 320px) / 100))), 10rem);
--_grid---column-gap: var(--_space---2);
--_grid---row-gap: var(--_space---4);
--_space---9: clamp(4.6475rem, calc(4.6475rem + (4.3525 * ((100vw - 320px) / 100))), 9rem);
--_space---2-5: clamp(2.0918rem, calc(2.0918rem + (0.4082 * ((100vw - 320px) / 100))), 2.5rem);
--_space---1-75: clamp(1.5548rem, calc(1.5548rem + (0.1952 * ((100vw - 320px) / 100))), 1.75rem);
--_space---3-5: clamp(2.7008rem, calc(2.7008rem + (0.7992 * ((100vw - 320px) / 100))), 3.5rem);
--_helper---custom-size: 0px;
--_helper---inherit-size: inherit;
--_icon---social--size: 0px;
```

### Typography

```css
--_text-style---font: var(--_text-base---font--body);
--_theme---text: var(--_color---core-purple);
--_text-style---line-height: 1.5;
--_text-style---weight: 500;
--_text-base---scale--3xl: calc( ((var(--t4-min) / 16) * 1rem) + (var(--t4-max) - var(--t4-min)) * var(--type-bp) );
--_text-base---scale--s: calc( ((var(--t-1-min) / 16) * 1rem) + (var(--t-1-max) - var(--t-1-min)) * var(--type-bp) );
--_button---text: var(--_theme---button-primary--text);
--_button---text-hover: var(--_theme---button-primary--text-hover);
--_text-base---scale--xl: calc( ((var(--t2-min) / 16) * 1rem) + (var(--t2-max) - var(--t2-min)) * var(--type-bp) );
--_text-base---font--heading: "Roboto Condensed",sans-serif;
--_theme---states--success-text: #027a48;
--_theme---states--error-text: #b42318;
--_text-base---scale--l: calc( ((var(--t1-min) / 16) * 1rem) + (var(--t1-max) - var(--t1-min)) * var(--type-bp) );
--_text-base---scale--2xl: calc( ((var(--t3-min) / 16) * 1rem) + (var(--t3-max) - var(--t3-min)) * var(--type-bp) );
--_text-base---scale--4xl: calc( ((var(--t5-min) / 16) * 1rem) + (var(--t5-max) - var(--t5-min)) * var(--type-bp) );
--_text-base---scale--m: calc( ((var(--t0-min) / 16) * 1rem) + (var(--t0-max) - var(--t0-min)) * var(--type-bp) );
--_text-base---scale--6xl: calc( ((var(--t7-min) / 16) * 1rem) + (var(--t7-max) - var(--t7-min)) * var(--type-bp) );
--_helper---inherit-font: inherit;
--_theme---selection--text: var(--_color---white);
--_mode---text: var(--_color---black);
--_text-style---text-transform: var(--_text-base---transform--none);
--_theme---button-link--text: var(--_theme---text);
--_theme---button-link--text-hover: var(--_color---black);
--_text-base---font--body: Roboto,sans-serif;
--_text-base---scale--xs: calc( ((var(--t-2-min) / 16) * 1rem) + (var(--t-2-max) - var(--t-2-min)) * var(--type-bp) );
--_text-base---scale--5xl: calc( ((var(--t6-min) / 16) * 1rem) + (var(--t6-max) - var(--t6-min)) * var(--type-bp) );
--_text-base---transform--none: var(--text-transform,none);
--_text-base---transform--uppercase: uppercase;
--_text-base---transform--capitalize: capitalize;
--type-min-font: 16;
--type-max-font: 20;
```

### Radii

```css
--radius--tiny: var(--_space---0-5);
--radius--small: var(--_space---1-5);
--radius--regular: var(--_space---3);
--radius--medium: var(--_space---6);
--radius--max: 20rem;
--radius--cta: min(var(--radius--medium),calc(50cqb - var(--_space---2)));
--radius--large: var(--_space---9);
```

### Other

```css
--_theme---link: var(--_color---core-purple);
--container--large: 120rem;
--_theme---background: var(--_color---grey);
--container--medium: 64rem;
--container--small: 48rem;
--_button---background: var(--_theme---button-primary--background);
--_button---background-hover: var(--_theme---button-primary--background-hover);
--section--small: var(--_space---2);
--section--medium: var(--_space---4);
--section--large: var(--_space---7);
--_icon---arrow: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.1882 20.0118L1.60472e-06 2.82353L2.82353 -9.25653e-07L20.0118 17.1882L20.0118 1.37647L24 1.41176L24 24L1.41176 24L1.37647 20.0118L17.1882 20.0118Z\" fill=\"white\"/></svg>"));
--_icon---x: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 38 35\"><path fill=\"white\" d=\"m7.488 2.507 26.135 26.136-3.932 3.932L3.556 6.439z\"/><path fill=\"white\" d=\"M3.556 28.642 29.691 2.507l3.933 3.932L7.488 32.574z\"/></svg>"));
--_icon---social--facebook: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 40 41\"><path fill=\"white\" d=\"M40 21.067C40 9.953 31.046.944 20 .944S0 9.954 0 21.067C0 31.11 7.314 39.434 16.875 40.944v-14.06h-5.078v-5.817h5.078v-4.434c0-5.043 2.986-7.828 7.554-7.828 2.189 0 4.477.393 4.477.393v4.952h-2.522c-2.484 0-3.259 1.55-3.259 3.142v3.774h5.547l-.887 5.817h-4.66v14.061C32.686 39.434 40 31.11 40 21.066Z\"/></svg>"));
--_icon---social--linkedin: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 36 37\"><path fill=\"white\" fill-rule=\"evenodd\" d=\"M3 .944a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-30a3 3 0 0 0-3-3H3Zm8.041 8.006c.012 1.912-1.42 3.09-3.119 3.082-1.6-.008-2.995-1.282-2.986-3.08.008-1.69 1.344-3.048 3.08-3.009 1.76.04 3.037 1.33 3.025 3.007Zm7.518 5.518h-5.042v17.12h5.326V28.907c-.002-2.027-.004-4.057.006-6.084.003-.493.025-1.004.152-1.474.475-1.755 2.053-2.889 3.814-2.61 1.13.177 1.878.833 2.193 1.899.195.666.282 1.383.29 2.078.023 2.095.02 4.19.017 6.286l-.003 2.219v.363h5.344v-.41l-.001-2.713c-.001-2.259-.002-4.517.004-6.777a12.078 12.078 0 0 0-.357-3.015c-.374-1.469-1.148-2.684-2.405-3.56-.892-.625-1.87-1.027-2.964-1.072-.125-.006-.25-.012-.377-.02-.56-.03-1.128-.06-1.663.048-1.53.306-2.874 1.006-3.89 2.241-.117.142-.233.286-.405.5l-.039.049v-2.388ZM5.363 31.593h5.302V14.48H5.363v17.114Z\" clip-rule=\"evenodd\"/></svg>"));
--_icon---caret-right: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 8 13\"><path fill=\"white\" stroke=\"white\" d=\"M1.626 11.916c-.1 0-.177-.03-.255-.108a.333.333 0 0 1-.109-.256c0-.101.03-.178.109-.256l4.707-4.707-.354-.354-4.353-4.352c-.078-.078-.1-.145-.097-.226a.366.366 0 0 1 .121-.26.335.335 0 0 1 .256-.11c.1 0 .178.031.256.11L6.85 6.34a.535.535 0 0 1 .062.072l.029.053a.353.353 0 0 1 .018.191l-.018.058a.401.401 0 0 1-.09.125l-4.97 4.969a.333.333 0 0 1-.256.108Z\"/></svg>"));
--_icon---social--instagram: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 36 37\"><path fill=\"white\" fill-rule=\"evenodd\" d=\"M26 .944H10c-5.523 0-10 4.478-10 10v16c0 5.523 4.477 10 10 10h16c5.523 0 10-4.477 10-10v-16c0-5.523-4.477-10-10-10Zm6.5 26a6.52 6.52 0 0 1-6.5 6.5H10a6.52 6.52 0 0 1-6.5-6.5v-16a6.52 6.52 0 0 1 6.5-6.5h16a6.52 6.52 0 0 1 6.5 6.5v16Zm-5-15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9.5-1.5a9 9 0 1 0 9 9 8.98 8.98 0 0 0-9-9Zm-5.5 9a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Z\" clip-rule=\"evenodd\"/></svg>"));
--_icon---social--twitter: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"white\" d=\"M357.2 48h70.6L273.6 224.2 455 464H313L201.7 318.6 74.5 464H3.8l164.9-188.5L-5.2 48h145.6l100.5 132.9L357.2 48zm-24.8 373.8h39.1L119.1 88h-42l255.3 333.8z\"/></svg>"));
--_icon---social--tiktok: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 32 37\"><path fill=\"white\" d=\"M27.714 8.644a8.19 8.19 0 0 1-.708-.412 9.969 9.969 0 0 1-1.82-1.546c-1.358-1.554-1.865-3.13-2.052-4.233h.008c-.156-.915-.092-1.508-.082-1.508h-6.183v23.908c0 .32 0 .638-.013.951 0 .04-.004.075-.006.117 0 .018 0 .036-.004.054v.013a5.25 5.25 0 0 1-2.641 4.167 5.16 5.16 0 0 1-2.558.675c-2.88 0-5.216-2.35-5.216-5.25s2.335-5.25 5.216-5.25c.545 0 1.087.086 1.605.255l.008-6.296a11.485 11.485 0 0 0-8.85 2.59 12.132 12.132 0 0 0-2.647 3.264C1.51 20.593.525 22.4.406 25.336c-.075 1.665.425 3.39.664 4.104v.015c.15.42.731 1.853 1.678 3.062.764.969 1.666 1.82 2.678 2.526v-.015l.015.015c2.993 2.034 6.312 1.9 6.312 1.9.574-.023 2.499 0 4.684-1.035 2.424-1.148 3.804-2.859 3.804-2.859a11.883 11.883 0 0 0 2.073-3.445c.56-1.47.746-3.234.746-3.94V12.982c.075.046 1.074.706 1.074.706s1.44.923 3.685 1.523c1.61.428 3.781.518 3.781.518V9.59c-.76.083-2.305-.157-3.886-.946Z\"/></svg>"));
--_icon---media--play-circle: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.4138 11.8619L8.6618 17.4923L8.6618 6.23161L18.4138 11.8619Z\" fill=\"white\"/> <path d=\"M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23V24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24V23C18.0751 23 23 18.0751 23 12Z\" fill=\"white\"/></svg>"));
--_icon---brand--solve: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><path fill=\"white\" d=\"M12 7.138a4.065 4.065 0 0 1 2.791 7.02c-.476.45-.948 1.076-1.12 1.863H10.33c-.171-.787-.643-1.413-1.12-1.864A4.065 4.065 0 0 1 12 7.138Z\"/><path fill=\"white\" fill-rule=\"evenodd\" d=\"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0ZM9.728 19.76l.105.877h4.335l.105-.877H9.728Zm-.149-1.806.104.877h4.634l.105-.877H9.579ZM12 6.133a5.07 5.07 0 0 0-5.07 5.07l.002.135a5.055 5.055 0 0 0 1.587 3.55c.44.416.794.94.862 1.542l.066.596h5.107l.066-.596c.063-.565.378-1.06.78-1.463l.082-.08a5.055 5.055 0 0 0 1.586-3.549l.002-.135c0-2.8-2.27-5.07-5.07-5.07Zm-8.808 4.666v.842h2.434v-.842H3.192Zm15.185 0v.842h2.434v-.842h-2.434ZM3.666 8.317l2.257.91.315-.781-2.258-.91-.314.781Zm14.071.09.321.778 2.25-.926-.32-.78-2.25.928ZM5.477 5.294l1.72 1.721.595-.596-1.72-1.72-.596.595Zm10.732 1.122.596.596 1.72-1.722-.057-.058.004-.004-.475-.474-.004.004-.063-.063-1.72 1.72ZM8.1 3.306l.973 2.231.772-.336-.972-2.231-.772.336Zm6.044 1.892.773.332.962-2.235-.774-.333-.961 2.236Zm-2.565-2.786v2.433h.842V2.412h-.842Z\" clip-rule=\"evenodd\"/></svg>"));
--_icon---brand--spark: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><path fill=\"white\" d=\"m13.448 8.503 2.05 2.049v2.896l-2.05 2.05H10.55l-2.049-2.05V10.55l2.048-2.047h2.898Z\"/><path fill=\"white\" fill-rule=\"evenodd\" d=\"M24 7.03v9.94L16.97 24H7.03L0 16.97V7.03L7.03 0h9.94L24 7.03ZM10.54 3.242v5.231l-3.7-3.7-2.063 2.063 3.702 3.703H3.242v2.916h5.236L4.775 17.16l2.062 2.062 3.703-3.702v5.237h2.916v-5.24l3.706 3.705 2.063-2.063-3.703-3.703h5.235V10.54H15.52l3.702-3.702-2.063-2.063-3.703 3.703V3.243H10.54Z\" clip-rule=\"evenodd\"/></svg>"));
--_icon---quote: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 47 36\"><path fill=\"white\" d=\"M11.142-.01c5.035 0 9.223 3.62 10.11 8.399.261.945 4.098 16.156-16.064 26.92-.543.29-1.112-.46-.71-.925 2.682-3.1 6.836-8.727 6.819-13.826-.052 0-.104.005-.155.005C5.46 20.563.856 15.957.855 10.275.855 4.596 5.461-.01 11.142-.01ZM35.813-.01c5.035 0 9.222 3.618 10.11 8.395.251.907 4.126 16.145-16.063 26.925-.543.29-1.112-.46-.71-.926 2.682-3.1 6.836-8.727 6.819-13.826-.052 0-.104.005-.156.005-5.68 0-10.286-4.606-10.286-10.287 0-5.68 4.606-10.286 10.286-10.286Z\"/></svg>"));
--_icon---eye: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 80 41\"><path fill=\"white\" d=\"M40 .347c16.714 0 31.426 7.896 40 19.862-8.574 11.967-23.286 19.864-40 19.864S8.574 32.176 0 20.209C8.574 8.243 23.286.348 40 .348Zm.001 10.603c-5.544 0-10.04 4.146-10.04 9.26.001 5.115 4.496 9.261 10.04 9.261 5.544 0 10.039-4.146 10.039-9.26 0-5.115-4.495-9.261-10.039-9.261Z\"/></svg>"));
--_icon---media--play: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 36 41\"><path fill=\"white\" d=\"M35.465 20.855.678 40.94V.77l34.787 20.084Z\"/></svg>"));
--_icon---plus: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 -960 960 960\"  fill=\"white\"><path d=\"M417-86v-331H86v-126h331v-331h126v331h331v126H543v331H417Z\"/></svg>"));
--_icon---mail: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"  fill=\"white\"><path d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z\"/></svg>"));
--_icon---mailbox: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 -960 960 960\"  fill=\"white\"><path d=\"M240-400v-160h-80v400h640v-400H400v-80h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h80v-240h320v160H320v320h-80Zm-80-160v160-160 400-400Z\"/></svg>"));
--_icon---phone: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"  fill=\"white\"><path d=\"M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z\"/></svg>"));
--_icon---brand--pulse: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" fill=\"none\"><path fill=\"white\" d=\"M34.25 26.623h13.607C46.55 38.643 36.367 48 24 48 11.627 48 1.443 38.638.14 26.612h12.75l6.96 17.963 10.714-27.081 3.685 9.13Z\"/><path fill=\"white\" d=\"M24 0c12.376 0 22.565 9.369 23.86 21.402H37.772L30.516 3.424 19.9 30.254l-3.434-8.863H.14C1.44 9.363 11.626 0 24 0Z\"/></svg>"));
--_icon---brand--research: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"49\" height=\"48\" fill=\"none\"><path fill=\"white\" d=\"M24.59 0c13.254 0 24 10.745 24 24v24h-24c-13.256 0-24-10.745-24-24s10.744-24 24-24Zm-.849 8.212c-7.866 0-14.243 6.377-14.244 14.244 0 7.867 6.378 14.244 14.244 14.244 3.326 0 6.386-1.14 8.81-3.05l9.633 9.632 2.382-2.382-9.633-9.632a14.183 14.183 0 0 0 3.053-8.812c0-7.867-6.378-14.244-14.244-14.244Zm0 3.368c6.007 0 10.876 4.87 10.876 10.876 0 6.007-4.869 10.876-10.875 10.876-6.007 0-10.877-4.87-10.877-10.876 0-6.006 4.87-10.876 10.876-10.876Zm-6.884 9.096v8.558h3.36v-8.558h-3.36Zm9.6-5.537v14.095h3.36V15.14h-3.36Zm-4.8 3.267v10.827h3.36V18.406h-3.36Z\"/></svg>"));
--_icon---brand--vision: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"101\" height=\"101\" fill=\"none\"><path fill=\"white\" d=\"M50.61.687c27.614 0 49.999 22.385 49.999 50 0 27.614-22.385 50-50 50-27.614 0-50-22.386-50-50 0-27.615 22.386-50 50-50ZM24.06 53.586c-1.623 0-3.011.566-4.166 1.696-1.156 1.131-1.734 2.533-1.734 4.204v11.8H38.81V64.5a20.755 20.755 0 0 0 5.605 2.839c2.016.663 4.08.995 6.194.995 2.164 0 4.24-.319 6.232-.958a20.093 20.093 0 0 0 5.567-2.803v6.711h20.65V59.486c0-1.671-.566-3.073-1.697-4.204-1.13-1.13-2.531-1.696-4.203-1.696h-9.66c-.935 0-1.832.246-2.692.737a7.516 7.516 0 0 0-2.25 1.992 14.549 14.549 0 0 1-5.199 4.498c-2.089 1.082-4.339 1.622-6.748 1.622-2.36 0-4.584-.54-6.673-1.622a15.218 15.218 0 0 1-5.274-4.498 5.944 5.944 0 0 0-2.139-1.992 5.688 5.688 0 0 0-2.801-.737H24.06Zm26.548-8.85c-3.097 0-6.39.53-9.881 1.586-3.491 1.057-5.777 2.496-6.859 4.315 1.475 0 2.84.356 4.093 1.07a9.332 9.332 0 0 1 3.134 2.911 12.029 12.029 0 0 0 4.204 3.577 11.444 11.444 0 0 0 5.31 1.291c1.917 0 3.712-.418 5.383-1.254 1.672-.835 3.047-2.04 4.13-3.614a9.223 9.223 0 0 1 3.171-2.912 8.202 8.202 0 0 1 4.056-1.07c-1.082-1.818-3.368-3.257-6.859-4.314-3.49-1.057-6.784-1.586-9.882-1.586ZM27.01 32.938c-2.458 0-4.548.847-6.269 2.543-1.72 1.697-2.58 3.799-2.58 6.306 0 2.458.86 4.548 2.58 6.269 1.72 1.72 3.81 2.58 6.269 2.58 2.507 0 4.608-.86 6.305-2.58 1.696-1.721 2.544-3.81 2.544-6.269 0-2.507-.848-4.61-2.544-6.306-1.697-1.696-3.798-2.544-6.305-2.544Zm47.197 0c-2.458 0-4.548.847-6.268 2.543-1.721 1.697-2.582 3.799-2.582 6.306 0 2.458.86 4.548 2.582 6.269 1.72 1.72 3.81 2.58 6.268 2.58 2.507 0 4.609-.86 6.305-2.58 1.696-1.721 2.545-3.81 2.545-6.269 0-2.507-.85-4.61-2.545-6.306-1.696-1.696-3.798-2.544-6.305-2.544Zm-23.599-8.85c-2.458 0-4.547.848-6.268 2.544-1.72 1.696-2.581 3.798-2.581 6.305 0 2.459.86 4.548 2.58 6.27 1.722 1.72 3.811 2.58 6.27 2.58 2.506 0 4.608-.86 6.304-2.58 1.696-1.722 2.545-3.811 2.545-6.27 0-2.507-.849-4.609-2.545-6.305-1.696-1.696-3.797-2.544-6.305-2.544Z\"/></svg>"));
--_icon---brand--mission: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"101\" height=\"101\" fill=\"none\"><path fill=\"white\" fill-rule=\"evenodd\" d=\"M50.61.687c27.614 0 49.999 22.385 49.999 50 0 27.614-22.385 50-50 50-27.614 0-50-22.386-50-50 0-27.615 22.386-50 50-50Zm18.268 82.955 4.066-4.057-4.974-1.031.908 5.088ZM64.399 34.34l-9.706-5.074 2.83-4.935-11.976.189-2.886 4.76-4.305-1.847-9.691 11.897-11.642 5.756 4.722 22.7 25.667-7.43 11.501 6.113 7.344 8.343 9.93-1.576 8.007-15.305-.203-5.924-9.698-13.856-5.772-16.419L64.4 34.34Z\" clip-rule=\"evenodd\"/></svg>"));
--_icon---brand--eye: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"101\" height=\"100\" fill=\"none\"><path fill=\"white\" d=\"M50.531 0c27.614 0 50 22.386 50 50s-22.386 50-50 50-50-22.386-50-50 22.386-50 50-50Zm.002 33.663c-13.747 0-25.848 6.495-32.9 16.337 7.052 9.843 19.153 16.338 32.9 16.338S76.381 59.843 83.433 50c-7.052-9.842-19.153-16.337-32.9-16.337Zm0 8.72c4.56 0 8.257 3.411 8.257 7.618 0 4.206-3.697 7.616-8.257 7.616s-8.256-3.41-8.257-7.616c0-4.207 3.697-7.617 8.257-7.617Z\"/></svg>"));
--_theme---link-hover: color-mix(in srgb,var(--_theme---link),var(--_color---black)20%);
--_icon---sentiment--negative: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"41\" fill=\"none\"><path fill=\"white\" d=\"M19.999 22.915c-1.87 0-3.567.525-5.09 1.576-1.524 1.05-2.642 2.442-3.355 4.174h16.89c-.695-1.75-1.809-3.146-3.341-4.188-1.533-1.042-3.234-1.562-5.104-1.562Zm-7.417-2.834 2-1.833 1.833 1.833 1.445-1.583-1.833-1.833 1.833-1.862-1.445-1.583-1.833 1.833-2-1.833-1.445 1.583 1.834 1.862-1.834 1.833 1.445 1.583Zm11.028 0 1.805-1.833 2.028 1.833 1.444-1.583-1.833-1.833 1.834-1.862-1.445-1.583-2.028 1.833-1.805-1.833-1.445 1.583 1.806 1.862-1.806 1.833 1.445 1.583Zm-3.611 16.917c-2.306 0-4.472-.438-6.5-1.313-2.028-.875-3.792-2.062-5.292-3.562S5.52 28.859 4.645 26.83s-1.313-4.194-1.313-6.5c0-2.305.438-4.472 1.313-6.5.875-2.028 2.062-3.791 3.562-5.291 1.5-1.5 3.264-2.688 5.292-3.563 2.027-.875 4.194-1.312 6.5-1.312 2.305 0 4.472.437 6.5 1.312 2.027.875 3.791 2.063 5.291 3.563 1.5 1.5 2.688 3.263 3.563 5.291.875 2.028 1.312 4.195 1.312 6.5 0 2.306-.437 4.472-1.312 6.5-.875 2.028-2.063 3.792-3.563 5.292s-3.264 2.687-5.291 3.562c-2.028.875-4.195 1.313-6.5 1.313Z\"/></svg>"));
--_icon---sentiment--neutral: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"white\" d=\"M25.999 17.972a2.25 2.25 0 0 0 1.653-.68 2.25 2.25 0 0 0 .68-1.654 2.25 2.25 0 0 0-.68-1.652 2.25 2.25 0 0 0-1.653-.68 2.25 2.25 0 0 0-1.653.68 2.25 2.25 0 0 0-.68 1.652c0 .649.226 1.2.68 1.653a2.25 2.25 0 0 0 1.653.68Zm-12 0a2.25 2.25 0 0 0 1.653-.68 2.25 2.25 0 0 0 .68-1.654 2.25 2.25 0 0 0-.68-1.652 2.25 2.25 0 0 0-1.653-.68 2.25 2.25 0 0 0-1.653.68 2.25 2.25 0 0 0-.68 1.652c0 .649.226 1.2.68 1.653a2.25 2.25 0 0 0 1.653.68Zm.833 7.889h10.361v-2.195H14.832v2.195Zm5.167 10.805c-2.306 0-4.472-.437-6.5-1.312-2.028-.875-3.792-2.063-5.292-3.563S5.52 28.527 4.645 26.5c-.875-2.028-1.313-4.195-1.313-6.5 0-2.306.438-4.473 1.313-6.5.875-2.028 2.062-3.792 3.562-5.292s3.264-2.687 5.292-3.562c2.027-.875 4.194-1.313 6.5-1.313 2.305 0 4.472.438 6.5 1.313 2.027.875 3.791 2.062 5.291 3.562 1.5 1.5 2.688 3.264 3.563 5.292.875 2.027 1.312 4.194 1.312 6.5 0 2.305-.437 4.472-1.312 6.5-.875 2.027-2.063 3.791-3.563 5.291-1.5 1.5-3.264 2.688-5.291 3.563-2.028.875-4.195 1.312-6.5 1.312Z\"/></svg>"));
--_icon---sentiment--positive: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"white\" d=\"M25.999 17.972a2.25 2.25 0 0 0 1.653-.68 2.25 2.25 0 0 0 .68-1.654 2.25 2.25 0 0 0-.68-1.652 2.25 2.25 0 0 0-1.653-.68 2.25 2.25 0 0 0-1.653.68 2.25 2.25 0 0 0-.68 1.652c0 .649.226 1.2.68 1.653a2.25 2.25 0 0 0 1.653.68Zm-12 0a2.25 2.25 0 0 0 1.653-.68 2.25 2.25 0 0 0 .68-1.654 2.25 2.25 0 0 0-.68-1.652 2.25 2.25 0 0 0-1.653-.68 2.25 2.25 0 0 0-1.653.68 2.25 2.25 0 0 0-.68 1.652c0 .649.226 1.2.68 1.653a2.25 2.25 0 0 0 1.653.68Zm6 11.166a9.072 9.072 0 0 0 5.09-1.52 8.698 8.698 0 0 0 3.354-4.09h-2.361a6.636 6.636 0 0 1-2.563 2.52 7.122 7.122 0 0 1-3.507.896 7.29 7.29 0 0 1-3.52-.882 6.28 6.28 0 0 1-2.549-2.534h-2.389c.713 1.712 1.836 3.076 3.368 4.09A9.005 9.005 0 0 0 20 29.138Zm0 7.528c-2.306 0-4.472-.437-6.5-1.312-2.028-.875-3.792-2.063-5.292-3.563S5.52 28.527 4.645 26.5c-.875-2.028-1.313-4.195-1.313-6.5 0-2.306.438-4.473 1.313-6.5.875-2.028 2.062-3.792 3.562-5.292s3.264-2.687 5.292-3.562c2.027-.875 4.194-1.313 6.5-1.313 2.305 0 4.472.438 6.5 1.313 2.027.875 3.791 2.062 5.291 3.562 1.5 1.5 2.688 3.264 3.563 5.292.875 2.027 1.312 4.194 1.312 6.5 0 2.305-.437 4.472-1.312 6.5-.875 2.027-2.063 3.791-3.563 5.291-1.5 1.5-3.264 2.688-5.291 3.563-2.028.875-4.195 1.312-6.5 1.312Z\"/></svg>"));
--_icon---brand--seek: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"white\" d=\"M11.576 5.79a5.438 5.438 0 1 1 0 10.876 5.438 5.438 0 0 1 0-10.876Z\"/><path fill=\"white\" fill-rule=\"evenodd\" d=\"M12 0c6.627 0 12 5.373 12 12v12H12C5.373 24 0 18.627 0 12S5.373 0 12 0Zm-.424 4.106a7.122 7.122 0 0 0-7.122 7.122l.002.184a7.122 7.122 0 0 0 6.936 6.936l.184.002a7.09 7.09 0 0 0 4.405-1.526l4.817 4.817 1.191-1.19-4.817-4.818a7.088 7.088 0 0 0 1.524-4.221l.002-.184a7.122 7.122 0 0 0-6.938-7.12l-.184-.002Z\" clip-rule=\"evenodd\"/></svg>"));
--_mode---background: var(--_color---white);
--_helper---inherit-number: inherit;
--_icon---map-pin: var(--custom-icon,url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"  fill=\"white\"><path d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z\"/></svg>"));
--_theme---selection--background: var(--_color---core-purple);
--_theme---button-link--background: var(--_color---transparent);
--_theme---button-link--background-hover: var(--_color---grey);
--_grid---column-count: 12;
--animation--fade-distance: 50px;
--animation--ease: var(--custom-ease,cubic-bezier(.86,0,.07,1));
--screen-min: 320;
--screen-max: 1920;
--type-min-ratio: 1.2;
--type-max-ratio: 1.333;
--type-screen: 100vw;
--type-bp: calc(
      (var(--type-screen) - var(--screen-min) / 16 * 1rem) /
      (var(--screen-max) - var(--screen-min))
      );
--t0-min: var(--type-min-font);
--t0-max: var(--type-max-font);
--t-1-min: calc(var(--type-min-font) / var(--type-min-ratio));
--t-1-max: calc(var(--type-max-font) / var(--type-max-ratio));
--t-2-min: calc(var(--t-1-min) / var(--type-min-ratio));
--t-2-max: calc(var(--t-1-max) / var(--type-max-ratio));
--t1-min: calc(var(--type-min-font) * var(--type-min-ratio));
--t1-max: calc(var(--type-max-font) * var(--type-max-ratio));
--t2-min: calc(var(--t1-min) * var(--type-min-ratio));
--t2-max: calc(var(--t1-max) * var(--type-max-ratio));
--t3-min: calc(var(--t2-min) * var(--type-min-ratio));
--t3-max: calc(var(--t2-max) * var(--type-max-ratio));
--t4-min: calc(var(--t3-min) * var(--type-min-ratio));
--t4-max: calc(var(--t3-max) * var(--type-max-ratio));
--t5-min: calc(var(--t4-min) * var(--type-min-ratio));
--t5-max: calc(var(--t4-max) * var(--type-max-ratio));
--t6-min: calc(var(--t5-min) * var(--type-min-ratio));
--t6-max: calc(var(--t5-max) * var(--type-max-ratio));
--t7-min: calc(var(--t6-min) * var(--type-min-ratio));
--t7-max: calc(var(--t6-max) * var(--type-max-ratio));
--_grid---column-width: calc((min(var(--container--large), (100vw - (var(--page-padding) * 2))) - (var(--_grid---column-count) - 1) * var(--_grid---column-gap)) / var(--_grid---column-count));
--fs-list-renderindex: 0;
```

### Dependencies

```css
--_text-style---font: --_text-base---font--body;
--_theme---text: --_color---core-purple;
--_text-style---size: --_text-base---scale--m;
--_color---elements--text-primary<deleted|relume-variable-text-color-1>: --_colors---main--black;
--_theme---link: --_color---core-purple;
--_theme---background: --_color---grey;
--_text-base---scale--3xl: --t4-min,--t4-max,--t4-min,--type-bp;
--radius--tiny: --_space---0-5;
--_text-base---scale--s: --t-1-min,--t-1-max,--t-1-min,--type-bp;
--_button---border: --_theme---button-primary--border;
--_button---background: --_theme---button-primary--background;
--_button---text: --_theme---button-primary--text;
--_button---border-hover: --_theme---button-primary--border-hover;
--_button---background-hover: --_theme---button-primary--background-hover;
--_button---text-hover: --_theme---button-primary--text-hover;
--radius--small: --_space---1-5;
--_theme---background-secondary: --_color---white;
--_text-base---scale--xl: --t2-min,--t2-max,--t2-min,--type-bp;
--_color---elements--link-hover<deleted|relume-variable-link-color-2>: --_color---elements--text-primary;
--section--small: --_space---2;
--section--medium: --_space---4;
--section--large: --_space---7;
--_color---elements--background-primary<deleted|relume-variable-background-color-1>: --_colors---main--white;
--_color---elements--text-alternate<deleted|relume-variable-text-color-3>: --_colors---main--white;
--_text-base---scale--l: --t1-min,--t1-max,--t1-min,--type-bp;
--_grid---column-gap: --_space---2;
--_grid---row-gap: --_space---4;
--color--border--border-primary<deleted|relume-variable-border-color-1>: --base-color-neutral--black;
--radius--regular: --_space---3;
--radius--medium: --_space---6;
--_text-base---scale--2xl: --t3-min,--t3-max,--t3-min,--type-bp;
--_text-base---scale--4xl: --t5-min,--t5-max,--t5-min,--type-bp;
--_theme---text-secondary: --_color---black;
--_icon---arrow: --custom-icon;
--_icon---x: --custom-icon;
--_icon---social--facebook: --custom-icon;
--_icon---social--linkedin: --custom-icon;
--_icon---caret-right: --custom-icon;
--_icon---social--instagram: --custom-icon;
--_icon---social--twitter: --custom-icon;
--_icon---social--tiktok: --custom-icon;
--_icon---media--play-circle: --custom-icon;
--_icon---brand--solve: --custom-icon;
--_icon---brand--spark: --custom-icon;
--_icon---quote: --custom-icon;
--_icon---eye: --custom-icon;
--_icon---media--play: --custom-icon;
--_icon---plus: --custom-icon;
--_icon---mail: --custom-icon;
--_icon---mailbox: --custom-icon;
--_icon---phone: --custom-icon;
--_color---elements--link-primary<deleted|relume-variable-link-color-1>: --_color---elements--text-primary;
--_text-base---scale--m: --t0-min,--t0-max,--t0-min,--type-bp;
--_text-base---scale--6xl: --t7-min,--t7-max,--t7-min,--type-bp;
--radius--cta: --radius--medium,--_space---2;
--_icon---brand--pulse: --custom-icon;
--_icon---brand--research: --custom-icon;
--_icon---brand--vision: --custom-icon;
--_icon---brand--mission: --custom-icon;
--_icon---brand--eye: --custom-icon;
--_theme---link-hover: --_theme---link,--_color---black;
--_icon---sentiment--negative: --custom-icon;
--_icon---sentiment--neutral: --custom-icon;
--_icon---sentiment--positive: --custom-icon;
--_theme---button-primary--background: --_color---core-purple;
--_mode---blue-secondary: --_color---blue;
--_theme---button-secondary--background: --_color---magenta-light;
--_theme---button-secondary--text: --_color---core-purple;
--radius--large: --_space---9;
--_mode---green-primary: --_color---mint;
--_mode---green-secondary: --_color---green;
--_mode---purple-primary: --_color---magenta;
--_mode---purple-secondary: --_color---core-purple;
--_mode---blue-primary: --_color---teal;
--_icon---brand--seek: --custom-icon;
--_mode---yellow-pink-primary: --_color---yellow-dark;
--_mode---yellow-pink-secondary: --_color---pink;
--_theme---selection--text: --_color---white;
--_mode---background: --_color---white;
--_icon---map-pin: --custom-icon;
--_mode---text: --_color---black;
--_theme---selection--background: --_color---core-purple;
--_mode---text-secondary: --_color---core-purple;
--_theme---button-primary--text: --_color---white;
--_theme---button-primary--border: --_color---transparent;
--_theme---button-primary--background-hover: --_theme---button-primary--background;
--_theme---button-primary--text-hover: --_theme---button-primary--text;
--_text-style---text-transform: --_text-base---transform--none;
--_theme---button-primary--border-hover: --_theme---button-primary--border;
--_theme---button-secondary--border: --_color---transparent;
--_theme---button-secondary--background-hover: --_theme---button-secondary--background,--_color---black;
--_theme---button-secondary--text-hover: --_theme---button-secondary--text;
--_theme---button-secondary--border-hover: --_theme---button-secondary--border;
--_theme---button-link--background: --_color---transparent;
--_theme---button-link--text: --_theme---text;
--_theme---button-link--background-hover: --_color---grey;
--_theme---button-link--text-hover: --_color---black;
--_text-base---scale--xs: --t-2-min,--t-2-max,--t-2-min,--type-bp;
--_text-base---scale--5xl: --t6-min,--t6-max,--t6-min,--type-bp;
--animation--ease: --custom-ease;
--_text-base---transform--none: --text-transform;
--type-bp: --type-screen,--screen-min,--screen-max,--screen-min;
--t0-min: --type-min-font;
--t0-max: --type-max-font;
--t-1-min: --type-min-font,--type-min-ratio;
--t-1-max: --type-max-font,--type-max-ratio;
--t-2-min: --t-1-min,--type-min-ratio;
--t-2-max: --t-1-max,--type-max-ratio;
--t1-min: --type-min-font,--type-min-ratio;
--t1-max: --type-max-font,--type-max-ratio;
--t2-min: --t1-min,--type-min-ratio;
--t2-max: --t1-max,--type-max-ratio;
--t3-min: --t2-min,--type-min-ratio;
--t3-max: --t2-max,--type-max-ratio;
--t4-min: --t3-min,--type-min-ratio;
--t4-max: --t3-max,--type-max-ratio;
--t5-min: --t4-min,--type-min-ratio;
--t5-max: --t4-max,--type-max-ratio;
--t6-min: --t5-min,--type-min-ratio;
--t6-max: --t5-max,--type-max-ratio;
--t7-min: --t6-min,--type-min-ratio;
--t7-max: --t6-max,--type-max-ratio;
--_grid---column-width: --container--large,--page-padding,--_grid---column-count,--_grid---column-gap,--_grid---column-count;
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
| sm | 479px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| 1920px | 1920px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.2s`, `1.5s`, `0.6s`, `0.25s`, `0.4s`, `0s`, `0.1s`, `1s`

### Common Transitions

```css
transition: all;
transition: color 0.2s, background-color 0.2s;
transition: transform 1.5s cubic-bezier(0.23, 1, 0.32, 1);
transition: background-color 0.2s, color 0.2s;
transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.25s;
transition: top 0.25s ease-out;
transition: border-color 0.2s;
transition: color 0.4s;
transition: overlay 0.4s ease-out allow-discrete, display 0.4s ease-out allow-discrete, opacity 0.4s ease-out;
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (15 instances)

```css
.button {
  background-color: rgb(131, 22, 114);
  color: rgb(255, 255, 255);
  font-size: 18.4px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (7 instances)

```css
.card {
  background-color: rgb(0, 250, 127);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (21 instances)

```css
.input {
  background-color: lch(93.453 41.8499 148.185);
  color: rgb(0, 83, 13);
  border-color: rgb(0, 0, 0);
  border-radius: 320px;
  font-size: 16px;
  padding-top: 1px;
  padding-right: 7.936px;
}
```

### Links (210 instances)

```css
.link {
  color: rgb(131, 22, 114);
  font-size: 18.4px;
  font-weight: 500;
}
```

### Navigation (34 instances)

```css
.navigatio {
  background-color: rgb(131, 22, 114);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
  box-shadow: rgb(0, 0, 0) 0px 2px 20px -3px;
}
```

### Footer (25 instances)

```css
.foote {
  background-color: rgb(131, 22, 114);
  color: rgb(255, 199, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 18.4px;
}
```

### Modals (11 instances)

```css
.modal {
  background-color: rgb(0, 250, 127);
  border-radius: 0px;
  box-shadow: rgb(0, 0, 0) 0px 2px 20px -3px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: 1216px;
}
```

### Dropdowns (43 instances)

```css
.dropdown {
  background-color: rgb(255, 142, 255);
  border-radius: 0px;
  border-color: rgb(255, 199, 255);
  padding-top: 0px;
}
```

### Accordions (8 instances)

```css
.accordion {
  color: rgb(255, 199, 255);
  font-size: 66.43px;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(255, 199, 255);
}
```

### Switches (1 instances)

```css
.switche {
  border-radius: 0px;
  border-color: rgb(255, 255, 255);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(131, 22, 114);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(131, 22, 114);
  font-size: 18.4px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(131, 22, 114);
  color: rgb(255, 227, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 227, 255);
  font-size: 18.4px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 18.4px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 18.4px;
  font-weight: 500;
```

### Button — 18 instances, 1 variant

**Variant 1** (18 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 61, 162);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 61, 162);
  font-size: 18.4px;
  font-weight: 500;
```

### Button — 10 instances, 1 variant

**Variant 1** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 61, 162);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 61, 162);
  font-size: 27.6px;
  font-weight: 500;
```

### Button — 20 instances, 2 variants

**Variant 1** (14 instances)

```css
  background: rgb(0, 61, 162);
  color: rgb(0, 61, 162);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 61, 162);
  font-size: 27.6px;
  font-weight: 500;
```

**Variant 2** (6 instances)

```css
  background: rgb(0, 83, 13);
  color: rgb(0, 83, 13);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 83, 13);
  font-size: 27.6px;
  font-weight: 500;
```

### Button — 10 instances, 1 variant

**Variant 1** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 61, 162);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 61, 162);
  font-size: 27.6px;
  font-weight: 500;
```

### Button — 7 instances, 1 variant

**Variant 1** (7 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 61, 162);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 61, 162);
  font-size: 27.6px;
  font-weight: 500;
```

### Button — 7 instances, 1 variant

**Variant 1** (7 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 61, 162);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 61, 162);
  font-size: 27.6px;
  font-weight: 700;
```

### Button — 4 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(255, 199, 255);
  color: rgb(131, 22, 114);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 18.4px;
  font-weight: 500;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 83, 13);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 18.4px;
  font-weight: 500;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(131, 22, 114);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(131, 22, 114);
  font-size: 18.4px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(131, 22, 114);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(131, 22, 114);
  font-size: 18.4px;
  font-weight: 500;
```

### Card — 3 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgb(0, 250, 127);
  color: rgb(0, 83, 13);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 83, 13);
  font-size: 18.4px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgb(255, 142, 255);
  color: rgb(131, 22, 114);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(131, 22, 114);
  font-size: 18.4px;
  font-weight: 500;
```

### Input — 9 instances, 1 variant

**Variant 1** (9 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(131, 22, 114);
  padding: 1px 7.936px 1px 7.936px;
  border-radius: 320px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(131, 22, 114);
  color: rgb(255, 255, 255);
  padding: 8px 8px 8px 8px;
  border-radius: 0px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 18.4px;
  font-weight: 500;
```

## Layout System

**11 grid containers** and **352 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| min(1920px, 100%) | 81.8362px |
| 1920px | 0px |
| 1024px | 0px |
| 768px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 6x |
| 2-column | 5x |

### Grid Templates

```css
grid-template-columns: 256.109px;
gap: 7.936px;
grid-template-columns: 1029.92px 1029.92px;
gap: 23.1002px;
grid-template-columns: 489.859px 489.875px;
gap: 23.1002px;
grid-template-columns: 1fr 1fr;
gap: 15.6326px 81.8362px;
grid-template-columns: subgrid;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 48x |
| column/nowrap | 213x |
| row/wrap | 91x |

**Gap values:** `15.6326px`, `15.6326px 30.3482px`, `15.6326px 81.8362px`, `165.679px normal`, `16px`, `23.1002px`, `23.1002px 57.3677px`, `30.3482px`, `37.3875px`, `44.2291px`, `4px`, `57.3677px`, `6px`, `7.936px`, `7.936px 30.3482px`, `normal 23.1002px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 6 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#00fa7f` | `#00530d` | 6.68:1 | AAA |
| `#ffffff` | `#831672` | 9.04:1 | AAA |
| `#ffffff` | `#000000` | 21:1 | AAA |
| `#ff8eff` | `#831672` | 4.55:1 | AAA |

## Design System Score

**Overall: 85/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 80/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 65/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 92 !important rules — prefer specificity over overrides
- 60% of CSS is unused — consider purging
- 3586 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 90deg | 2 | brand |

```css
background: linear-gradient(90deg, rgb(131, 22, 114) calc(100% - 1px), rgba(0, 0, 0, 0));
```

## Z-Index Map

**10 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000,9999 | div.n.a.v.b.a.r.-.w.r.a.p.p.e.r. .w.-.n.a.v, div.g.l.o.b.a.l.s, div.l.o.a.d.e.r.-.w.r.a.p.p.e.r |
| dropdown | 998,998 | div.n.a.v.b.a.r._.c.o.m.p.o.n.e.n.t |
| sticky | 50,50 | a.b.u.t.t.o.n._.l.i.n.k. .w.-.i.n.l.i.n.e.-.b.l.o.c.k, a.b.u.t.t.o.n._.l.i.n.k. .w.-.i.n.l.i.n.e.-.b.l.o.c.k, a.b.u.t.t.o.n._.l.i.n.k. .w.-.i.n.l.i.n.e.-.b.l.o.c.k |
| base | -100,3 | video, span.i.n.t.r.o.-.s.t.r.o.n.g.-.f.i.l.l.-.w.r.a.p, span.i.n.t.r.o.-.s.t.r.o.n.g.-.f.i.l.l |

## SVG Icons

**1 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xl | 1 |

**Icon colors:** `rgb(0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| webflow-icons | self-hosted | 400 | normal |
| Roboto | google-fonts | 300, 400, 500, 600, 700 | normal |
| Roboto Condensed | cdn | 300, 400, 500, 600, 700 | normal |

**Google Fonts URL:** `https://fonts.googleapis.com/`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 8 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 4 | objectFit: cover, borderRadius: 0px, shape: square |
| thumbnail | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (10x), 4:3 (2x), 3:2 (1x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `400ms` | 400 |
| `lg` | `600ms` | 600 |
| `xl` | `1s` | 1000 |
| `xxl` | `1.5s` | 1500 |

### Easing Families

- **ease-out** (114 uses) — `cubic-bezier(0.23, 1, 0.32, 1)`, `cubic-bezier(0.19, 1, 0.22, 1)`
- **ease-in-out** (4 uses) — `ease`
- **linear** (1 uses) — `linear`
- **custom** (15 uses) — `cubic-bezier(0.77, 0, 0.175, 1)`, `cubic-bezier(0.86, 0, 0.07, 1)`, `cubic-bezier(0.4, 0, 0.04, 1)`

## Component Anatomy

### button — 86 instances

**Slots:** label

### input — 9 instances


### card — 4 instances

**Slots:** media

## Brand Voice

**Tone:** friendly · **Pronoun:** we-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **learn** (12)
- **sign** (4)
- **donate** (4)
- **connect** (4)
- **explore** (3)
- **submit** (2)

### Button Copy Patterns

- "learn more" (12×)
- "sign up" (4×)
- "donate" (4×)
- "connect" (4×)
- "explore" (3×)
- "submit" (2×)

### Sample Headings

> Become a member
> Download our app
> WE NEED TO ACT
WHILE WE
STILL CAN
> Reform for the housing crisis
> AMPLIFY's Work
> AMPLIFY Newsroom
> Take action with AMPLIFY
> Take action with AMPLIFY
> Join us
> Support us

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** AMPLIFY brings Australians together to confront hard truths, shape bold solutions, and advocate for change to rebuild the promise — while we still can.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → testimonial → content → cta → testimonial → content → content → testimonial → testimonial → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | Become a member | 0.9 |
| 1 | testimonial | WE NEED TO ACT
WHILE WE
STILL CAN | 0.8 |
| 2 | content | — | 0.3 |
| 3 | cta | Take action with AMPLIFY | 0.75 |
| 4 | testimonial | — | 0.8 |
| 5 | content | How we work | 0.3 |
| 6 | content | — | 0.3 |
| 7 | testimonial | Our work | 0.8 |
| 8 | testimonial | In the news | 0.8 |
| 9 | footer | — | 0.95 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.61 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 15984px |
| backdrop-filter in use | no |
| Gradients | 1 |

## Imagery Style

**Label:** `photography` (confidence 0.538)
**Counts:** total 13, svg 1, icon 0, screenshot-like 0, photo-like 12
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Screenshots

6 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default | 0 | 57 × 57 | `screenshots/button-default-0.png` |
| button--default | 1 | 57 × 57 | `screenshots/button-default-1.png` |
| button--default | 2 | 44 × 44 | `screenshots/button-default-2.png` |
| card--default | 0 | 1216 × 447 | `screenshots/card-default-0.png` |
| card--default | 1 | 1216 × 520 | `screenshots/card-default-1.png` |
| card--default | 2 | 1216 × 575 | `screenshots/card-default-2.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Roboto` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
