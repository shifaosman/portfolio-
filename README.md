# Shifa Osman — Portfolio

Personal portfolio site for **Shifa Osman Musa**, a full-stack / MERN-focused developer. The app is a single-page portfolio with hero, work history, projects, services, education, testimonials, blog highlights, and a contact section with PDF CV support.

## Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI, Framer Motion, Wouter
- **Backend:** Express 5 (API for contact form)
- **Tooling:** Drizzle Kit (schema / migrations for PostgreSQL when used with a database)

## Requirements

- [Node.js](https://nodejs.org/) 20+ recommended
- npm (ships with Node)

## Setup

```bash
npm install
```

## Development

Starts the Express server with Vite middleware (hot reload for the client):

```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) (or the host/port shown in the terminal). Override the port with:

```bash
PORT=3000 npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Development server                               |
| `npm run build`| Production bundle + server build                 |
| `npm start`    | Run production server from `dist/`               |
| `npm run check`| TypeScript check (`tsc`)                         |
| `npm run db:push` | Apply Drizzle schema to PostgreSQL (needs `DATABASE_URL`) |

## Environment

- **`PORT`** — HTTP port (default `5000`).
- **`DATABASE_URL`** — Only required for `npm run db:push` / Drizzle migrations against PostgreSQL. Local development uses in-memory storage for contact messages unless you wire the app to Postgres.

## License

MIT
