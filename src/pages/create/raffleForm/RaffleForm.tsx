import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import {
  RaffleFormSchema,
  raffleFormSchema,
  defaultValues,
} from '@/lib/zod-validation/raffleSchema';

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

  return step !== 3 ? (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        {step === 1 ? <StepOne onIncreaseStep={onIncreaseStep} /> : <StepTwo />}
      </form>
    </FormProvider>
  ) : (
    <div>Your link</div>
  );
}
