<div id="top" align="center">

# UNI

*A modern full-stack web application built for academic use.*

![last-commit](https://img.shields.io/github/last-commit/Waroo04/Uni?style=flat&logo=git&logoColor=white&color=0080ff)
![top-language](https://img.shields.io/github/languages/top/Waroo04/Uni?style=flat&color=0080ff)
![language-count](https://img.shields.io/github/languages/count/Waroo04/Uni?style=flat&color=0080ff)

*Built with the tools and technologies:*

![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000.svg?style=flat&logo=shadcnui&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220.svg?style=flat&logo=pnpm&logoColor=white)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## Overview

Uni is a modern web application built with Next.js 16 and the App Router, leveraging React 19, TypeScript, and Tailwind CSS v4. It uses the shadcn/ui component library (New York style) for a polished, accessible UI, and includes form handling, data visualization, and theming support out of the box.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (New York style) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Icons | Lucide React |
| Package Manager | pnpm |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

Install pnpm if you don't have it:

```sh
npm install -g pnpm
```

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/Waroo04/Uni.git
cd Uni
```

2. **Install dependencies:**

```sh
pnpm install
```

### Usage

Start the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable UI components (shadcn/ui + custom)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── public/        # Static assets
├── styles/        # Global styles
├── next.config.mjs
├── tailwind.config
└── tsconfig.json
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

---

<div align="left"><a href="#top">⬆ Return to top</a></div>
