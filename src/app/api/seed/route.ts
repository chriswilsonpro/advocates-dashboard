import { NextResponse } from "next/server";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function POST() {
  if (!('insert' in db)) {
    // TODO: Database not available, return better feedback
    return Response.error()
  }

  const records = await db.insert(advocates).values(advocateData).returning();

  return Response.json({ advocates: records });
}
