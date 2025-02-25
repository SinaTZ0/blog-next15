import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/lib/drizzle/schema";
import env from "@/env";

export const db = drizzle(env.DATABASE_URL, {
    schema,
    casing: "snake_case",
});
