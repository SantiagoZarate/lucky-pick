import { LOCALSTORAGE_USER_KEY } from '@/config/keys';
import { trpc } from '@/lib/trpc';
import { LoginPayload, User } from '@/types/auth.type';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContext {
  user: User | null;
  loginAction: (data: LoginPayload) => void;
  logout: () => void;
}

export const authContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const redirect = useNavigate();

  const loginMutation = trpc.auth.login.useMutation({
    onSuccess(response) {
      setUser(response);
      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response));
      redirect({ pathname: '/' });
    },
  });

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      setUser(null);
      localStorage.removeItem(LOCALSTORAGE_USER_KEY);
      redirect({ pathname: '/' });
    },
  });

  useEffect(() => {
    // @ts-expect-error user is gonna be stored in localStorage
    const storedUser = JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_KEY));
    setUser(storedUser);
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        loginAction: loginMutation.mutateAsync,
        logout: logoutMutation.mutate,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
