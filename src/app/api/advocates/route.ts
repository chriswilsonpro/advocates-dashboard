import db from "../../../db";
import { advocates } from "../../../db/schema";

export async function GET() {
  const data = await db.select().from(advocates);

  // Uncomment this line to use test data from db/seed/advocates.ts
  // const data = advocateData;

  return Response.json({ data });
}
