import React from 'react';

import { TabDefinition } from '@food/model/tab-definition';

export interface TabContextValues {
  activeTab?: TabDefinition;
  setActiveTab?: (tab: TabDefinition) => void;
}

export interface TabContextProps {
  children: React.ReactNode | React.ReactNode[];
}

export const TabContext = React.createContext({} as TabContextValues);

export const TabProvider = (props: TabContextProps): JSX.Element => {
  const { children } = props;

  const [activeTab, setActiveTab] = React.useState<TabDefinition>();

  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>;
};
