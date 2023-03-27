import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';

import { TabDefinition } from '@food/model/tab-definition';

const HeaderTabsRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

interface TabProps {
  isActive?: boolean;
}

const HeaderTabsTab = styled.div<TabProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70px;
  color: ${({ theme }) => theme.palette.greyscale.grey50};
  cursor: pointer;
  box-sizing: border-box;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.palette.primary.main};
      border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};
    `};
`;

interface Props {
  tabs: TabDefinition[];
  onChange?: (activeTab: TabDefinition) => void;
}

export const HeaderTabs: React.FC<Props> = ({ tabs, onChange }) => {
  const [activeTab, setActiveTab] = React.useState<TabDefinition>();

  React.useEffect(() => {
    if (tabs && tabs.length > 0) {
      handleOnClick(tabs[0]);
    }
  }, [tabs]);

  const handleOnClick = React.useCallback(
    (selectedTab: TabDefinition) => {
      setActiveTab(selectedTab);
      onChange?.(selectedTab);
    },
    [onChange]
  );

  return (
    <HeaderTabsRoot>
      {tabs.map((tab) => (
        <HeaderTabsTab
          key={tab.name}
          onClick={() => handleOnClick(tab)}
          isActive={activeTab === tab}
        >
          <FontAwesomeIcon icon={tab.icon} size={'xl'} />
        </HeaderTabsTab>
      ))}
    </HeaderTabsRoot>
  );
};

export default HeaderTabs;
