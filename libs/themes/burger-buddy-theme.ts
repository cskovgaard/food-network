import { Theme } from '../model/theme';

const handleSpacing = (spacing: number | string): string => {
  const spacingInterval = 4;

  if (typeof spacing === 'number') {
    return `${spacing * spacingInterval}px`;
  }

  return spacing;
};

const textPalette = {
  primaryDark: '#323232',
  secondaryDark: '#4F4F4F',
  primaryLight: '#FFFFFF',
  secondaryLight: '#F2F2F2'
};

export const burgerBuddyTheme: Theme = {
  breakpoints: {
    mobile: '580px',
    tablet: '1050px',
    desktop: '1200px',
    main: '1320px'
  },
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: textPalette.primaryDark
    },
    action: {
      main: '#DAB785',
      contrastText: textPalette.primaryDark
    },
    success: {
      main: '#61947A',
      contrastText: textPalette.primaryLight
    },
    warning: {
      main: '#BE5937',
      contrastText: textPalette.primaryLight
    },
    greyscale: {
      grey100: '#323232',
      grey50: '#808080',
      grey20: '#DEDEDE',
      grey10: '#F2F2F2',
      grey0: '#FFFFFF'
    },
    text: textPalette
  },
  spacing: handleSpacing,
  typography: {
    family: `${'Open Sans'}, sans-serif`,
    weight: {
      light: 100,
      regular: 400,
      bold: 700
    },
    size: {
      sm: '12px',
      md: '14px',
      lg: '18px'
    }
  },
  zIndex: {
    header: 1000,
    dialog: 1100
  }
};
