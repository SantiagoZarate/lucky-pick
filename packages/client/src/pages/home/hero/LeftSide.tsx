import { Button } from '@/components/ui';
import { Link } from 'react-router-dom';

export function LeftSide() {
  return (
    <article className="flex flex-1 flex-col gap-4">
      <h1 className="text-4xl font-semibold">
        Create, Participate, and Win – The Ultimate Raffle Experience!
      </h1>
      <p>
        Whether you want to host your own raffle or join others for a chance to
        win, our platform makes it easy and fun. Dive into the excitement and
        start winning today!
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
  );
}
