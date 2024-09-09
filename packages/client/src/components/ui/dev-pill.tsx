import envs from '@/config/envs';
import { Text } from './text';

export function DevPill() {
  if (envs.MODE !== 'development') return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 m-12 flex flex-col gap-1 rounded-lg border border-border bg-background p-3">
      <Text>Dev Mode</Text>
      <footer className="flex gap-1">
        <div className="size-4 rounded-full border border-dashed border-black/40 p-1">
          <div
            className={`h-full w-full rounded-[inherit] ${envs.BACKEND ? 'bg-green-500' : 'bg-red-400'}`}
          ></div>
        </div>
        <Text variant={'detail'}>Connected to backend</Text>
      </footer>
    </div>
  );
}
