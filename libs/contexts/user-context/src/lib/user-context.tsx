import React from 'react';

import { User } from '@food/model/user';

export interface UserContextValues {
  user?: User;
  setUser?: (user: User) => void;
}

export interface UserContextProps {
  children: React.ReactNode | React.ReactNode[];
}

export const UserContext = React.createContext({} as UserContextValues);

export const UserProvider = (props: UserContextProps): JSX.Element => {
  const { children } = props;

  const [user, setUser] = React.useState<User>();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
