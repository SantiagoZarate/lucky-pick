import { Footer, Header } from '@/components/common';
import { Outlet } from 'react-router-dom';
import './mainLayout.css';

export function MainLayout() {
  return (
    <section className="main-layout text-pretty text-primary antialiased">
      <Header />
      <section className="grid min-h-dvh grid-rows-[1fr_auto] pt-16">
        <Outlet />
        <Footer />
      </section>
    </section>
  );
}
