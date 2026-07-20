# Trendy Ladies Designer

Trendy Ladies Designer is a premium, bespoke tailoring and couture web application. It serves as a digital atelier, showcasing high-end craftsmanship, sample galleries, customer testimonials, and an elegant booking/consultation flow. 

Owned and operated by **Latha**, a master artisan with over 10 years of experience, the studio specializes in:
- Blouses & Princess Blouses
- Bridal Blouses
- Salwar & Lehenga Sets
- Aari Works
- Full Frocks
- School Uniforms

## High-Level Design & Architecture

### 1. Technology Stack
- **Framework**: [React 19](https://react.dev/) powered by [Vite](https://vitejs.dev/) for lightning-fast HMR and building.
- **Routing**: [TanStack Router](https://tanstack.com/router/latest) for type-safe, file-based routing (`src/routes`).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling alongside bespoke CSS animations.
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives for accessible, unstyled UI components (Dialogs, Accordions, Navigation).
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, scalable iconography.

### 2. User Interface (UI) & User Experience (UX)
The application employs a "dark luxury" design system. It uses:
- A rich `obsidian` background with `gold` accents and `ivory` typography.
- Micro-animations, slow fade-ins, and hover states that mimic a high-end luxury brand experience.
- Interactive **Masonry Galleries** equipped with modal Dialogs that provide detailed views of the sample creations.

### 3. Application Structure
- `src/assets/`: Contains all static assets (images, bespoke patterns, and samples).
- `src/components/site/`: Houses the main layout components (`Nav.tsx`, `Sections.tsx` which contains About, Experience, Samples, Reviews, and Contact).
- `src/components/ui/`: Contains reusable generic UI components built upon Radix UI primitives.
- `src/routes/`: Contains the file-based route definitions (`__root.tsx`, `index.tsx`, `gallery.tsx`).
- `src/lib/`: Contains utility functions (like `cn` for Tailwind class merging).

## Getting Started

### Prerequisites
- Node.js or Bun installed on your machine.

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

### Development
Start the local development server:
```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173` (or your configured Vite port).

## Contact & Location
- **Address**: No. 11 Sabaapathi Street K.K.Pudur Sai Baba Colony, Coimbatore, Tamil Nadu 641038.
- **Phone / WhatsApp**: +91 99414 79877
- **Email**: atelier@trendyladies.in
