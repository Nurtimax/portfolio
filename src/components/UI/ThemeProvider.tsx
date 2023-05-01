import { FC, ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  /* 
   * Default breakpoints
   Each breakpoint (a key) matches with a fixed screen width (a value):
   
   * xs, extra-small: 0px
   * sm, small: 600px
   * md, medium: 900px
   * lg, large: 1200px
   * xl, extra-lerge: 1536px 
  */

  const theme = createTheme({
    palette: {
      action: {
        activatedOpacity: 0.8
      },
      common: {
        black:
          'conic-gradient(#00000080,#00000040,#00000030,#00000020,#00000010,#00000010,#00000080)',
        white:
          'conic-gradient(#ffffff80,#ffffff40,#ffffff30,#ffffff20, #ffffff10, #ffffff10,#ffffff80)'
      },
      error: {
        main: '#F10000',
        contrastText: '#f10000c2',
        dark: '#700303'
      },
      primary: {
        main: '#1A1A25',
        dark: '#292929',
        contrastText: '#384255',
        light: 'black'
      },
      secondary: {
        main: '#E8E8E8',
        contrastText: '#E0E2E7',
        light: '#CDCDCD',
        dark: '#91969E'
      },
      success: {
        main: '#3CDE14',
        contrastText: '#2FC504',
        dark: '#08A592',
        light: '#2C68F5'
      },
      warning: {
        main: '#F99808'
      },
      text: {
        disabled: '#CDCDCD',
        primary: '#292929',
        secondary: '#3CDE14'
      },
      divider: '#CDCDCD',
      mode: 'dark'
    },
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            width: '45vw',
            color: '#f5f5f5'
          },
          selected: {
            backgroundColor: 'red'
          }
        }
      }
    }
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
