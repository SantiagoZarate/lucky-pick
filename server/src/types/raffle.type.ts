import { InferInsertModel } from "drizzle-orm";
import { raffleSchema } from "../../drizzle/schemas/raffleSchema";

export type Raffle = Required<InferInsertModel<typeof raffleSchema>>;
