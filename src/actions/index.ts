import { db, eq, Negotiations, Sessions } from 'astro:db';
import { defineAction } from 'astro:actions';
import { z } from 'astro:content';

export const server = {
    newNegotiation: defineAction({
        input: z.object({
            name: z.string()
        }),
        handler: async (input) => {
            await db.insert(Negotiations).values({
                id: Math.floor(Math.random() * 1e6),
                name: input.name,
                created_at: new Date(),
                updated_at: new Date()
            });

            return { message: `Negotiation ${input.name} created successfully` };
        }
    }),

    removeNegotiation: defineAction({
        input: z.object({
            id: z.number()
        }),
        handler: async (input) => {
            await db.delete(Negotiations).where(eq(Negotiations.id, input.id));

            return { message: `Negotiation ${input.id} removed successfully` };
        }
    }),

    newSession: defineAction({
        input: z.object({
            name: z.string(),
            nId: z.number(),
            qna: z.string()
        }),
        handler: async (input) => {
            await db.insert(Sessions).values({
                id: Math.floor(Math.random() * 1e6),
                name: input.name,
                nId: input.nId,
                qna: input.qna,
                created_at: new Date(),
                updated_at: new Date()
            });

            return { message: `Session ${input.name} created successfully` };
        }
    }),
}
