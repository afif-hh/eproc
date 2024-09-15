import type { APIContext } from "astro";
import { db } from "@/db";
import { mahasiswa } from "@/db/schema";

export async function GET(context: APIContext) {
  // console.log(context.locals.runtime.env.DB);
  // const db = drizzle(env.<BINDING_NAME>);
  //   const result = await db.select().from(users).all()
  // const db = drizzle(context.locals.runtime.env.DB, { schema });
  const stmt = await db.select().from(mahasiswa);

  return Response.json({ hello: stmt });
}
