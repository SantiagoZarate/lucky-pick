import { MainLayout } from '@/layouts';
import { HomePage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
