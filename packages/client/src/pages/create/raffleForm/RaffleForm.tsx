import { Loader } from '@/components/ui';
import { toast } from '@/hooks/use-toast';
import { trpc } from '@/lib/trpc';
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

interface Props {
  step: number;
  onIncreaseStep: () => void;
}

export function RaffleForm({ step, onIncreaseStep }: Props) {
  const [url, setUrl] = useState<string>('');
  const form = useForm<RaffleFormSchema>({
    resolver: zodResolver(raffleFormSchema),
    defaultValues,
  });
  const { mutate, isLoading } = trpc.raffle.createRaffle.useMutation();

  const handleSubmit = async (data: RaffleFormSchema) => {
    console.log(data);
    mutate(
      {
        price_per_ticket: data.price_per_ticket,
        tickets_amount: data.tickets_amount,
        title: data.title,
        prizes: data.prizes,
      },
      {
        onError: () => {
          toast({
            title: 'Ooops...',
            description: 'There was an error creating the raffle',
          });
        },
        onSuccess: ({ id }) => {
          setUrl(id);
        },
      }
    );
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
