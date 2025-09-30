# Chomedey Lave-Auto - Professional Car Wash & Detailing Website

A modern, responsive website for Chomedey Lave-Auto, a professional car wash and detailing business in Chomedey, Laval, Quebec.

## 🌟 Features

### Design & User Experience
- **Modern, Fluid Design**: Clean, professional layout with glassmorphism effects
- **Water/Bubble Theme**: Consistent water, soap bubbles, and shine elements throughout
- **Smooth Animations**: GSAP and CSS animations for buttery-smooth interactions
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Optimized images and code for quick loading

### Pages & Content
1. **Home Page**
   - Hero section with video background
   - Interactive before/after slider
   - Services overview with hover effects
   - Why choose us section
   - Call-to-action banners

2. **Services Page**
   - Interactive service cards
   - Detailed service information
   - Pricing and duration details
   - Process explanations

3. **Gallery Page**
   - Masonry grid layout
   - Before/after transformations
   - Filter by service type
   - Lightbox image viewer

4. **Testimonials Page**
   - Customer reviews with ratings
   - Interactive testimonial slider
   - Before/after images with reviews
   - Statistics and trust indicators

5. **About Page**
   - Company story and timeline
   - Team member profiles
   - Company values and mission
   - Trust badges and certifications

6. **Contact Page**
   - Contact form with validation
   - Interactive map placeholder
   - Contact information cards
   - Quick action buttons

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, consistent icons
- **Responsive Images**: Optimized with Next.js Image component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lave-auto-chomedey
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
lave-auto-chomedey/
├── public/
│   ├── photos-before-and-after/    # Gallery images
│   ├── logo/                       # Company logo
│   └── 3d-models/                  # 3D assets
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── services/
│   │   ├── testimonials/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/                 # React components
│   │   ├── AboutPage.tsx
│   │   ├── BeforeAfterHighlight.tsx
│   │   ├── ContactPage.tsx
│   │   ├── CTABanner.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── TestimonialsPage.tsx
│   │   └── WhyChooseUs.tsx
│   └── lib/
│       └── utils.ts               # Utility functions
├── tailwind.config.ts             # Tailwind configuration
├── next.config.ts                 # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:
- **Primary**: Blue tones for main elements
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Green tones for highlights and CTAs

### Fonts
- **Primary**: Poppins (body text)
- **Display**: Montserrat (headings)

### Animations
Custom animations are defined in both `tailwind.config.ts` and `globals.css`:
- Bubble animations
- Shimmer effects
- Float animations
- Ripple effects

## 📱 Responsive Design

The website is built mobile-first and includes:
- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized images for different screen sizes
- Touch-friendly interactive elements

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📞 Contact Information

**Chomedey Lave-Auto**
- Address: 123 Chomedey Blvd, Chomedey, Laval, QC H7P 1A1
- Phone: (450) 123-4567
- Email: info@laveautochomedey.com
- Hours: Mon-Fri 8:00 AM - 6:00 PM, Sat-Sun 9:00 AM - 5:00 PM

## 🛠️ Future Enhancements

- Online booking system integration
- Real-time Google Maps integration
- Customer portal for service history
- Blog section for car care tips
- Multi-language support (French/English)
- Payment processing integration

## 📄 License

This project is proprietary software developed for Chomedey Lave-Auto.

---

Built with ❤️ for Chomedey Lave-Auto