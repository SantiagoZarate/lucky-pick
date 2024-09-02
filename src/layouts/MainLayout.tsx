import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <section className="min-h-dvh text-pretty bg-background text-primary antialiased">
      <Outlet />
    </section>
  );
}
