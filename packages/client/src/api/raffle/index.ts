import {
  RaffleDTO,
  RaffleInsert,
  RaffleSelect,
  RaffleTicketsDTO,
} from '@/types/raffle.type';

export interface RaffleAPI {
  getAll: () => Promise<RaffleDTO[]>;
  getOne: (id: RaffleSelect) => Promise<RaffleTicketsDTO>;
  create: (data: RaffleInsert) => Promise<RaffleDTO>;
}
