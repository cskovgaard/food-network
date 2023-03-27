import React from 'react';

import UserContext, { UserContextValues } from '@food/contexts/user-context';

export const useUser = (): UserContextValues => {
  const values = React.useContext(UserContext);

  return { ...values };
};

export default useUser;
