import { db, eq, Negotiations, Sessions } from 'astro:db';
import { defineAction } from 'astro:actions';
import { z } from 'astro:content';

type Session = {
    id: number;
    chatHistory: { c: string }[];
};

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
            qna: z.array(z.object({ q: z.string(), a: z.string() }))
        }),
        handler: async (input) => {
            await db.insert(Sessions).values({
                id: Math.floor(Math.random() * 1e6),
                name: input.name,
                nId: input.nId,
                qna: input.qna,
                chatHistory: [],
                created_at: new Date(),
                updated_at: new Date()
            });

            return { message: `Session ${input.name} created successfully` };
        }
    }),

    addMessageToSession: defineAction({
        input: z.object({
            id: z.number(),
            type: z.enum(["s", "c"]),
            message: z.string()
        }),
        handler: async (input) => {
            const session = await db.select().from(Sessions).where(eq(Sessions.id, input.id)).then(res => res[0] as Session);
            if (!session) throw new Error(`Session ${input.id} not found`);

            if (input.type === "c") {
                const newMessageHistory = [...session.chatHistory, { c: input.message }];
                await db.update(Sessions).set({ chatHistory: newMessageHistory }).where(eq(Sessions.id, input.id));
                return { message: `Message added to session ${input.id} successfully` };
            }

            const newMessageHistory = [...session.chatHistory, { s: input.message }];
            await db.update(Sessions).set({ chatHistory: newMessageHistory }).where(eq(Sessions.id, input.id));
            return { message: `Message added to session ${input.id} successfully` };
        }
    })
}
