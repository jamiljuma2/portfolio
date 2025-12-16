# Jamil Juma - Developer Portfolio

A clean, professional, one-page developer portfolio optimized for remote jobs and freelancing.

## Features

- **Modern & Minimal Design**: Clean typography with strong visual hierarchy
- **Fully Responsive**: Mobile-first design that works on all devices
- **Light/Dark Mode**: Automatically adapts to user's system preferences
- **Fast Performance**: Optimized for quick load times
- **Accessible**: ARIA labels and keyboard navigation support
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- React 18
- Vite
- CSS3 (Custom Properties for theming)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder, ready for deployment.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Your portfolio will be live!

### Manual Deployment

After running `npm run build`, upload the contents of the `dist` folder to your hosting provider.

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx` and replace the placeholder URLs and email:

- Email: Update the `href` in the email link
- GitHub: Update the GitHub profile URL
- LinkedIn: Update the LinkedIn profile URL

### Update Project Links

Edit `src/components/Projects.jsx` and update the `demoUrl` and `githubUrl` for each project.

### Modify Colors

The color scheme uses CSS custom properties in `src/index.css`. Modify the `:root` variables to change the color palette.

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT

