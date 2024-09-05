import { MainLayout } from '@/layouts';
import { CreatePage, HomePage, RafflesPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/raffles" element={<RafflesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
