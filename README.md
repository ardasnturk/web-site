# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling between sections with active state tracking
- **Mobile-Friendly**: Hamburger menu for mobile devices
- **Contact Form**: Integrated contact form with email functionality
- **Project Showcase**: Beautiful project cards with technology tags
- **Social Media Integration**: Links to all your social profiles

## Tech Stack

- **React 19** - Latest version with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **GitHub Pages** - Free hosting for static sites

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/web-site.git
   cd web-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Home.tsx** - Update name, title, and introduction
2. **src/components/About.tsx** - Update about text, skills, and profile information
3. **src/components/Projects.tsx** - Add your projects with descriptions and links
4. **src/components/Contact.tsx** - Update email and social media links

### Styling

The project uses Tailwind CSS with a custom color scheme. You can customize:

- **Colors**: Update the primary color scheme in `tailwind.config.js`
- **Typography**: Modify font families and sizes
- **Spacing**: Adjust padding and margins
- **Components**: Add custom component styles in `src/index.css`

### Profile Images

Replace the placeholder profile images:

1. Add your profile image to the `public/` directory
2. Update image references in the components
3. Recommended sizes: 400x400px for About section, 200x200px for Hero section

## Deployment

### GitHub Pages (Recommended)

1. **Update Configuration**:

   - Change `yourusername` in `package.json` homepage URL
   - Update repository name in `vite.config.ts` base path
   - Ensure the base path matches your repository name

2. **Deploy**:

   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### Automatic Deployment with GitHub Actions

The project includes a GitHub Actions workflow for automatic deployment:

1. **Setup**:

   - The workflow file is in `.github/workflows/deploy.yml`
   - It automatically deploys when you push to the main branch

2. **Configure**:
   - Go to repository Settings > Pages
   - Set Source to "GitHub Actions"

### Manual Deployment Steps

If you prefer manual deployment:

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:

   ```bash
   npm run deploy
   ```

3. **Access your site**:
   - Your site will be available at: `https://yourusername.github.io/web-site`

## Environment Variables

For additional functionality, you can add environment variables:

```bash
# .env.local
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
web-site/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size with tree shaking

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern portfolio websites
- Built with React and modern web technologies
- Deployed on GitHub Pages for free hosting

---

**Note**: Remember to update all placeholder content with your actual information before deploying!
