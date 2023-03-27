import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider, css } from 'styled-components';
import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Header from '@food/components/header';
import { burgerBuddyTheme } from '@food/themes/burger-buddy-theme';
import { TabProvider } from '@food/contexts/tab-context';
import { UserProvider } from '@food/contexts/user-context';

import Logo from '../assets/icon.png';
import { Routes } from './routes';
import StorageService from '../services/storage-service';
import { initialFeed } from '../services/mocks/mocks';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: ${theme.palette.greyscale.grey0};
      color: ${theme.palette.text.primaryDark};
      font-family: ${theme.typography.family};
      font-size: ${theme.typography.size.md};
      font-weight: ${theme.typography.weight.regular};

      *,
      *::before,
      *::after {
        box-sizing: inherit;
        line-height: inherit;
      }
    }

    * {
      margin: 0;
      padding: 0;
    }
  `}
`;

export const App: React.FC = () => {
  React.useEffect(() => {
    StorageService.setSession('feed', initialFeed);
  }, []);

  const tabDefinitions = [
    {
      name: 'home',
      icon: faHome
    },
    {
      name: 'locations',
      icon: faMapMarkerAlt
    }
  ];

  return (
    <BrowserRouter>
      <ThemeProvider theme={burgerBuddyTheme}>
        <UserProvider>
          <TabProvider>
            <GlobalStyles />
            <Header logo={Logo} title={'Burger Buddy'} tabs={tabDefinitions} />
            <Routes />
          </TabProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
