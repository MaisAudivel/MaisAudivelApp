import pg from "pg";
import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

const pool = new pg.Pool();
const db = drizzle(pool);

export const usersTable = pgTable('users', {
    id: serial("id").primaryKey(),
    fullname: text("fullname"),
    username: text("username"),
    email: text("email"),
    password: varchar("password"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" })
});

const userTable = pgTable('user', {
    id: text("id").primaryKey()
});

const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => usersTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});


export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);