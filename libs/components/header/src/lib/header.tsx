import React from 'react';
import styled from 'styled-components';

import useTab from '@food/hooks/use-tab';
import useUser from '@food/hooks/use-user';
import Typography from '@food/components/typography';
import ProfileIcon from '@food/components/profile-icon';
import { TabDefinition } from '@food/model/tab-definition';
import FoodGatewayService from '@food/services/food-gateway-service';

import HeaderTabs from './header-tabs';
import { useNavigate } from 'react-router-dom';

const HeaderRoot = styled.header`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.greyscale.grey0};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.main};
  padding: 0 ${({ theme }) => theme.spacing(8)};
  justify-content: space-between;
`;

const HeaderBranding = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HeaderLogo = styled.img`
  max-height: 45px;
`;

const HeaderTitle = styled(Typography)`
  display: none;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.primary.contrastText};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileText = styled(Typography)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

interface Props {
  logo?: string;
  title?: string;
  tabs?: TabDefinition[];
}

export const Header: React.FC<Props> = ({ logo, title, tabs }) => {
  const { setActiveTab, hideTabs } = useTab();
  const { user, setUser } = useUser();

  const profileText = user && user.isLoggedIn ? user.name : 'Sign in';

  const navigate = useNavigate();

  const onClickProfile = React.useCallback(() => {
    if (!user?.isLoggedIn) {
      const response = FoodGatewayService.userLogin();
      setUser?.(response);
    } else {
      const response = FoodGatewayService.userLogout();
      setUser?.(response);
    }
  }, [setUser, user]);

  return (
    <HeaderRoot>
      <HeaderContent>
        <HeaderBranding onClick={() => navigate('/')}>
          {logo && <HeaderLogo src={logo} alt="logo" />}
          {title && (
            <HeaderTitle variant="h1" data-testid={'header-title'}>
              {title}
            </HeaderTitle>
          )}
        </HeaderBranding>

        {tabs && !hideTabs && <HeaderTabs tabs={tabs} onChange={setActiveTab} />}

        <HeaderProfile onClick={onClickProfile}>
          <ProfileText variant="text">{profileText}</ProfileText>
          <ProfileIcon isLoggedIn={user?.isLoggedIn} />
        </HeaderProfile>
      </HeaderContent>
    </HeaderRoot>
  );
};

export default Header;
