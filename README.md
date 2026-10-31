# Al-Shifa Clinic - Luxury Healthcare Web Application

A production-grade, RTL-first healthcare web application developed with React 19, TypeScript, Vite 7, and Tailwind CSS v4. The platform provides a modern digital experience for patients, featuring appointment booking, doctor profiles, service exploration, and medical consultation inquiries with Arabic-first typography and a medical design system.

---

## Technical Stack

- **Core Framework**: React 19, React DOM 19
- **Type System**: TypeScript 5 (Strict static typing with zero compilation warnings)
- **Build Tooling & Bundler**: Vite 7 with Rollup manual chunk partitioning
- **Styling Architecture**: Tailwind CSS v4 (`@theme` directive) combined with CSS custom properties
- **Routing**: React Router 7 with route-level code splitting (`React.lazy`, `<Suspense>`)
- **Animation Engine**: Framer Motion
- **Iconography**: React Icons (`react-icons/fa6`)
- **Carousels & Sliders**: Swiper 11
- **Interactive Maps**: Leaflet 1.9

---

## Architecture and Engineering Principles

### 1. 3-Tier Component Hierarchy
The codebase strictly adheres to a decoupled 3-tier component architecture:

- **Level 1 - UI Primitives (`src/components/ui/`)**:
  Domain-agnostic, purely presentational atomic components with no business logic.
  - `Button`: Multi-variant, accessible button component (`primary`, `secondary`, `accent`, `outline`, `link`).
  - `Input`: Accessible input wrapper with validation states, labels, and error messaging.
  - `Card`: Configurable card container (`default`, `overlay`, `gray`).
  - `Badge`: Status and category indicator tags.
  - `Modal`: Accessible backdrop overlay modal.

- **Level 2 - Composite & Layout Components (`src/components/common/`)**:
  Cross-page reusable layouts and high-level widgets.
  - `Header`: Modular responsive navigation system partitioned into `desktop/` and `mobile/` sub-packages.
  - `Footer`: Comprehensive footer with emergency hotlines, quick navigation links, accreditation badges, and newsletter subscription.
  - `MainLayout`: Application master shell orchestrating the global header, main content region, and footer.
  - `PageLoader`: Animated loading fallback for asynchronous route transitions.
  - `InteractiveMap`: Dynamic Leaflet map displaying clinic geographic coordinates.

- **Level 3 - Page Feature Modules (`src/pages/[PageName]/components/`)**:
  Components strictly scoped to specific routes, preventing cross-page coupling.

### 2. Page Aggregator Pattern
Every route represents an isolated feature directory containing:
- `components/`: Sub-components exclusive to the feature.
- `[PageName]Page.tsx`: The primary aggregator managing top-level page state and section orchestration.
- `index.ts`: Clean public API barrel export.

### 3. Modular Header Architecture
The `Header` component is split into independent submodules:
```
src/components/common/Header/
├── Header.tsx              # Clean top-level assembler
├── index.ts                # Unified public barrel export
├── desktop/                # Desktop layout (md+ screens)
│   ├── DesktopNav.tsx      # Horizontal navigation link bar
│   ├── DesktopActions.tsx  # Appointment booking CTA button
│   ├── NavLinkItem.tsx     # Atomic navigation list item with active indicators
│   └── index.ts            # Desktop submodule exports
└── mobile/                 # Mobile viewport (< md screens)
    ├── MobileDrawer.tsx    # Off-canvas animated slide drawer shell
    ├── DrawerHeader.tsx    # Logo, clinic title, and close action button
    ├── DrawerNavLinks.tsx  # Scrollable navigation links with interactive hover states
    ├── DrawerFooter.tsx    # 24/7 hotline, WhatsApp chat, and booking CTA
    ├── MobileMenuButton.tsx# Mobile hamburger trigger button
    └── index.ts            # Mobile submodule exports
```

---

## Implemented Pages and Capabilities

### Home Page (`/`)
- Hero section with clear value proposition and primary action buttons.
- Clinical highlights displaying doctor metrics and satisfaction numbers.
- Specialized departments showcase with interactive Swiper slider.
- Value proposition section detailing high medical quality standards.
- Patient testimonials carousel with verified patient ratings.
- Booking call-to-action banner for fast conversions.

### Doctors Page (`/doctors`)
- Comprehensive medical staff catalog with specialty categorization.
- Real-time department filtering (Cardiology, Pediatrics, Dentistry, Orthopedics, Ophthalmology, etc.).
- Doctor detail modal (`DoctorProfileModal`) presenting qualifications, certifications, clinic hours, and direct booking actions.
- Pre-filled appointment routing linking selected doctors directly to the booking form.

### Services Page (`/services`)
- Medical services catalog organized by therapeutic disciplines.
- Diagnostic and treatment package cards highlighting included procedures.
- Medical FAQ accordion (`ServicesFAQ`) answering common inquiries regarding insurance, preparation, and appointments.

### Appointments Page (`/appointments`)
- Multi-step booking workflow with real-time field validation.
- Support for URL query parameters (`?department=...` and `?doctorId=...`) to automatically pre-select choices from other pages.
- Choice of preferred doctor, department, appointment date, time slot, and patient contact information.
- Appointment confirmation summary card.

### Contact Page (`/contact`)
- Immediate emergency hotline indicator (`16789`).
- Contact inquiry form with validation.
- Working hours and branch address details.
- Interactive Leaflet map showing the clinic location in New Cairo, Egypt.

### About Page (`/about`)
- Clinic history, mission, vision, and core medical principles.
- Quality standards and international hygiene accreditations.
- Executive medical leadership overview.

### 404 Not Found Page (`*`)
- Graceful error boundary with return navigation to the home page.

---

## Performance and Optimization

- **Route-Level Code Splitting**: All pages utilize `React.lazy()` with `<Suspense>` and a lightweight fallback `<PageLoader />` to minimize initial bundle size.
- **Optimized Chunks**: Custom manual chunk splitting in `vite.config.ts`:
  - `vendor-react`: Core React and React Router libraries.
  - `vendor-motion`: Framer Motion animation engine.
  - `vendor-leaflet`: Leaflet mapping engine.
  - `vendor-swiper`: Swiper carousel library.
  - `vendor-icons`: React Icons bundle.
- **Dynamic Head Metadata**: Custom hook `usePageTitle` updates `document.title` on every route change.
- **RTL Typography**: Preloaded Google Font `Cairo` with Arabic font optimization.

---

## Project Structure Map

```
med-frontend-react/
├── public/
│   ├── images/             # Clinical photos and banners
│   ├── logo/               # Vector and raster clinic logo assets
│   └── favicon.svg         # Platform favicon
├── src/
│   ├── assets/             # Bundled static graphical assets
│   ├── components/
│   │   ├── common/         # Layout & shared cross-page components
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   │   ├── desktop/
│   │   │   │   └── mobile/
│   │   │   ├── InteractiveMap/
│   │   │   ├── Layout/
│   │   │   ├── PageLoader/
│   │   │   └── SectionTitle/
│   │   └── ui/             # Atomic design UI primitives
│   │       ├── Badge/
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── Input/
│   │       └── Modal/
│   ├── constants/          # Navigation links, clinic configuration, mock datasets
│   ├── hooks/              # Custom React hooks (useBookingForm, usePageTitle, etc.)
│   ├── pages/              # Modular self-contained feature routes
│   │   ├── About/
│   │   ├── Appointments/
│   │   ├── Contact/
│   │   ├── Doctors/
│   │   ├── Home/
│   │   ├── NotFound/
│   │   └── Services/
│   ├── routes/             # AppRoutes configuration with React.lazy
│   ├── services/           # Data services and mock handlers
│   ├── styles/             # Global CSS tokens, theme variables, and resets
│   │   ├── style.css
│   │   └── theme.css
│   ├── types/              # Global TypeScript interfaces and data contracts
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Tailwind v4 entrypoint with @theme tokens
│   └── main.tsx            # Vite DOM entrypoint
├── package.json
├── tsconfig.json           # Unified TypeScript configuration
└── vite.config.ts          # Vite build configuration with chunk partitioning
```

---

## Run and Execution Templates

### Prerequisites
Ensure your local environment meets the following specifications:
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The server will start at: `http://localhost:5173/`

### 3. Static Type Verification
Run TypeScript type-checking without emitting files to verify zero errors:
```bash
npx tsc --noEmit
```

### 4. Production Build
Compile and bundle the project for production deployment:
```bash
npm run build
```
This generates optimized, minified, and tree-shaken static assets in the `dist/` directory.

### 5. Production Build Preview
Preview the production build locally:
```bash
npm run preview
```

### 6. Linting
Execute ESLint to check for code standard violations:
```bash
npm run lint
```

---

## Environment and Localization

- **Direction**: Right-to-Left (`dir="rtl"`)
- **Primary Language**: Arabic (`lang="ar"`)
- **Primary Typography**: Cairo (`font-family: 'Cairo', sans-serif`)
- **Regional Localization**: Cairo / New Cairo, Egypt
- **Hotline Service**: 16789
- **Currency Format**: Egyptian Pound (EGP / ج.م)

---

## License

This project is proprietary and confidential. All rights reserved by Al-Shifa Medical Practice.
