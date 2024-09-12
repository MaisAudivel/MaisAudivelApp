import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { adapter } from "./schema";

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: !dev
        }
    }
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
    }
}