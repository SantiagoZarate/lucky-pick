import { Footer, Header } from '@/components/common';
import { Outlet } from 'react-router-dom';
import './mainLayout.css';
import { DevPill } from '@/components/ui/dev-pill';

export function MainLayout() {
  return (
    <section className="main-layout relative text-pretty text-primary antialiased">
      <Header />
      <section className="grid min-h-dvh grid-rows-[1fr_auto] px-4 pt-16">
        <Outlet />
        <Footer />
      </section>
      <DevPill />
    </section>
  );
}
