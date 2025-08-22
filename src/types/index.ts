import { advocates } from "@/db/schema";

type Advocate = Exclude<typeof advocates.$inferSelect, 'specialties'> & { specialties: string[] };

export type {
   Advocate
}