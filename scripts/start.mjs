import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const dbPath = path.resolve('./data/content.db');
const distPath = path.resolve('./dist');

// 1. Build if dist is missing
if (!fs.existsSync(distPath)) {
    console.log('Build directory missing. Building project for first use...');
    const buildResult = spawnSync('npm', ['run', 'build'], { 
        env: { ...process.env, ASTRO_DATABASE_FILE: dbPath },
        stdio: 'inherit', 
        shell: true 
    });
    if (buildResult.status !== 0) {
        console.error('Build failed. See errors above.');
        process.exit(1);
    }
}

// 2. Initialize database if missing
// Note: The build above might have created a mock DB in .astro/ or somewhere.
// We explicitly initialize our persistent file if it still doesn't exist.
if (!fs.existsSync(dbPath)) {
    console.log('Database missing. Initializing persistent storage...');
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    
    const initResult = spawnSync('npx', ['astro', 'build'], {
        env: { ...process.env, ASTRO_DATABASE_FILE: dbPath },
        stdio: 'inherit',
        shell: true
    });
    
    if (initResult.status !== 0) {
        console.error('Database initialization failed.');
        process.exit(1);
    }
    console.log('Database initialized at:', dbPath);
}

// 3. Start the server
console.log('\n--- Starting Dashboard ---');
console.log('Data storage:', dbPath);
console.log('URL: http://localhost:4321');
console.log('Press Ctrl+C to stop.\n');

spawnSync('node', ['./dist/server/entry.mjs'], {
    env: { ...process.env, ASTRO_DATABASE_FILE: dbPath },
    stdio: 'inherit',
    shell: true
});
