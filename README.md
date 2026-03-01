# Guthrie Engineering Website

A modern, full-stack website built with Next.js 16, TypeScript, Tailwind CSS, and PostgreSQL.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Database**: PostgreSQL + Prisma ORM
- **Validation**: Zod
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📁 Project Structure

```
guthrie-website/
├── app/                      # Next.js app router pages
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   └── sections/        # Page sections
│   ├── constants/           # Site content and configuration
│   ├── lib/                 # Utilities and database client
│   ├── types/               # TypeScript type definitions
│   └── styles/              # Global styles
├── prisma/                  # Database schema
└── public/                  # Static assets

```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ (required for Next.js 16)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   cd guthrie-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your database credentials.

4. **Set up database**

   ```bash
   npm run db:push
   npm run db:generate
   ```

5. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 🎨 Features

### Fully Mobile Responsive ✨ NEW!

- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interface with proper tap targets
- Responsive typography and spacing
- Mobile-first design approach

### Modern Animations

- Framer Motion for smooth page transitions
- Scroll-triggered animations
- Hover effects on cards and buttons
- Custom Tailwind animations

### Code Quality

- **Pre-commit hooks** - Automatically lint and type-check before commits
- **Strict TypeScript** - Catch errors early
- **ESLint + Prettier** - Consistent code style
- **Path aliases** - Clean imports with `@/` prefix

### Performance

- Next.js 16 App Router for optimal performance
- Server Components by default
- Optimized images and fonts
- Code splitting

### Database

- PostgreSQL with Prisma ORM
- Type-safe database queries
- Contact form submissions stored in database

## 🎯 Development Workflow

1. **Make changes** to your code
2. **Stage files** with `git add`
3. **Commit** - Pre-commit hooks will:
   - Run ESLint and auto-fix issues
   - Format code with Prettier
   - Run TypeScript type checking
   - Prevent commit if errors exist

## 🌈 Color Palette

- **Primary**: `#00b2e3` (Blue)
- **Primary Light**: `#42d6ff`
- **Secondary**: `#232323` (Dark Gray)
- **Secondary Light**: `#4c4c4c`
- **Accent Gray**: `#f8f8f8`

## 📝 Content Management

All content is centralized in `src/constants/site.ts` for easy maintenance:

- Site configuration
- Navigation links
- Services
- Projects
- Company values

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📄 License

© 2024 Guthrie Engineering. All Rights Reserved.
