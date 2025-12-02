# 🚀 Quick Start Guide

## Get Your Site Running in 5 Minutes

### 1️⃣ Install Dependencies

```bash
cd nordic-nextjs
npm install
```

### 2️⃣ Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 🌐 Deploy to Vercel

### Option A: GitHub + Vercel (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✅

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts, and your site will be live in seconds!

---

## ✏️ Customize Your Site

### Update Content

Edit these files to customize your content:

| Section | File Location |
|---------|--------------|
| Hero | `src/components/sections/Hero.tsx` |
| About | `src/components/sections/About.tsx` |
| Services | `src/components/sections/Services.tsx` |
| Portfolio | `src/components/sections/Portfolio.tsx` |
| Contact | `src/components/sections/Contact.tsx` |
| Header/Nav | `src/components/layout/Header.tsx` |
| Footer | `src/components/layout/Footer.tsx` |

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',
  },
  secondary: {
    DEFAULT: '#YOUR_COLOR',
  },
}
```

### Update Fonts

Edit `src/app/layout.tsx`:

```typescript
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({
  subsets: ["latin"],
  variable: "--font-heading",
});
```

---

## 📱 Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` folder.

---

## 🎨 Design System

### Color Palette

- **Primary:** `#F1F1EE` (Light beige)
- **Secondary:** `#555555` (Gray)
- **Dark:** `#121212` (Almost black)
- **Background:** `#FFFFFF` (White)

### Typography

- **Headings:** Space Grotesk (500 weight)
- **Body:** DM Sans (400 weight)

### Spacing

The site uses Tailwind's default spacing scale with custom breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 🆘 Common Issues

### Port 3000 already in use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module not found errors

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📚 Next Steps

1. ✅ Customize content
2. ✅ Add your images to `public/images/`
3. ✅ Update contact information
4. ✅ Set up contact form with a service (Formspree, Web3Forms)
5. ✅ Add Google Analytics (optional)
6. ✅ Deploy to Vercel
7. ✅ Connect custom domain

---

## 💡 Pro Tips

- **Images:** Add your images to `public/images/` and reference them as `/images/your-image.jpg`
- **SEO:** Update metadata in `src/app/layout.tsx` for each page
- **Performance:** Keep images optimized (use WebP format when possible)
- **Mobile:** Test on real devices, not just browser dev tools

---

## 🤔 Need Help?

- Check the main [README.md](README.md)
- Visit [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Search [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

Happy building! 🎉
