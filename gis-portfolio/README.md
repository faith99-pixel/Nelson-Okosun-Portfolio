# Nelson Okosun - GIS Consultant Portfolio

A modern, responsive portfolio website for Nelson Okosun, showcasing his expertise as a GIS Consultant and Project Manager.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Professional Sections**:
  - Hero/Profile section with animated statistics
  - Services showcase highlighting GIS expertise
  - Comprehensive about section
  - Detailed experience timeline
  - Education and certifications
  - Contact form with social links

## Technologies Used

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **SCSS** - Enhanced CSS with variables and nesting

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Adding Images
1. Add your images to the `public/images/` directory
2. Update the `public/images.ts` file with the new image paths
3. Replace the placeholder profile image with Nelson's actual photo

### Updating Content
- **Personal Information**: Update in `app/component/Homepage/Profile.tsx`
- **Services**: Modify in `app/component/Homepage/Services.tsx`
- **Experience**: Update in `app/component/Homepage/Experience.tsx`
- **Education**: Modify in `app/component/Homepage/Education.tsx`
- **Contact Information**: Update in `app/component/Homepage/Contact.tsx`

### Color Theme
The portfolio uses a green color scheme suitable for GIS/environmental work. To change colors:
- Update the color classes in Tailwind (green-500, green-600, etc.)
- Modify the gradient backgrounds in component files

## Deployment

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

## Project Structure

```
gis-portfolio/
├── app/
│   ├── component/
│   │   ├── Homepage/
│   │   │   ├── Profile.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── HomePage.tsx
│   │   ├── shared/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── logo/
│   │   │   └── logoImg.tsx
│   │   ├── styles/
│   │   │   └── styles.ts
│   │   └── Layout.tsx
│   ├── globals.scss
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   └── images.ts
└── [config files]
```

## Contact

For questions about this portfolio template or GIS consulting services, contact Nelson Okosun at nelson.okosun@example.com

## License

This project is created for Nelson Okosun's professional portfolio.