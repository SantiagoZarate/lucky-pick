import { Loader } from '@/components/ui';
import {
  RaffleFormSchema,
  defaultValues,
  raffleFormSchema,
} from '@/lib/zod-validation/raffleSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RaffleLink } from '../RaffleLink';
import { DetailsStep } from './DetailsStep';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { raffleAPI } from '@/api/raffle/raffleAPI';

interface Props {
  step: number;
  onIncreaseStep: () => void;
}

export function RaffleForm({ step, onIncreaseStep }: Props) {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<RaffleFormSchema>({
    resolver: zodResolver(raffleFormSchema),
    defaultValues,
  });

  const handleSubmit = async (data: RaffleFormSchema) => {
    console.log(data);
    setIsLoading(true);
    raffleAPI
      .create(data)
      .then((response) => {
        console.log(response);
        setUrl('asdsadasd');
      })
      .finally(() => setIsLoading(false));
    // setTimeout(() => {
    //   const cellsState = Array(data.amount_tickets)
    //     .fill(1)
    //     .map((_, index) => ({
    //       id: index + 1,
    //       available: true,
    //       owner: '',
    //     }));

    //   localStorage.setItem(
    //     'lucky-pick-raffle',
    //     JSON.stringify({
    //       title: data.title,
    //       prizes: data.prizes,
    //       amount_tickets: data.amount_tickets,
    //       tickets: cellsState,
    //     })
    //   );
    //   setUrl('81wgd1s8dg');
    //   setIsLoading(false);
    // }, 2000);

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
        <DetailsStep>
          {isLoading ? <Loader /> : <RaffleLink url={url} />}
        </DetailsStep>
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
