import { TRPCPanelMeta } from 'trpc-panel';

export const getAll: TRPCPanelMeta = {
  description: 'Get all raffles',
};

export const getOne: TRPCPanelMeta = {
  description: 'Get raffle by its unique id',
};

export const create: TRPCPanelMeta = {
  description: 'Create a new raffle',
};
