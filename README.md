# Antigravity Dashboard

A clean, minimal "New Tab" personal link dashboard built with the **AHA Stack** (Astro, HTMX, Alpine.js) and an embedded SQLite database (`@astrojs/db`).

## Features

- **Blazing Fast**: Uses Astro for Server-Side Rendering (SSR) and HTMX for instantaneous client-side interactions.
- **Minimalist Aesthetic**: Premium dark-mode UI with glassmorphism effects and modern typography.
- **Organized Links**: Group your favorite links into custom categories.
- **Inline Editing**: Add, edit, or delete links and categories on the fly without ever reloading the page.
- **Embedded Database**: Everything is stored locally in an SQLite database, making it 100% private and portable.

---

## Getting Started

Follow these steps to download, install, and run the dashboard on your own computer.

### Prerequisites

You will need the following installed on your system:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (comes bundled with Node.js)
- Git (optional, for cloning)

### Installation

1. **Clone or Download the Repository**
   If you have Git installed, clone the repository:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd Antigravity
   ```
   *Alternatively, download the ZIP from GitHub, extract it, and open a terminal in the extracted folder.*

2. **Install Dependencies**
   Run the following command to download all required packages:
   ```bash
   npm install
   ```

### Running the App Locally

Start the development server:

```bash
npm run dev
```

Astro will automatically initialize a local SQLite database for you. 

Once the server says it is ready, open your web browser and navigate to:
**[http://localhost:4321](http://localhost:4321)**

### Building for Production (Optional)

If you'd like to build the project to run it as a standalone Node server without the development overhead:

1. Build the project:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   node ./dist/server/entry.mjs
   ```

---

## Tech Stack Details

- **[Astro](https://astro.build/)**: The core framework handling routing, dynamic SSR, and building the API endpoints.
- **[HTMX](https://htmx.org/)**: Powers the dynamic AJAX requests to seamlessly morph the DOM when you add, edit, or delete items.
- **[Alpine.js](https://alpinejs.dev/)**: Handles lightweight client-side state for the modal dialogues.
- **[Astro DB](https://docs.astro.build/en/guides/astro-db/)**: A fully typed ORM wrapping a local SQLite (libSQL) database.
- **CSS**: Pure vanilla CSS—no heavy styling frameworks needed.

## Database Management

The database schema is defined in `db/config.ts`.
Initial sample data can be found and modified in `db/seed.ts`. When you run `npm run dev` for the first time, this seed data is used to populate your initial dashboard.

To wipe your local database and start fresh, simply delete the `.astro/` folder and restart the dev server.

## License

MIT License. Free to use and modify for your own personal dashboard.
