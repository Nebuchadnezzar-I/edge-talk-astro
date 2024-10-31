import { db, Negotiations, Sessions } from 'astro:db';

export default async function seed() {
    await db.insert(Negotiations).values([
        { id: 1, name: 'Negotiation 1', created_at: new Date(), updated_at: new Date() },
        { id: 2, name: 'Negotiation 2', created_at: new Date(), updated_at: new Date() },
        { id: 3, name: 'Negotiation 3', created_at: new Date(), updated_at: new Date() },
        { id: 4, name: 'Negotiation 4', created_at: new Date(), updated_at: new Date() },
    ]);

    await db.insert(Sessions).values([
        { id: 1, name: 'Session 1', nId: 1, qna: 'QnA 1', chatHistory: [{s: "How are you?"}, {c: "Iam fine"}, {s: "How can I help you?"}, {c: "Iam good!"}], created_at: new Date(), updated_at: new Date() },
        { id: 2, name: 'Session 2', nId: 2, qna: 'QnA 2', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 3, name: 'Session 3', nId: 3, qna: 'QnA 3', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 4, name: 'Session 4', nId: 4, qna: 'QnA 4', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 5, name: 'Session 5', nId: 1, qna: 'QnA 5', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 6, name: 'Session 6', nId: 2, qna: 'QnA 6', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 7, name: 'Session 7', nId: 3, qna: 'QnA 7', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 8, name: 'Session 8', nId: 4, qna: 'QnA 8', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 9, name: 'Session 9', nId: 1, qna: 'QnA 9', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 10, name: 'Session 10', nId: 2, qna: 'QnA 10', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 11, name: 'Session 11', nId: 3, qna: 'QnA 11', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
        { id: 12, name: 'Session 12', nId: 4, qna: 'QnA 12', chatHistory: [{s: ""}, {c: ""}, {s: ""}, {c: ""}], created_at: new Date(), updated_at: new Date() },
    ]);
}
