import { User } from 'share/interfaces/user';

export type UserAction = { type: 'LOGOUT' };
export type UserProviderProps = {
  children: React.ReactNode;
  user: User;
};
