import { db, Category, Link } from 'astro:db';

export default async function seed() {
	await db.insert(Category).values([
		{ id: 1, name: 'Work' },
		{ id: 2, name: 'Personal' }
	]);

	await db.insert(Link).values([
		{ id: 1, categoryId: 1, name: 'GitHub', url: 'https://github.com' },
		{ id: 2, categoryId: 1, name: 'Stack Overflow', url: 'https://stackoverflow.com' },
		{ id: 3, categoryId: 2, name: 'YouTube', url: 'https://youtube.com' }
	]);
}
