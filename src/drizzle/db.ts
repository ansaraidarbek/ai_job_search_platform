import { env } from "@/src/data/env/server";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/src/drizzle/schema";

export const db = drizzle(env.DATABASE_URL, { schema });
