import env from "@/env";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/drizzle/schema.ts",
  out: "./src/lib/drizzle/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
    ssl: false,
  },
  casing: "snake_case",
});
