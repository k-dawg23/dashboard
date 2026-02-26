import { defineDb, defineTable, column } from 'astro:db';

const Panel = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true })
  }
});

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    panelId: column.number({ references: () => Panel.columns.id }),
    name: column.text({ unique: true })
  }
});

const Link = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    categoryId: column.number({ references: () => Category.columns.id }),
    name: column.text(),
    url: column.text()
  }
});

export default defineDb({
  tables: { Panel, Category, Link }
});
