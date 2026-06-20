/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(129, 100%, 97%)',
            '100': 'hsl(129, 100%, 94%)',
            '200': 'hsl(129, 100%, 86%)',
            '300': 'hsl(129, 100%, 76%)',
            '400': 'hsl(129, 100%, 64%)',
            '500': 'hsl(129, 100%, 50%)',
            '600': 'hsl(129, 100%, 40%)',
            '700': 'hsl(129, 100%, 32%)',
            '800': 'hsl(129, 100%, 24%)',
            '900': 'hsl(129, 100%, 16%)',
            '950': 'hsl(129, 100%, 10%)',
            DEFAULT: '#00530d'
        },
        secondary: {
            '50': 'hsl(309, 71%, 97%)',
            '100': 'hsl(309, 71%, 94%)',
            '200': 'hsl(309, 71%, 86%)',
            '300': 'hsl(309, 71%, 76%)',
            '400': 'hsl(309, 71%, 64%)',
            '500': 'hsl(309, 71%, 50%)',
            '600': 'hsl(309, 71%, 40%)',
            '700': 'hsl(309, 71%, 32%)',
            '800': 'hsl(309, 71%, 24%)',
            '900': 'hsl(309, 71%, 16%)',
            '950': 'hsl(309, 71%, 10%)',
            DEFAULT: '#831672'
        },
        accent: {
            '50': 'hsl(300, 100%, 97%)',
            '100': 'hsl(300, 100%, 94%)',
            '200': 'hsl(300, 100%, 86%)',
            '300': 'hsl(300, 100%, 76%)',
            '400': 'hsl(300, 100%, 64%)',
            '500': 'hsl(300, 100%, 50%)',
            '600': 'hsl(300, 100%, 40%)',
            '700': 'hsl(300, 100%, 32%)',
            '800': 'hsl(300, 100%, 24%)',
            '900': 'hsl(300, 100%, 16%)',
            '950': 'hsl(300, 100%, 10%)',
            DEFAULT: '#ff8eff'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#ffe3ff',
        'neutral-300': '#eeeeee',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Roboto',
            'sans-serif'
        ],
        heading: [
            'Roboto Condensed',
            'sans-serif'
        ],
        body: [
            'Times New Roman',
            'sans-serif'
        ]
    },
    fontSize: {
        '22': [
            '22px',
            {
                lineHeight: '24.2px'
            }
        ],
        '168': [
            '168px',
            {
                lineHeight: '142.8px',
                letterSpacing: '-6.72px'
            }
        ],
        '159.6': [
            '159.6px',
            {
                lineHeight: '135.66px',
                letterSpacing: '-6.72px'
            }
        ],
        '112.674': [
            '112.674px',
            {
                lineHeight: '169.01px',
                letterSpacing: '-0.368px'
            }
        ],
        '104.16': [
            '104.16px',
            {
                lineHeight: '88.536px',
                letterSpacing: '-6.72px'
            }
        ],
        '86.4331': [
            '86.4331px',
            {
                lineHeight: '95.0764px',
                letterSpacing: '-3.45732px'
            }
        ],
        '73.0519': [
            '73.0519px',
            {
                lineHeight: '109.578px',
                letterSpacing: '-0.368px'
            }
        ],
        '66.43': [
            '66.43px',
            {
                lineHeight: '99.645px',
                letterSpacing: '-0.368px'
            }
        ],
        '51.1591': [
            '51.1591px',
            {
                lineHeight: '56.275px',
                letterSpacing: '-2.04636px'
            }
        ],
        '46.0997': [
            '46.0997px',
            {
                lineHeight: '69.1495px',
                letterSpacing: '-0.368px'
            }
        ],
        '44.8': [
            '44.8px',
            {
                lineHeight: '49.28px',
                letterSpacing: '-1.792px'
            }
        ],
        '39.4823': [
            '39.4823px',
            {
                lineHeight: '59.2235px',
                letterSpacing: '-0.368px'
            }
        ],
        '30.5387': [
            '30.5387px',
            {
                lineHeight: '41.2272px',
                letterSpacing: '-0.610773px'
            }
        ],
        '27.6': [
            '27.6px',
            {
                lineHeight: '41.4px',
                letterSpacing: '-0.368px'
            }
        ],
        '18.4': [
            '18.4px',
            {
                lineHeight: '27.6px',
                letterSpacing: '-0.368px'
            }
        ]
    },
    spacing: {
        '22': '44px',
        '28': '56px',
        '32': '64px',
        '35': '70px',
        '40': '80px',
        '80': '160px',
        '120': '240px',
        '213': '426px',
        '222': '444px',
        '1px': '1px',
        '37px': '37px',
        '93px': '93px',
        '135px': '135px'
    },
    borderRadius: {
        md: '6px',
        xl: '23px',
        full: '15984px'
    },
    boxShadow: {
        lg: 'rgb(0, 0, 0) 0px 2px 20px -3px'
    },
    screens: {
        md: '768px',
        lg: '992px',
        '1920px': '1920px'
    },
    transitionDuration: {
        '0': '0s',
        '100': '0.1s',
        '200': '0.2s',
        '250': '0.25s',
        '400': '0.4s',
        '600': '0.6s',
        '1000': '1s',
        '1500': '1.5s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.04, 1)',
        default: 'ease',
        linear: 'linear'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
