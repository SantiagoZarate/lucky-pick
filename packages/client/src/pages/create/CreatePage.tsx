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
    <CreateRaffleLayout>
      <RaffleForm step={currentStep} onIncreaseStep={increaseStep} />
      <Steps currentStep={currentStep} />
      {currentStep === 3 && <ConfettiExplosion className="absolute" />}
    </CreateRaffleLayout>
  );
}
