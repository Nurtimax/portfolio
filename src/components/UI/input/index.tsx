import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  InputBase,
  InputBaseProps,
  Stack,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { FC } from 'react';

import { THEME_PALETTE } from '@/utils/constants/theme';

export interface InputProps extends InputBaseProps {
  [key: string]: unknown;
  FormLableProps?: FormLabelProps;
  FormControle?: FormControlProps;
  htmlFor: string;
}

declare module '@mui/material/InputBase' {
  interface InputBaseProps {
    variants?: 'form' | 'default';
  }
}

const Input: FC<InputProps> = (props) => {
  const theme = createTheme({
    palette: THEME_PALETTE,
    components: {
      MuiInputBase: {
        variants: [
          {
            props: { variants: 'form' },
            style: ({ theme }) => ({
              borderColor: theme.palette.secondary.main + ' !important',
              border: '1px solid',
              padding: '.5rem',
              color: theme.palette.secondary.main,
              borderRadius: '3px',
              fontSize: '1rem',
              background: `#292929`
            })
          }
        ]
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack display="grid">
        <FormControl {...props.FormControle}>
          <FormLabel {...props.FormLableProps} htmlFor={props.htmlFor} />
          <InputBase id={props.htmlFor} name={props.htmlFor} {...props} />
        </FormControl>
      </Stack>
    </ThemeProvider>
  );
};

export default Input;
