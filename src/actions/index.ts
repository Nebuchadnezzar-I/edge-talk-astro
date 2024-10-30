import { defineAction } from 'astro:actions';
import { z } from 'astro:content';
import { db, Negotiations } from 'astro:db';

export const server = {
    myAction: defineAction({
        input: z.object({
            name: z.string()
        }),
        handler: async (input) => {
            try {
                await db.insert(Negotiations).values({
                    id: Math.floor(Math.random() * 1e6),
                    name: input.name,
                    created_at: new Date(),
                    updated_at: new Date()
                });

                return { message: `Negotiation ${input.name} created successfully` };
            } catch (error) {
                console.error("Database insertion error:", error);
                throw new Error("Failed to create negotiation. Please try again later.");
            }
        }
    })
}

