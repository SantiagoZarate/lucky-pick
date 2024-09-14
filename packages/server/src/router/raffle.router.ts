import { z } from 'zod';

import { raffleSchemaDTO, raffleTicketsSchemaDTO } from '../dtos';
import { create, getAll, getOne } from '../lib/docs/';
import { protectedProcedure, publicProcedure, router } from '../lib/trpc';
import { raffleFormSchema } from '../lib/zod-validations/raffle';
import raffleRepository from '../repository/raffle.repository';

export const raffleRouter = router({
  getRaffles: publicProcedure
    .meta(getAll)
    .input(z.void())
    .output(z.array(raffleTicketsSchemaDTO))
    .query(async () => {
      return await raffleRepository.getAll();
    }),
  getRaffleById: publicProcedure
    .meta(getOne)
    .input(raffleSchemaDTO.pick({ id: true }))
    .output(raffleTicketsSchemaDTO)
    .query(async (req) => {
      const { input } = req;
      const raffle = await raffleRepository.getOne(input.id);
      return raffleTicketsSchemaDTO.parse(raffle);
    }),
  createRaffle: protectedProcedure
    .meta(create)
    .input(raffleFormSchema)
    .output(raffleSchemaDTO.pick({ id: true }))
    .mutation(async ({ input, ctx }) => {
      const raffleId = await raffleRepository.create({
        price_per_ticket: input.price_per_ticket,
        prizes: input.prizes ?? [],
        tickets_amount: input.tickets_amount,
        title: input.title,
        user_id: ctx.user.id,
      });

      return raffleId;
    }),
});
