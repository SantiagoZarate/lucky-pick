import { Button } from '@/components/ui/button';
import { PropsWithChildren, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export function CreatePage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <section className="mx-auto max-w-screen-xl bg-red-400">
      <header>Create a new raffle</header>
      <section className="grid grid-cols-5">
        <article className="col-span-4">
          <form action="">
            {currentStep === 1 && <div>STEP 1</div>}
            {currentStep === 2 && <div>STEP 2</div>}
            {currentStep === 3 && <div>STEP 3</div>}
            {currentStep < 3 && (
              <Button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className=""
              >
                {currentStep === 1 ? 'next step' : 'Create raffle'}
              </Button>
            )}
          </form>
          {currentStep === 3 && <ConfettiExplosion />}
        </article>
        <aside className="flex flex-col gap-6">
          <h4>Steps to create a new raffle</h4>
          <ul className="flex flex-col gap-2">
            <StepItem>1 - Give it a name and indicate prizes</StepItem>
            <StepItem>
              2 - Indicate tickets information (how many and price per each)
            </StepItem>
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
