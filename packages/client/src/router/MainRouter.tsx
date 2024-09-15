import { AuthProvider } from '@/context/authContext';
import { MainLayout } from '@/layouts';
import { CreatePage, HomePage, RafflesPage } from '@/pages';
import { ProtectedRoute } from '@/utils/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/raffles" element={<RafflesPage />} />
          <AuthProvider>
            <Route element={<ProtectedRoute />}>
              <Route path="/create" element={<CreatePage />} />
            </Route>
          </AuthProvider>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
