import { db, Negotiations, Sessions } from 'astro:db';

export default async function seed() {
    await db.insert(Negotiations).values([
        { id: 1, name: 'Negotiation 1', created_at: new Date(), updated_at: new Date() },
        { id: 2, name: 'Negotiation 2', created_at: new Date(), updated_at: new Date() },
        { id: 3, name: 'Negotiation 3', created_at: new Date(), updated_at: new Date() },
        { id: 4, name: 'Negotiation 4', created_at: new Date(), updated_at: new Date() },
    ]);

    await db.insert(Sessions).values([
        { id: 1, name: 'Session 1', nId: 1, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 2, name: 'Session 2', nId: 2, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 3, name: 'Session 3', nId: 3, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 4, name: 'Session 4', nId: 4, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 5, name: 'Session 5', nId: 1, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 6, name: 'Session 6', nId: 2, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 7, name: 'Session 7', nId: 3, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 8, name: 'Session 8', nId: 4, qna: "", created_at: new Date(), updated_at: new Date() },
        { id: 9, name: 'Session 9', nId: 1, qna: "", created_at: new Date(), updated_at: new Date() },
    ]);
}
