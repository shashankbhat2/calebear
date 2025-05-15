# Clevercal

Everything starts with a date.

**Clevercal** is a lightweight, self-hostable scheduling & booking platform designed for coaches, therapists, teachers, freelancers and other solopreneurs.
Spin up elegant booking pages, sync events to your calendar, collect payments and keep client notes—all from one open-source monorepo.

---

## ✨ Key Features

| Feature                 | What it does                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| **Beautiful booking pages** | Auto-generated pages (built with Astro) that match your brand—share them as `yourname.calebear.com` or map a custom domain. |
| **Calendar & availability** | Two-way Google Calendar sync, flexible working hours, buffer times and overrides.                         |
| **Integrated payments**   | Stripe checkout for paid sessions or bundles (optional; API-first so you can swap providers).            |
| **CRM-lite dashboard**    | Manage leads, track session history, add notes and send reminders from a React dashboard.                  |
| **Extensible API**        | NestJS backend with REST & GraphQL endpoints, fully typed with Zod schemas.                              |
| **Deploy anywhere**       | Works out-of-the-box on Railway, Fly.io, Render or your own Docker/Kubernetes cluster.                   |

---

## 🛠 Tech Stack

| Layer             | Tech                                                       |
| ----------------- | ---------------------------------------------------------- |
| **Backend**       | NestJS · PostgreSQL · Prisma · Redis (queues)              |
| **Dashboard**     | React + Vite · Zustand · React Query · Shadcn UI           |
| **Booking Pages** | Astro (SPA-friendly islands) · Tailwind CSS                |
| **Monorepo**      | pnpm workspaces · `pnpm-workspace.yaml` · `concurrently` (no Turborepo needed—for now) |

---

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Install dependencies:
    ```bash
    pnpm install
    ```

## Usage

Provide instructions on how to use your project. For example, how to run the application:

```bash
pnpm start
```

## Workspace

This is a monorepo managed with pnpm workspaces. The applications are located in the `apps/` directory.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE.md](LICENSE.md) file for details. 