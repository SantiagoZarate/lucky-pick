import { LeftSide } from './hero/LeftSide';
import { RightSide } from './hero/RightSide';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-secondary [mask-image:radial-gradient(ellipse_100%_100%_at_25%_100%,white_0%,transparent_90%)]" />
      <section className="relative mx-auto flex min-h-[70dvh] max-w-desktop items-center gap-12">
        <LeftSide />
        <RightSide />
      </section>
    </div>
  );
}
