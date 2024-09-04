import { List, Text } from '@/components/ui';
import { StepItem, Variants } from './StepItem';

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
        {STEPS.map((step, index) => {
          let variant: Variants['variant'] = 'regular';

          const aux = index + 1;

          if (currentStep === aux) {
            variant = 'active';
          } else if (currentStep < aux) {
            variant = 'inactive';
          }

          return (
            <StepItem variant={variant} stepNumber={aux} key={step}>
              {step}
            </StepItem>
          );
        })}
      </List>
    </aside>
  );
}
