# Customization Guide

This guide will help you customize your personal portfolio website with your own information, projects, and styling preferences.

## 🎯 Quick Customization Checklist

### 1. Personal Information

**File: `src/components/Home.tsx`**

- [ ] Replace "Your Name" with your actual name (line 16)
- [ ] Update your title/role (line 19)
- [ ] Modify the introduction text (lines 23-26)
- [ ] Change the profile initials "YN" to your initials (line 11)

**File: `src/components/About.tsx`**

- [ ] Update the about me paragraphs (lines 23-35)
- [ ] Modify the skills array with your technologies (lines 6-9)
- [ ] Change profile initials "YN" to your initials (line 18)

### 2. Contact Information

**File: `src/components/Contact.tsx`**

- [ ] Replace "your.email@example.com" with your email address (lines 21, 144, 151)
- [ ] Update social media URLs:
  - LinkedIn: line 28
  - GitHub: line 37
  - Twitter: line 46
- [ ] Update your location (line 156)

### 3. Projects

**File: `src/components/Projects.tsx`**

- [ ] Replace the sample projects with your own (lines 13-66)
- [ ] For each project, update:
  - Title and description
  - Technologies used
  - GitHub URL
  - Live demo URL (optional)

### 4. Repository Configuration

**File: `package.json`**

- [ ] Change "yourusername" in homepage URL (line 12)

**File: `vite.config.ts`**

- [ ] Update the base path to match your repository name (line 7)

**File: `deploy.sh`**

- [ ] Update repository URLs throughout the file

## 🎨 Styling Customization

### Colors

**File: `tailwind.config.js`**

The primary color scheme is defined in the `primary` color object (lines 9-19). You can:

1. **Use a color palette generator** like [Tailwind Color Palette Generator](https://www.tailwindshades.com/)
2. **Replace the entire primary color object** with your preferred colors
3. **Add additional color schemes** for accent colors

Example:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Very light
    100: '#e0f2fe',  // Light
    200: '#bae6fd',  // Lighter
    300: '#7dd3fc',  // Light medium
    400: '#38bdf8',  // Medium
    500: '#0ea5e9',  // Main color
    600: '#0284c7',  // Dark medium
    700: '#0369a1',  // Dark
    800: '#075985',  // Darker
    900: '#0c4a6e',  // Very dark
  },
  accent: {
    // Add accent colors if needed
  }
}
```

### Typography

**File: `tailwind.config.js`**

Update the font family (line 21):

```javascript
fontFamily: {
  sans: ['Your Font', 'Inter', 'system-ui', 'sans-serif'],
},
```

### Custom Styles

**File: `src/index.css`**

Add custom component styles in the `@layer components` section (lines 11-19):

```css
@layer components {
  .your-custom-class {
    @apply your-tailwind-classes;
  }
}
```

## 📸 Adding Images

### Profile Images

1. **Add your images** to the `public/` directory
2. **Update the components** to use real images instead of initials:

**In `src/components/Home.tsx`:**

```jsx
<img
  src="/profile-small.jpg"
  alt="Your Name"
  className="w-32 h-32 rounded-full object-cover shadow-lg"
/>
```

**In `src/components/About.tsx`:**

```jsx
<img
  src="/profile-large.jpg"
  alt="Your Name"
  className="w-full max-w-md mx-auto aspect-square rounded-2xl object-cover shadow-2xl"
/>
```

### Project Images

1. **Add project screenshots** to `public/projects/`
2. **Update the project objects** in `src/components/Projects.tsx`:

```javascript
{
  id: 1,
  title: 'Your Project',
  description: 'Project description...',
  image: '/projects/project1.jpg', // Add this line
  // ... other properties
}
```

3. **Update the JSX** to display images:

```jsx
<img
  src={project.image || "/placeholder.jpg"}
  alt={project.title}
  className="h-48 w-full object-cover"
/>
```

## 🔧 Advanced Customization

### Adding New Sections

1. **Create a new component** in `src/components/`
2. **Import it** in `src/App.tsx`
3. **Add it** to the main component
4. **Update the navigation** in `src/components/Header.tsx`

### Form Integration

Replace the basic mailto form with a service like:

- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)

### Analytics

Add Google Analytics or other tracking:

1. **Install the package:**

   ```bash
   npm install gtag
   ```

2. **Add to `src/main.tsx`:**
   ```javascript
   import { gtag } from "gtag";
   gtag("config", "GA_MEASUREMENT_ID");
   ```

## 📱 Responsive Design

The website is already responsive, but you can customize breakpoints in `tailwind.config.js`:

```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
```

## 🚀 Testing Your Changes

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Test on different devices** using browser dev tools

3. **Build and test:**
   ```bash
   npm run build
   npm run preview
   ```

## 📝 Content Tips

### Writing Effective Copy

1. **Keep it concise** - Attention spans are short
2. **Use action words** - "Built", "Created", "Designed"
3. **Include metrics** - "Increased performance by 40%"
4. **Tell a story** - Show your journey and growth

### Project Descriptions

Structure your project descriptions:

1. **What it does** (1 sentence)
2. **Technologies used** (tags)
3. **Key features** (2-3 bullet points)
4. **Impact/results** (if applicable)

Example:

```
A task management app that helps teams collaborate efficiently with real-time updates and drag-and-drop functionality. Built with React and Firebase, featuring user authentication, team workspaces, and automated notifications.
```

## 🎯 SEO Optimization

**File: `index.html`**

- [ ] Update the `<title>` tag
- [ ] Add meta description
- [ ] Add Open Graph tags for social sharing

```html
<meta
  name="description"
  content="John Doe - Full Stack Developer specializing in React and Node.js"
/>
<meta property="og:title" content="John Doe - Portfolio" />
<meta
  property="og:description"
  content="Full Stack Developer specializing in React and Node.js"
/>
<meta property="og:image" content="/og-image.jpg" />
```

---

## Need Help?

If you need help with customization:

1. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
2. Refer to the [React documentation](https://react.dev)
3. Look at the component code for examples
4. Test changes in small increments

Happy customizing! 🎨
