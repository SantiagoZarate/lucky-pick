import { trpc } from '@/lib/trpc';
import { LoginPayload, User } from '@/types/auth.type';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { LOCALSTORAGE_USER_KEY } from '@/config/keys';
import { useNavigate } from 'react-router-dom';

interface AuthContext {
  user: User | null;
  loginAction: (data: LoginPayload) => void;
}

export const authContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const redirect = useNavigate();

  useEffect(() => {
    // @ts-expect-error user is gonna be stored in localStorage
    const storedUser = JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_KEY));
    setUser(storedUser);
  }, []);

  const { mutate } = trpc.auth.login.useMutation({
    onSuccess: (response) => {
      setUser(response);
      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response));
      redirect({ pathname: '/' });
    },
  });

  const loginAction = (loginPayload: LoginPayload) => {
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
