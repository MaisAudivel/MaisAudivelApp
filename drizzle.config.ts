import type { Config } from "drizzle-kit";

export default {
    schema: './src/lib/server/schema.ts',
    out: './drizzle',
    driver: 'pglite',
    dbCredentials: {
        url: process.env.DB_URL!
    },
    dialect: "postgresql"
} satisfies Config;