import { eq } from 'drizzle-orm';
import { db } from '../../drizzle';
import { raffleSchema } from '../../drizzle/schemas/raffleSchema.drizzle';
import { ticketSchema } from '../../drizzle/schemas/ticketSchema.drizzle';
import { RaffleInsert } from '../types/raffle.type';

async function getAll() {
  const data = await db.query.raffleSchema.findMany({
    with: {
      tickets: {
        columns: {
          raffle_id: false,
        },
      },
    },
  });

  if (!data.length) {
    throw new Error('No raffles found');
  }

  return data;
}

async function getOne(id: string) {
  const data = await db.query.raffleSchema.findFirst({
    where: (raffle) => eq(raffle.id, id),
    with: {
      tickets: {
        columns: {
          raffle_id: false,
        },
      },
    },
  });

  if (!data) {
    throw new Error('Raffle with id: ' + id + ' not found');
  }

  return data;
}

async function create(raffle: RaffleInsert) {
  return await db.transaction(async (tx) => {
    const newRaffle = await tx
      .insert(raffleSchema)
      .values({
        price_per_ticket: raffle.price_per_ticket,
        title: raffle.title,
        user_id: raffle.user_id,
        prizes: raffle.prizes.join(','),
      })
      .returning({ id: raffleSchema.id });

    const raffleID = newRaffle[0].id;

    await tx.insert(ticketSchema).values(
      [...Array(raffle.tickets_amount)].map((_, index) => ({
        raffle_id: raffleID,
        id: index + 1,
      }))
    );

    return newRaffle[0];
  });
}

export default {
  getAll,
  getOne,
  create,
};
