// React Theme — extracted from https://www.amplifyaus.org/
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
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '168': string;
    '159.6': string;
    '112.674': string;
    '104.16': string;
    '86.4331': string;
    '73.0519': string;
    '66.43': string;
    '51.1591': string;
    '46.0997': string;
    '44.8': string;
    '39.4823': string;
    '30.5387': string;
 *   };
 *   space: {
    '1': string;
    '37': string;
    '44': string;
    '56': string;
    '64': string;
    '70': string;
    '80': string;
    '93': string;
    '135': string;
    '160': string;
    '240': string;
    '426': string;
    '444': string;
 *   };
 *   radii: {
    md: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    lg: string;
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
    "primary": "#00530d",
    "secondary": "#831672",
    "accent": "#ff8eff",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#ffe3ff",
    "neutral300": "#eeeeee"
  },
  "fonts": {
    "body": "'Times New Roman', sans-serif"
  },
  "fontSizes": {
    "168": "168px",
    "159.6": "159.6px",
    "112.674": "112.674px",
    "104.16": "104.16px",
    "86.4331": "86.4331px",
    "73.0519": "73.0519px",
    "66.43": "66.43px",
    "51.1591": "51.1591px",
    "46.0997": "46.0997px",
    "44.8": "44.8px",
    "39.4823": "39.4823px",
    "30.5387": "30.5387px"
  },
  "space": {
    "1": "1px",
    "37": "37px",
    "44": "44px",
    "56": "56px",
    "64": "64px",
    "70": "70px",
    "80": "80px",
    "93": "93px",
    "135": "135px",
    "160": "160px",
    "240": "240px",
    "426": "426px",
    "444": "444px"
  },
  "radii": {
    "md": "6px",
    "xl": "23px",
    "full": "15984px"
  },
  "shadows": {
    "lg": "rgb(0, 0, 0) 0px 2px 20px -3px"
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
      "main": "#00530d",
      "light": "hsl(129, 100%, 31%)",
      "dark": "hsl(129, 100%, 10%)"
    },
    "secondary": {
      "main": "#831672",
      "light": "hsl(309, 71%, 45%)",
      "dark": "hsl(309, 71%, 15%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#000000"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#831672"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "73.0519px",
      "fontWeight": "500",
      "lineHeight": "109.578px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgb(0, 0, 0) 0px 2px 20px -3px"
  ]
};

export default theme;
