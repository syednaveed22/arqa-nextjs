# Nordic - Modern Portfolio & Business Website

A beautiful, modern portfolio and business website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Fully static, optimized for Vercel deployment.

## 🚀 Features

- ⚡ **Blazing Fast** - Static site generation for optimal performance
- 🎨 **Modern Design** - Clean, minimalist Nordic aesthetic
- 📱 **Fully Responsive** - Works perfectly on all devices
- ♿ **Accessible** - Built with accessibility in mind
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **Type Safe** - Written in TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Zero Backend** - No server required, fully static

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Google Fonts (Space Grotesk, DM Sans)
- **Deployment:** Vercel

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket

2. Import your repository on [Vercel](https://vercel.com)

3. Vercel will automatically detect Next.js and deploy

**Or use Vercel CLI:**

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory that can be deployed to any static hosting service.

## 📁 Project Structure

```
nordic-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Site footer
│   │   └── sections/
│   │       ├── Hero.tsx        # Hero section
│   │       ├── About.tsx       # About section
│   │       ├── Services.tsx    # Services section
│   │       ├── Portfolio.tsx   # Portfolio section
│   │       └── Contact.tsx     # Contact section
├── public/                      # Static files
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
└── package.json                # Dependencies

```

## 🎨 Customization

### Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#F1F1EE', // Customize primary color
  },
  secondary: {
    DEFAULT: '#555555', // Customize secondary color
  },
  // ... more colors
}
```

### Content

Edit the content directly in the component files:

- **Hero:** `src/components/sections/Hero.tsx`
- **About:** `src/components/sections/About.tsx`
- **Services:** `src/components/sections/Services.tsx`
- **Portfolio:** `src/components/sections/Portfolio.tsx`
- **Contact:** `src/components/sections/Contact.tsx`

### Typography

Fonts are configured in `src/app/layout.tsx` using Google Fonts:

```typescript
const spaceGrotesk = Space_Grotesk({ ... }); // Headings
const dmSans = DM_Sans({ ... });             // Body text
```

## 📝 Adding Content

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import it in `src/app/page.tsx`
3. Add it to the page

Example:

```tsx
// src/components/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section className="py-24">
      {/* Your content */}
    </section>
  );
}
```

### Adding New Pages

Create new pages in the `src/app/` directory:

```bash
src/app/
├── about/
│   └── page.tsx
├── blog/
│   └── page.tsx
└── contact/
    └── page.tsx
```

## 🎯 SEO

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};
```

## 📧 Contact Form

The contact form currently logs data to console. To make it functional:

1. **Use a form service:**
   - [Formspree](https://formspree.io/)
   - [Web3Forms](https://web3forms.com/)
   - [Getform](https://getform.io/)

2. **Or add API route:**
   - Create `src/app/api/contact/route.ts`
   - Use services like SendGrid, Resend, or Nodemailer

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspired by the Nordic WordPress theme
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using Next.js
