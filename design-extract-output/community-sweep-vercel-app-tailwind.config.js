/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(151, 23%, 97%)',
            '100': 'hsl(151, 23%, 94%)',
            '200': 'hsl(151, 23%, 86%)',
            '300': 'hsl(151, 23%, 76%)',
            '400': 'hsl(151, 23%, 64%)',
            '500': 'hsl(151, 23%, 50%)',
            '600': 'hsl(151, 23%, 40%)',
            '700': 'hsl(151, 23%, 32%)',
            '800': 'hsl(151, 23%, 24%)',
            '900': 'hsl(151, 23%, 16%)',
            '950': 'hsl(151, 23%, 10%)',
            DEFAULT: '#4d7a64'
        },
        secondary: {
            '50': 'hsl(16, 50%, 97%)',
            '100': 'hsl(16, 50%, 94%)',
            '200': 'hsl(16, 50%, 86%)',
            '300': 'hsl(16, 50%, 76%)',
            '400': 'hsl(16, 50%, 64%)',
            '500': 'hsl(16, 50%, 50%)',
            '600': 'hsl(16, 50%, 40%)',
            '700': 'hsl(16, 50%, 32%)',
            '800': 'hsl(16, 50%, 24%)',
            '900': 'hsl(16, 50%, 16%)',
            '950': 'hsl(16, 50%, 10%)',
            DEFAULT: '#a85538'
        },
        accent: {
            '50': 'hsl(38, 35%, 97%)',
            '100': 'hsl(38, 35%, 94%)',
            '200': 'hsl(38, 35%, 86%)',
            '300': 'hsl(38, 35%, 76%)',
            '400': 'hsl(38, 35%, 64%)',
            '500': 'hsl(38, 35%, 50%)',
            '600': 'hsl(38, 35%, 40%)',
            '700': 'hsl(38, 35%, 32%)',
            '800': 'hsl(38, 35%, 24%)',
            '900': 'hsl(38, 35%, 16%)',
            '950': 'hsl(38, 35%, 10%)',
            DEFAULT: '#f5f1ea'
        },
        'neutral-50': '#ffffff',
        'neutral-100': '#5a4e3c',
        'neutral-200': '#000000',
        'neutral-300': '#736456',
        'neutral-400': '#e4ede8',
        'neutral-500': '#b8a48a',
        background: '#f5f1ea',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Noto Sans TC',
            'sans-serif'
        ],
        heading: [
            'Noto Serif TC',
            'sans-serif'
        ]
    },
    fontSize: {
        '18': [
            '18px',
            {
                lineHeight: '27px'
            }
        ],
        '27': [
            '27px',
            {
                lineHeight: '36px'
            }
        ],
        '54': [
            '54px',
            {
                lineHeight: '60.48px',
                letterSpacing: '-1.35px'
            }
        ],
        '67.5': [
            '67.5px',
            {
                lineHeight: '67.5px',
                letterSpacing: '-1.6875px'
            }
        ],
        '40.5': [
            '40.5px',
            {
                lineHeight: '45.36px',
                letterSpacing: '-1.0125px'
            }
        ],
        '33.75': [
            '33.75px',
            {
                lineHeight: '40.5px',
                letterSpacing: '-0.84375px'
            }
        ],
        '22.5': [
            '22.5px',
            {
                lineHeight: '36.5625px'
            }
        ],
        '20.25': [
            '20.25px',
            {
                lineHeight: '31.5px'
            }
        ],
        '15.75': [
            '15.75px',
            {
                lineHeight: '25.2px'
            }
        ],
        '13.5': [
            '13.5px',
            {
                lineHeight: '18px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '27': '54px',
        '36': '72px',
        '45': '90px',
        '54': '108px',
        '68': '136px',
        '104': '208px',
        '63px': '63px',
        '99px': '99px',
        '181px': '181px',
        '325px': '325px'
    },
    borderRadius: {
        md: '7px',
        lg: '14px',
        xl: '18px',
        full: '32px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 4px 6px -1px, oklab(0.540078 -0.0578925 0.0185666 / 0.2) 0px 2px 4px -2px',
        xs: 'rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset, rgba(53, 90, 71, 0.1) 0px 4px 24px -4px',
        lg: 'rgba(53, 90, 71, 0.1) 0px 4px 24px -4px',
        xl: 'rgba(53, 90, 71, 0.14) 0px 16px 48px -12px'
    },
    screens: {
        sm: '640px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    container: {
        center: true,
        padding: '27px'
    },
    maxWidth: {
        container: '1296px'
    }
},
  },
};
