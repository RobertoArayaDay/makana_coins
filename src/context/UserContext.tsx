import { createContext, useContext, useState, useEffect } from 'react';
import userData from '../../mocks/user.json';

// This class would be adapted to be with redux instead of context / provider (global state)
export type User = {
  id: number;
  name: string;
  email: string;
  coins: number;
};

export type UserContextType = {
  user?: User;
  loading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    const timer = setTimeout(() => {
      setUser(userData.user as User);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <UserContext.Provider value={{ user, loading }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used inside UserProvider');
  }

  return context;
}
