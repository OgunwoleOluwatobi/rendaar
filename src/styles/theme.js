import { hex2rgba } from '../utils';

const DARK_BG = '#14181E';
const ACCENT = '#4DC932';
const BLACK = '#000000';
const KBLACK = '#444444';
const WHITE = '#FFFFFF';
const PALE = '#46B29D';

const theme = {
    colors: {
        darkBlue: DARK_BG,
        green: ACCENT,
        white: WHITE,
        dustyWhite: '#303030',
        hamblue: '#181D23',
        deepPale: '#65DDB9',
        darkPale: '#14A085',
        PaleGreen: PALE,
        dull: KBLACK,
        shadowBlack: hex2rgba(WHITE, 0.9),
        backBlack: hex2rgba(BLACK, 0.2),
        bgPale: hex2rgba(PALE, 0.2),
        shadowPale: hex2rgba(PALE, 0.5)
    },

    fonts: {
        Calibre:
            'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
        SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    },

    fontSizes: {
        xs: '12px',
        smish: '13px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        h3: '35px',
    },

    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

    hamburgerWidth: 28,
    hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
    hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
    hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
    hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

    navHeight: '80px',
    navScrollHeight: '70px',
    navDelay: 1000,
    loaderDelay: 2000
}

export default theme;