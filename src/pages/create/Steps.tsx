import { List, Text } from '@/components/ui';
import { StepItem } from './StepItem';

interface Props {
  currentStep: number;
}

const STEPS = [
  'General information',
  'Indicate tickets information',
  'Share the link with your friends!',
];

export function Steps({ currentStep }: Props) {
  return (
    <aside className="flex flex-col gap-6">
      <Text asChild variant={'subtitle'}>
        <h4>Steps to create a new raffle</h4>
      </Text>
      <List>
        {STEPS.map((step, index) => (
          <StepItem
            active={index + 1 === currentStep}
            stepNumber={index + 1}
            key={step}
          >
            {step}
          </StepItem>
        ))}
      </List>
    </aside>
  );
}
