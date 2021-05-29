import { createContext, useReducer, useContext, Dispatch } from 'react';
import { User } from 'share/interfaces/user';
import { UserProviderProps, UserAction } from './types';

const UserStateContext = createContext<User>(null);
const UserDispatchContext = createContext<Dispatch<UserAction>>(null);

const reducer = (_state: User, action: UserAction) => {
  switch (action.type) {
    case 'LOGOUT':
      return null;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserProvider = ({ children, user }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, user);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>{children}</UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUser: () => User = () => useContext(UserStateContext);

export const useUserContext = () => {
  const user: User = useContext(UserStateContext);
  const dispatch: Dispatch<UserAction> = useContext(UserDispatchContext);

  return { user, dispatch };
};
