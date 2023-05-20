import { Components, PaletteOptions, Theme } from '@mui/material';

export const THEME_PALETTE: PaletteOptions = {
  action: {
    activatedOpacity: 0.8
  },
  common: {
    black: 'conic-gradient(#00000080,#00000040,#00000030,#00000020,#00000010,#00000010,#00000080)',
    white: 'conic-gradient(#ffffff80,#ffffff40,#ffffff30,#ffffff20, #ffffff10, #ffffff10,#ffffff80)'
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
    disabled: '#292929',
    primary: '#3CDE14',
    secondary: '#cdcdcd'
  },
  divider: '#CDCDCD',
  mode: 'dark'
};

export const THEME_COMPONENTS: Components<Omit<Theme, 'components'>> | undefined = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        width: '45vw',
        color: '#f5f5f5',
        '&.Mui-selected': {
          color: 'red'
        }
      }
    }
  },
  MuiTypography: {
    variants: [
      {
        props: { variant: 'h6' },
        style: ({ theme }) => ({
          [theme.breakpoints.up('md')]: {
            fontSize: '35px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '26px'
          },
          [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
          }
        })
      },
      {
        props: { variant: 'h5' },
        style: ({ theme }) => ({
          [theme.breakpoints.up('md')]: {
            fontSize: '39px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '30px'
          }
        })
      },
      {
        props: { variant: 'h4' },
        style: ({ theme }) => ({
          fontWeight: '600',
          [theme.breakpoints.up('md')]: {
            fontSize: '45px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '32px'
          }
        })
      },
      {
        props: { variant: 'subtitle1' },
        style: ({ theme }) => ({
          // color: theme.palette.text.disabled,
          [theme.breakpoints.up('md')]: {
            fontSize: '18px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
          }
        })
      },
      {
        props: { variant: 'subtitle2' },
        style: ({ theme }) => ({
          // color: theme.palette.text.disabled,
          [theme.breakpoints.up('md')]: {
            fontSize: '17px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '15px'
          }
        })
      },
      {
        props: { variant: 'caption' },
        style: ({ theme }) => ({
          // color: theme.palette.text.disabled,
          [theme.breakpoints.up('md')]: {
            fontSize: '13px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '10px'
          }
        })
      }
    ]
  },
  MuiButton: {
    variants: [
      {
        props: { variant: 'contained' },
        style: () => ({
          background: '#F10000',
          color: '#f5f5f5'
        })
      }
    ]
  }
};
