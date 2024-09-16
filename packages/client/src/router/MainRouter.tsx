import { AuthProvider } from '@/context/authContext';
import { AuthLayout, MainLayout } from '@/layouts';
import {
  CreatePage,
  HomePage,
  LoginPage,
  RafflesPage,
  SignupPage,
} from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

export function MainRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/raffles" element={<RafflesPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/create" element={<CreatePage />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
