import React from 'react';

import TabContext, { TabContextValues } from '@food/contexts/tab-context';

export const useTab = (): TabContextValues => {
  const values = React.useContext(TabContext);

  return { ...values };
};

export default useTab;
