import {
  RaffleFormSchema,
  defaultValues,
  raffleFormSchema,
} from '@/lib/zod-validation/raffleSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { DetailsStep } from './DetailsStep';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

interface Props {
  step: number;
  onIncreaseStep: () => void;
}

export function RaffleForm({ step, onIncreaseStep }: Props) {
  const form = useForm<RaffleFormSchema>({
    resolver: zodResolver(raffleFormSchema),
    defaultValues,
  });

  const handleSubmit = (data: RaffleFormSchema) => {
    console.log(data);
    onIncreaseStep();
  };

  const handleIncreaseStep = () => {
    const value = form.getValues('title');
    if (!value) {
      form.setError('title', { message: 'Title must be defined' });
      return;
    }
    onIncreaseStep();
  };

  return (
    <FormProvider {...form}>
      {step === 3 ? (
        <DetailsStep />
      ) : (
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4"
        >
          {step === 1 ? (
            <StepOne onIncreaseStep={handleIncreaseStep} />
          ) : (
            <StepTwo />
          )}
        </form>
      )}
    </FormProvider>
  );
}
