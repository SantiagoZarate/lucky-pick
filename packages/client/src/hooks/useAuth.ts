import { authContext } from '@/context/authContext';
import { useContext } from 'react';

export function useAuth() {
  const values = useContext(authContext);

  if (!values) {
    throw new Error('useAuth must be use within authProvider component');
  }

  return values;
}
