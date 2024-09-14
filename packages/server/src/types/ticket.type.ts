import { InferInsertModel } from 'drizzle-orm';
import { ticketSchema } from '../../drizzle/schemas/ticketSchema.drizzle';

export type Ticket = Required<InferInsertModel<typeof ticketSchema>>;
