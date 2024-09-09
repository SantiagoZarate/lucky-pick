import { TableCellsMicro } from '@/components/icons';
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
import { getEmoji } from '@/utils/getEmoji';
import { useFormContext } from 'react-hook-form';

export function StepOne({ onIncreaseStep }: { onIncreaseStep: () => void }) {
  const form = useFormContext<RaffleFormSchema>();

  const handleAddPrize = () => {
    const prevPrizes = form.getValues('prizes') ?? [];
    form.setValue('prizes', [...prevPrizes, '']);
  };

  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <TableCellsMicro /> Raffle title
            </FormLabel>
            <FormControl>
              <Input placeholder="the greatest raffle ever made" {...field} />
            </FormControl>
            <FormDescription>Give it a new name</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <button
        type="button"
        onClick={handleAddPrize}
        className="w-full rounded-lg border-2 border-dashed py-2 text-sm hover:bg-secondary"
      >
        Add prize
      </button>
      {form.watch('prizes')?.map((_prize, index) => (
        <FormField
          key={index}
          control={form.control}
          name={`prizes.${index}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {getEmoji(index)} Prize {index + 1}
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="prize" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <Button type="button" onClick={onIncreaseStep} className="w-fit self-end">
        Next step
      </Button>
    </>
  );
}
