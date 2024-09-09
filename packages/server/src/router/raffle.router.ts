import { z } from 'zod';

import { raffleSchemaDTO, raffleTicketsSchemaDTO } from '@dtos';
import { create, getAll, getOne } from '@lib/openapi/raffle.openapi';
import { publicProcedure, router } from '@lib/trpc';
import { raffleFormSchema } from '@lib/zod-validations/raffle';
import raffleRepository from '@repository/raffle.repository';

export const raffleRouter = router({
  getRaffles: publicProcedure
    .meta(getAll)
    .input(z.void())
    .output(z.array(raffleSchemaDTO))
    .query(async () => {
      return await raffleRepository.getAll();
    }),
  getRaffleById: publicProcedure
    .meta(getOne)
    .input(raffleSchemaDTO.pick({ id: true }))
    .output(raffleTicketsSchemaDTO)
    .query(async (req) => {
      const { input } = req;
      return await raffleRepository.getOne(input.id);
    }),
  createRaffle: publicProcedure
    .meta(create)
    .input(raffleFormSchema)
    .output(raffleSchemaDTO.pick({ id: true }))
    .mutation(async (req) => {
      const { input } = req;

      const raffleId = await raffleRepository.create({
        price_per_ticket: input.price_per_ticket,
        prizes: input.prizes ?? [],
        tickets_amount: input.tickets_amount,
        title: input.title,
      });

      return raffleId;
    }),
});
