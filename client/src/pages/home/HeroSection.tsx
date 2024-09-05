import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { RightSide } from './hero/RightSide';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-secondary [mask-image:radial-gradient(ellipse_100%_100%_at_25%_100%,white_0%,transparent_100%)]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_100%_100%_at_80%_-20%,white_0%,transparent_60%)]" />
      <section className="relative mx-auto flex min-h-[70dvh] max-w-desktop items-center gap-12">
        <article className="flex flex-1 flex-col gap-4">
          <h1 className="text-4xl font-semibold">
            Create, Participate, and Win – The Ultimate Raffle Experience!
          </h1>
          <p>
            Whether you want to host your own raffle or join others for a chance
            to win, our platform makes it easy and fun. Dive into the excitement
            and start winning today!
          </p>
          <footer className="flex gap-2">
            <Link className="flex-1" to={'/create'}>
              <Button className="w-full">create a raffle</Button>
            </Link>
            <Link className="flex-1" to={'/create'}>
              <Button variant={'outline'} className="w-full">
                join a raffle
              </Button>
            </Link>
          </footer>
        </article>
        <RightSide />
      </section>
    </div>
  );
}
