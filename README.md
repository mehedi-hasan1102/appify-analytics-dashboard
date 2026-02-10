# Appify Analytics Dashboard

A modern analytics dashboard built with Next.js App Router. It includes KPI cards, interactive charts, and filterable views backed by mock API routes for rapid UI development.

## Highlights

- Dashboard shell with sidebar and header layout
- KPI summary cards and chart cards
- Client-side filters and state management
- Mock API routes for stats, revenue, users, orders, and traffic
- TypeScript-first codebase with reusable UI components

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Project Structure

```
app/
  api/
    orders/route.ts
    revenue/route.ts
    stats/route.ts
    traffic/route.ts
    users/route.ts
  dashboard/page.tsx
  layout.tsx
  page.tsx
src/
  components/
    dashboard/
    layout/
  lib/
    mockData.ts
  store/
    dashboardStore.ts
  types/
    dashboard.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Run the production build
- `npm run lint` - Run ESLint

## Data and API

This project uses mock data defined in `src/lib/mockData.ts`. The App Router API routes under `app/api/*` return these mock datasets to support chart rendering and KPI calculations during development.

## Customization

- Update dashboard UI in `src/components/dashboard`
- Adjust layout in `src/components/layout`
- Modify data shape in `src/types/dashboard.ts`
- Swap mock data with real APIs by replacing handlers in `app/api/*/route.ts`

## Roadmap

- Real authentication and role-based access
- Live analytics API integration
- Export and share options for KPI snapshots
- Notification rules and alerting
- Expanded test coverage for charts and filters

## License

Add a license file if you plan to open-source this project.
