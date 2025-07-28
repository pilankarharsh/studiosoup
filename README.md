# Studio Soup - Interior Design & Construction Studio

A modern, responsive website for Studio Soup, an interior design and construction studio based in Goa. Built with Astro and Sanity CMS.

## 🚀 Features

- **Modern Design**: Clean, elegant design with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **CMS Integration**: Content managed through Sanity CMS
- **Performance**: Fast loading with optimized assets
- **SEO Optimized**: Built with SEO best practices

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Styling**: Custom CSS with CSS Variables
- **Animations**: Swiper.js for carousels
- **Deployment**: Firebase Hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd studiosoup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PUBLIC_SANITY_PROJECT_ID=your-project-id
   PUBLIC_SANITY_DATASET=production
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🏗 Project Structure

```
studiosoup/
├── cms/                 # Sanity CMS configuration
├── lib/                 # Utility functions and queries
├── public/              # Static assets
├── src/
│   ├── assets/          # CSS and styles
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   └── pages/           # Astro pages
└── package.json
```

## 🎨 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

### Component Guidelines

- Create reusable components in `src/components/`
- Use TypeScript interfaces for props
- Follow the existing naming conventions
- Add proper accessibility attributes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Firebase Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Environment Setup

Make sure to set up the following in your Firebase project:
- Custom domain (if needed)
- SSL certificate
- Proper redirects

## 📊 Performance

### Optimization Features

- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic code splitting by Astro
- **Minification**: HTML, CSS, and JS minification
- **Caching**: Proper cache headers for static assets

### Performance Monitoring

- Core Web Vitals monitoring
- Lighthouse audits
- Real User Monitoring (RUM)

## 🔧 CMS Management

### Sanity Studio

Access the CMS at: `https://your-project.sanity.studio/`

### Content Types

- **Media**: Images and videos with tags
- **Projects**: Portfolio items
- **Services**: Service offerings
- **Testimonials**: Client feedback

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check for TypeScript errors with `npm run type-check`
2. **CMS Issues**: Verify Sanity project ID and dataset
3. **Performance**: Run Lighthouse audits for optimization suggestions

### Getting Help

- Check the [Astro documentation](https://docs.astro.build/)
- Review [Sanity documentation](https://www.sanity.io/docs)
- Open an issue for project-specific problems

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Built by [Vynthri](https://vynthri.web.app) for Studio Soup.

---

**Keep building, keep exploring.** 🚀
