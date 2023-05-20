import { FC, ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { THEME_COMPONENTS, THEME_PALETTE } from '@/utils/constants/theme';

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
    palette: THEME_PALETTE,
    components: THEME_COMPONENTS
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
