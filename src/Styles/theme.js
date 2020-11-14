import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#244D4D',
    yellow: '#F1A350',
    whiteDark: '#FCFBFF',
    whiteLight: '#fff',
    whiteInGreen: '#d3d4d1',
    dark: '#242424',
    darkLight: '#929294',
  },

  fontSizes: {
    mobile: {
      sm: '1.6rem',
      md: '2.4rem',
      lg: '3rem',
    },
    desktop: {
      sm: '1.8rem',
      md: '3rem',
      lg: '3.5rem',
    },
  }
}

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}

export default Theme;
