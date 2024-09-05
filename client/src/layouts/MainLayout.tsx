import { Header } from '@/components/common';
import { Footer } from '@/components/common/footer/Footer';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <section className="text-pretty bg-background text-primary antialiased">
      <Header />
      <section className="grid min-h-dvh grid-rows-[1fr_auto] pt-16">
        <Outlet />
        <Footer />
      </section>
    </section>
  );
}
