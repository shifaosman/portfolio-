# Shifa Osman Musa - Portfolio Website

## Overview

A personal portfolio website for Shifa Osman Musa, a Full-Stack Web Developer specializing in the MERN stack. This is a single-page application featuring sections for services, pricing, testimonials, work history, education, portfolio projects, blog posts, and a contact form. The design uses a distinctive peach/orange color theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, bundled using Vite
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with a custom peach/orange theme defined via CSS variables
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Structure**: Single-page portfolio with multiple sections (Hero, Services, Pricing, Testimonials, Work History, Education, Portfolio, Blog, Contact)

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **API Design**: RESTful endpoints under `/api` prefix
- **Validation**: Zod schemas for request validation
- **Storage**: In-memory storage class with interface abstraction (IStorage) allowing easy swap to database
- **Development**: Vite dev server integration with HMR support

### Build System
- **Development**: `tsx` for TypeScript execution, Vite for frontend hot reloading
- **Production**: Custom build script using esbuild for server bundling, Vite for client build
- **Output**: Server bundle to `dist/index.cjs`, client assets to `dist/public`

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Current Tables**: Users table with id, username, password
- **Migrations**: Drizzle Kit for schema management (`db:push` command)
- **Session Storage**: connect-pg-simple available for session persistence

### Key Design Decisions

1. **Monorepo Structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in one repository with path aliases (`@/`, `@shared/`)

2. **Shared Types**: TypeScript interfaces in `shared/types.ts` define data structures for portfolio content (services, testimonials, jobs, etc.)

3. **Component Organization**: Portfolio-specific components in `client/src/components/portfolio/`, reusable UI components in `client/src/components/ui/`

4. **Theme System**: CSS custom properties for colors enabling easy theme customization, with both light and dark mode support

5. **Storage Abstraction**: IStorage interface allows switching from MemStorage to database-backed storage without changing business logic

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit with Zod integration for type-safe queries

### UI Framework
- **Radix UI**: Full suite of accessible, unstyled components (accordion, dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Key Libraries
- **TanStack React Query**: Async state management and caching
- **react-hook-form**: Form handling with Zod resolver
- **Lucide React**: Icon library
- **Wouter**: Minimal routing library
- **date-fns**: Date manipulation
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Fast JavaScript bundler for production server build
- **Drizzle Kit**: Database migration and schema management