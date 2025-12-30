import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

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

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}/mocks/user.json`); // JSON must be in public/mocks/user.json
        const json = await res.json();
        setUser(json.user as User);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
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
