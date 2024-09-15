import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <section className="mx-auto grid w-full max-w-desktop grid-cols-[minmax(200px,400px)_1fr] gap-6">
      <Outlet />
      <article>
        <figure className="min-h-[60dvh] overflow-hidden rounded-lg">
          <img
            className="h-full w-full bg-secondary object-center"
            src=""
            alt=""
          />
        </figure>
      </article>
    </section>
  );
}
