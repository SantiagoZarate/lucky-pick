import { Text } from '@/components/ui';

export function CellStatusInfo() {
  return (
    <section className="flex flex-col items-end">
      <div className="flex items-center gap-1">
        <Text variant={'detail'}>Purchased</Text>
        <div className="size-2 rounded-full bg-green-500" />
      </div>
      <div className="flex items-center gap-1">
        <Text variant={'detail'}>Available</Text>
        <div className="size-2 rounded-full border bg-background" />
      </div>
    </section>
  );
}
