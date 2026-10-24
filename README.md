# Sahyog Vikas Foundation

<<<<<<< HEAD
A responsive Next.js website for Sahyog Vikas Foundation, with public pages for the foundation’s story, program areas, contact enquiries and donation pledges.

## Design

The visual system uses the foundation’s Burgundy × Blush × Cream palette: primary burgundy `#681B38`, oxblood `#3E1023`, warm cream `#FBF7F1`, soft blush `#E7C8CD`, dusty rose `#D98FA0`, warm beige `#F2E6DF` and charcoal `#282426`. These tokens live at the top of `app/globals.css`.

## Run locally

Requirements: Node.js 20.9 or later and npm.

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` (the example uses a local SQLite database).
3. Create/update the database: `npm run db:push`
4. Start the development server: `npm run dev`

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

- `npm run build` — generate the Prisma client and build the production app.
- `npm run start` — run the production app after building.
- `npm run lint` — lint the project.
- `npm run db:studio` — inspect local submissions with Prisma Studio.

## Backend

`POST /api/contact` validates and saves contact enquiries. `POST /api/donations` validates and saves donation pledges. Both use Zod for server-side input validation and Prisma for database access. The local SQLite database is intended for development; select and configure a production database with durable storage before deploying.

The donation form records an expression of intent only. It does **not** collect card details or take payment. Configure a payment provider and implement its server-side order creation, signature verification, webhook handling and donor receipts before presenting online payments as available. Do not store card details in this application.

The privacy and terms pages are starter notices and must be reviewed and completed by the foundation before launch. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin so generated sitemap links use the real domain.

## Before launch

- Replace the sample program descriptions and image selections with approved foundation information and photographs.
- Add the foundation’s verified registration details, address, contact email, privacy policy and donation/tax information.
- Confirm that all copy, images and impact statements are accurate and authorized.
- Use a production database and configure backups, access controls, monitoring and abuse protection for public API endpoints.
- Configure a payment provider only after the foundation has the required account and credentials.

## Environment

See `.env.example`. `DATABASE_URL` is required by Prisma. For local development, `file:./dev.db` creates a SQLite database under `prisma/`. `NEXT_PUBLIC_SITE_URL` sets the canonical origin used for sitemap generation.
=======
Sahyog Vikas Foundation is a community-focused organization dedicated to empowering people through education, health awareness, livelihoods, and sustainable development.

## Mission
To create lasting opportunities for underserved communities by supporting access to education, healthcare, and meaningful growth.

## Focus Areas
- Education and learning support
- Healthcare awareness and outreach
- Skills and livelihood development
- Community-centered sustainability initiatives

## Website
This repository contains a simple landing page for the foundation website.

## Contact
Email: hello@sahyogvikasfoundation.org
>>>>>>> 07daea126d5d3a8df00cdaceaba7f4a0980334cd
