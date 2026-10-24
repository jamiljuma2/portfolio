# Barasa Juma Jamil — Portfolio

A responsive React + Vite portfolio. Personal content is centralized under `src/data/` so the site can be updated without editing the layout.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy that directory to Vercel, Netlify, or another static host. This site uses anchor navigation and does not need a client-side route fallback.

## Personalize

- Edit `src/data/profile.js` for the name, introduction, portrait path, contact email, WhatsApp number, social profile URLs, and availability message. The supplied portrait is saved at `public/images/barasa-juma-jamil.jpg` and is already shown in the hero.
- Add only skills you want to represent in `src/data/skills.js`. Each entry is `{ category: 'Frontend', items: ['...'] }`.
- Add real work to `src/data/projects.js`. A project supports `name`, `description`, `problem`, `audience`, `features`, `technologies`, `role`, `image`, `status`, `repo`, `demo`, and `caseStudy`. Project image paths can point to files in `public/images/`.
- Add experience or education entries in their respective data files. Their sections appear only when entries exist.
- Replace `public/favicon.svg` and add an Open Graph image when you have approved assets. The domain and canonical URL are intentionally unset until supplied.

## Contact form

The form validates all fields in the browser. When an email is configured in `profile.js`, submission opens a prefilled email draft for the visitor to review and send. No backend is configured and the website does not claim to send messages itself. For direct submissions, connect a secured server-side endpoint or trusted form provider; keep private credentials off the client.

## SEO and hosting

Page title, description, and Open Graph text are in `index.html`; `public/robots.txt` is included. Add a canonical URL, sitemap, and real sharing image once a public domain is known. No environment variables are currently required.
