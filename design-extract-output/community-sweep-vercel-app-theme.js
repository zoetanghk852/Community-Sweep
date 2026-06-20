// React Theme — extracted from https://community-sweep.vercel.app/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '18': string;
    '27': string;
    '54': string;
    '67.5': string;
    '40.5': string;
    '33.75': string;
    '22.5': string;
    '20.25': string;
    '15.75': string;
    '13.5': string;
 *   };
 *   space: {
    '2': string;
    '54': string;
    '63': string;
    '72': string;
    '90': string;
    '99': string;
    '108': string;
    '136': string;
    '181': string;
    '208': string;
    '325': string;
 *   };
 *   radii: {
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
    lg: string;
    xl: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#4d7a64",
    "secondary": "#a85538",
    "accent": "#f5f1ea",
    "background": "#f5f1ea",
    "foreground": "#000000",
    "neutral50": "#ffffff",
    "neutral100": "#5a4e3c",
    "neutral200": "#000000",
    "neutral300": "#736456",
    "neutral400": "#e4ede8",
    "neutral500": "#b8a48a"
  },
  "fonts": {
    "body": "'Noto Serif TC', sans-serif"
  },
  "fontSizes": {
    "18": "18px",
    "27": "27px",
    "54": "54px",
    "67.5": "67.5px",
    "40.5": "40.5px",
    "33.75": "33.75px",
    "22.5": "22.5px",
    "20.25": "20.25px",
    "15.75": "15.75px",
    "13.5": "13.5px"
  },
  "space": {
    "2": "2px",
    "54": "54px",
    "63": "63px",
    "72": "72px",
    "90": "90px",
    "99": "99px",
    "108": "108px",
    "136": "136px",
    "181": "181px",
    "208": "208px",
    "325": "325px"
  },
  "radii": {
    "md": "7px",
    "lg": "14px",
    "xl": "18px",
    "full": "32px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 4px 6px -1px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 2px 4px -2px",
    "xs": "rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset, rgba(53, 90, 71, 0.1) 0px 4px 24px -4px",
    "lg": "rgba(53, 90, 71, 0.1) 0px 4px 24px -4px",
    "xl": "rgba(53, 90, 71, 0.14) 0px 16px 48px -12px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#4d7a64",
      "light": "hsl(151, 23%, 54%)",
      "dark": "hsl(151, 23%, 24%)"
    },
    "secondary": {
      "main": "#a85538",
      "light": "hsl(16, 50%, 59%)",
      "dark": "hsl(16, 50%, 29%)"
    },
    "background": {
      "default": "#f5f1ea",
      "paper": "#faf8f4"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#2a2318"
    }
  },
  "typography": {
    "h1": {
      "fontSize": "33.75px",
      "fontWeight": "700",
      "lineHeight": "40.5px"
    },
    "h2": {
      "fontSize": "27px",
      "fontWeight": "700",
      "lineHeight": "36px"
    },
    "h3": {
      "fontSize": "22.5px",
      "fontWeight": "400",
      "lineHeight": "36.5625px"
    }
  },
  "shape": {
    "borderRadius": 7
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.86829 0.00544527 0.0242809 / 0.5) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.544523 0.0902701 0.0748228 / 0.2) 0px 4px 6px -1px, oklab(0.544523 0.0902701 0.0748228 / 0.2) 0px 2px 4px -2px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 4px 6px -1px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 2px 4px -2px",
    "rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset, rgba(53, 90, 71, 0.1) 0px 4px 24px -4px"
  ]
};

export default theme;
