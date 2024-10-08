import { DolarMiniIcon, TicketMicroIcon } from '@/components/icons';
import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { RaffleFormSchema } from '@/lib/zod-validation/raffleSchema';
import { useFormContext } from 'react-hook-form';

export function StepTwo() {
  const form = useFormContext<RaffleFormSchema>();

  return (
    <>
      <FormField
        control={form.control}
        name="tickets_amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <TicketMicroIcon /> Amount of tickets
            </FormLabel>
            <FormControl>
              <Input placeholder="100" {...field} type="number" />
            </FormControl>
            <FormDescription>
              Indicate the amount of tickets available to buy
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="price_per_ticket"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <DolarMiniIcon /> Price per ticket
            </FormLabel>
            <FormControl>
              <Input placeholder="$2.99" {...field} type="number" />
            </FormControl>
            <FormDescription>
              Indicate the price to pay for each ticket ($ars)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="w-fit self-end">Create raffle</Button>
    </>
  );
}
