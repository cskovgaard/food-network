import React from 'react';

import { TabDefinition } from '@food/model/tab-definition';

export interface TabContextValues {
  activeTab?: TabDefinition;
  setActiveTab?: (tab: TabDefinition) => void;
  hideTabs?: boolean;
  setHideTabs?: (hide: boolean) => void;
}

export interface TabContextProps {
  children: React.ReactNode | React.ReactNode[];
}

export const TabContext = React.createContext({} as TabContextValues);

export const TabProvider = (props: TabContextProps): JSX.Element => {
  const { children } = props;

  const [activeTab, setActiveTab] = React.useState<TabDefinition>();
  const [hideTabs, setHideTabs] = React.useState<boolean>(false);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, hideTabs, setHideTabs }}>
      {children}
    </TabContext.Provider>
  );
};
