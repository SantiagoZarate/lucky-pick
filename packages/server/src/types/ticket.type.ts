import { InferInsertModel } from 'drizzle-orm';
import { ticketSchema } from '../../drizzle/schemas/ticketSchema';

export type Ticket = Required<InferInsertModel<typeof ticketSchema>>;
