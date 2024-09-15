import { toast } from '@/hooks/use-toast';
import { QueryClientConfig } from '@tanstack/react-query';
import { TRPCClientError } from '@trpc/client';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError(err) {
        if (err instanceof TRPCClientError) {
          toast({ title: 'There was an error', description: err.message });
        }
      },
    },
  },
};
