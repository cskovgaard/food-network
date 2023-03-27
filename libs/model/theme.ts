export interface Theme {
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    main: string;
  };
  palette: {
    primary: {
      main: string;
      contrastText: string;
    };
    action: {
      main: string;
      contrastText: string;
    };
    success: {
      main: string;
      contrastText: string;
    };
    warning: {
      main: string;
      contrastText: string;
    };
    greyscale: {
      grey100: string;
      grey50: string;
      grey20: string;
      grey10: string;
      grey0: string;
    };
    text: {
      primaryDark: string;
      secondaryDark: string;
      primaryLight: string;
      secondaryLight: string;
    };
  };
  spacing: (value: number | string) => string;
  typography: {
    family: string;
    weight: {
      light: number;
      regular: number;
      bold: number;
    };
    size: {
      sm: string;
      md: string;
      lg: string;
    };
  };
  zIndex: {
    header: number;
    dialog: number;
  };
}
