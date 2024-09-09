import raffleAPI from '@/api/raffle/raffleAPI';
import { HeroSection } from './HeroSection';
import { StepsSection } from './StepsSection';

export function HomePage() {
  const { data } = raffleAPI.getAll();

  return (
    <section>
      {JSON.stringify(data, null, 2)}
      <HeroSection />
      <StepsSection />
    </section>
  );
}
