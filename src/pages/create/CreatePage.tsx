import { CreateRaffleLayout } from '@/layouts/CreateRaffleLayout';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { Steps } from './Steps';
import { RaffleForm } from './raffleForm/RaffleForm';

export function CreatePage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  function increaseStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <CreateRaffleLayout steps={<Steps currentStep={currentStep} />}>
      <RaffleForm step={currentStep} onIncreaseStep={increaseStep} />
      {currentStep === 3 && <ConfettiExplosion />}
    </CreateRaffleLayout>
  );
}
