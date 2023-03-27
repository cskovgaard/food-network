import React from 'react';
import styled, { useTheme } from 'styled-components';
import MediaQuery from 'react-responsive';

import useTab from '@food/hooks/use-tab';

import RestaurantTeaser from '../../components/restaurant-teaser';
import Feed from './components/feed';
import PopularReviewers from './components/popular-reviewers';

const LandingRoot = styled.div`
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.greyscale.grey10};
`;

const LandingContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.main};
  padding: 0 ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(20)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  gap: ${({ theme }) => theme.spacing(12)};
`;

export const Landing: React.FC = () => {
  const { activeTab, setHideTabs } = useTab();
  const theme = useTheme();

  const teaserTitle = 'Restaurants in your area';

  React.useEffect(() => {
    setHideTabs?.(false);
  }, [setHideTabs]);

  return (
    <LandingRoot>
      <LandingContent>
        <MediaQuery minWidth={theme.breakpoints.mobile}>
          <RestaurantTeaser title={teaserTitle} />
          <Feed />
        </MediaQuery>
        <MediaQuery maxWidth={theme.breakpoints.mobile}>
          {activeTab?.name === 'home' && <Feed />}
          {activeTab?.name === 'locations' && <RestaurantTeaser title={teaserTitle} />}
        </MediaQuery>
        <PopularReviewers />
      </LandingContent>
    </LandingRoot>
  );
};

export default Landing;
