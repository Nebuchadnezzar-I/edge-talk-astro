import { defineDb, defineTable, column } from 'astro:db';

const Negotiations = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name: column.text(),
        created_at: column.date(),
        updated_at: column.date(),
    }
});

const Sessions = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name: column.text(),
        nId: column.number({ references: () => Negotiations.columns.id }),
        qna: column.text(),
        chatHistory: column.json(),
        created_at: column.date(),
        updated_at: column.date(),
    }
});

export default defineDb({
    tables: {
        Negotiations,
        Sessions
    }
});
