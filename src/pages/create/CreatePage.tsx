import { PropsWithChildren, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { RaffleForm } from './raffleForm/RaffleForm';

export function CreatePage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  function increaseStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <section className="mx-auto max-w-screen-xl">
      <header>Create a new raffle</header>
      <section className="grid grid-cols-5 gap-8">
        <article className="col-span-4">
          <RaffleForm step={currentStep} onIncreaseStep={increaseStep} />
          {currentStep === 3 && <ConfettiExplosion />}
        </article>
        <aside className="flex flex-col gap-6">
          <h4>Steps to create a new raffle</h4>
          <ul className="flex flex-col gap-2">
            <StepItem>1 - Give it a name and indicate prizes</StepItem>
            <StepItem>2 - Indicate tickets information</StepItem>
            <StepItem>3 - Share the link with your friends!</StepItem>
          </ul>
        </aside>
      </section>
    </section>
  );
}

export function StepItem({ children }: PropsWithChildren) {
  return (
    <li className="flex gap-2 rounded-2xl border-dotted bg-secondary p-2">
      {children}
    </li>
  );
}
