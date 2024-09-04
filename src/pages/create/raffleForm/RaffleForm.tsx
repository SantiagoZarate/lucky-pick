import {
  RaffleFormSchema,
  defaultValues,
  raffleFormSchema,
} from '@/lib/zod-validation/raffleSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
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

  if (step === 3) {
    return <div>Your link</div>;
  }

  return (
    <FormProvider {...form}>
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
    </FormProvider>
  );
}
