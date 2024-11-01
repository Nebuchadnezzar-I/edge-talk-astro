import { db, Negotiations, Sessions } from 'astro:db';

export default async function seed() {
    await db.insert(Negotiations).values([
        { id: 1, name: 'Negotiation 1', created_at: new Date(), updated_at: new Date() },
    ]);

    await db.insert(Sessions).values([
        { id: 1, name: 'Session 1', nId: 1, qna: [{q: ""}, {a: ""}], chatHistory: [{s: "How are you?"}, {c: "Iam fine"}, {s: "How can I help you?"}, {c: "Iam good!"}], created_at: new Date(), updated_at: new Date() },
    ]);
}
