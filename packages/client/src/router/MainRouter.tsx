import { AuthProvider } from '@/context/authContext';
import { MainLayout, AuthLayout } from '@/layouts';
import { CreatePage, HomePage, RafflesPage } from '@/pages';
import { LoginPage } from '@/pages/auth/LoginPage';
import { ProtectedRoute } from '@/utils/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
