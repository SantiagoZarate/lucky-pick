import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { RaffleForm } from './raffleForm/RaffleForm';
import { Steps } from './Steps';
import { Text } from '@/components/ui';

export function CreatePage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  function increaseStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <section className="mx-auto max-w-screen-xl">
      <header>
        <Text variant={'title'}>Create a new raffle</Text>
      </header>
      <section className="grid grid-cols-5 gap-8">
        <article className="col-span-4">
          <RaffleForm step={currentStep} onIncreaseStep={increaseStep} />
          {currentStep === 3 && <ConfettiExplosion />}
        </article>
        <Steps currentStep={currentStep} />
      </section>
    </section>
  );
}
