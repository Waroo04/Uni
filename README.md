# Uni

A modern web application built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, using shadcn/ui components.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (New York style)
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable UI components (shadcn/ui + custom)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── public/        # Static assets
└── styles/        # Global styles
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
