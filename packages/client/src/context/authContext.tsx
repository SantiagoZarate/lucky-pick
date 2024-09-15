import { trpc } from '@/lib/trpc';
import { LoginPayload, User } from '@/types/auth.type';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { LOCALSTORAGE_USER_KEY } from '@/config/keys';

interface AuthContext {
  user: User | null;
  loginAction: (data: LoginPayload) => void;
}

export const authContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_USER_KEY) ?? ''
    );
    setUser(storedUser);
  }, []);

  const loginAction = (loginPayload: LoginPayload) => {
    const { mutate } = trpc.auth.login.useMutation({
      onSuccess: (response) => {
        setUser(response);
        localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response));
      },
    });
    mutate(loginPayload);
  };

  return (
    <authContext.Provider
      value={{
        user,
        loginAction,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
