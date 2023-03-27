import { ComponentType, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';

import defaultTheme from '@food/themes';

const render = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  const Wrapper = ({ children }: { children: ReactElement }): ReactElement => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
  };

  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...options });
};

export * from '@testing-library/react';

export { render };
