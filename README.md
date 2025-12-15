# Personal Portfolio Website

A clean, modern, and scroll-animated personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations, responsive design, and a professional look.

## Features

- ✨ Smooth scroll animations using IntersectionObserver
- 🎨 Fade-in, slide-up, and parallax effects
- 📱 Fully responsive design for mobile and desktop
- 🎯 Sticky navigation bar with smooth scrolling
- 🚀 No heavy libraries - pure vanilla JavaScript
- 🎭 Clean, beginner-friendly code

## Sections

1. **Hero Section** - Introduction with fade-in animation
2. **Skills Section** - Grid layout showcasing technical skills
3. **Projects Section** - Project cards with hover effects
4. **Services Section** - Services offered with slide-up animations
5. **Contact Section** - Social links with fade-up animation

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # JavaScript for scroll animations
└── README.md       # This file
```

## Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies needed.

## Deployment on Netlify

Netlify makes it incredibly easy to deploy static websites. Here are two methods:

### Method 1: Drag and Drop (Easiest)

1. **Prepare your files**: Make sure all your files (`index.html`, `styles.css`, `script.js`) are in a folder
2. **Go to Netlify**: Visit [netlify.com](https://www.netlify.com) and sign up/login
3. **Drag and Drop**:
   - On the Netlify dashboard, find the "Sites" section
   - Drag your entire portfolio folder onto the deployment area
   - Netlify will automatically deploy your site
4. **Get your URL**: Netlify will provide you with a random URL like `random-name-123.netlify.app`
5. **Customize URL** (optional): Click on "Site settings" → "Change site name" to customize your URL

### Method 2: Git Integration (Recommended for updates)

1. **Create a GitHub repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Upload your portfolio files to the repository

2. **Connect to Netlify**:
   - Log in to Netlify
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your portfolio repository

3. **Deploy settings**:
   - Build command: Leave empty (no build needed)
   - Publish directory: Leave empty or set to `/` (root)
   - Click "Deploy site"

4. **Automatic deployments**:
   - Every time you push changes to GitHub, Netlify will automatically redeploy your site

### Custom Domain (Optional)

1. Go to your site settings in Netlify
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow the instructions to connect your domain

## Customization

### Update Personal Information

1. **Hero Section**: Edit the text in `index.html` around line 30-32
2. **Skills**: Modify the skills grid in the Skills section
3. **Projects**: Update project cards with your actual projects and GitHub links
4. **Contact Links**: Replace placeholder links with your actual:
   - WhatsApp link: `https://wa.me/YOUR_NUMBER`
   - Email: Your email address
   - GitHub: Your GitHub profile URL

### Change Colors

Edit the color values in `styles.css`:
- Primary color: `#6366f1` (appears throughout the site)
- Gradient colors: Lines 47-48 in `styles.css` for hero and contact sections

### Update Profile Image

Replace the placeholder image URL in `index.html` (line 35) with your own image:
- Upload an image to a service like Imgur, or
- Use a relative path if hosting the image locally

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- No external dependencies
- Lightweight and fast loading
- Optimized animations using CSS transforms
- Respects user's motion preferences

## License

Feel free to use this template for your own portfolio!

## Support

If you encounter any issues during deployment or customization, feel free to reach out or check Netlify's documentation.

---

**Happy Coding! 🚀**

