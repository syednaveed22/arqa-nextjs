# 🚀 Complete Setup Guide - Run Your Nordic Website Locally

## Prerequisites Installation

You need to install Node.js first. Here are the steps:

---

## Step 1: Install Node.js

### Option A: Using Official Installer (Recommended for beginners)

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS version** (Long Term Support)
   - Choose the macOS installer (.pkg file)

2. **Install Node.js:**
   - Double-click the downloaded .pkg file
   - Follow the installation wizard
   - Click "Continue" → "Agree" → "Install"
   - Enter your password when prompted

3. **Verify Installation:**
   Open Terminal (Applications → Utilities → Terminal) and run:
   ```bash
   node --version
   # Should show: v20.x.x or similar

   npm --version
   # Should show: 10.x.x or similar
   ```

### Option B: Using Homebrew (Recommended for developers)

1. **Install Homebrew** (if you don't have it):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js:**
   ```bash
   brew install node
   ```

3. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

---

## Step 2: Navigate to Your Project

Open Terminal and navigate to the project directory:

```bash
cd /Users/naveed/Downloads/nordic-1000/nordic-nextjs
```

---

## Step 3: Install Project Dependencies

This downloads all required packages (React, Next.js, Tailwind, etc.):

```bash
npm install
```

**What to expect:**
- This will take 1-3 minutes
- You'll see a progress bar
- Creates a `node_modules` folder
- When done, you'll see: "added XXX packages"

---

## Step 4: Start the Development Server

```bash
npm run dev
```

**What to expect:**
- Server starts in a few seconds
- You'll see output like:
  ```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Ready in 2.3s
  ```

---

## Step 5: Open in Browser

1. Open your web browser (Chrome, Safari, Firefox, etc.)
2. Go to: **http://localhost:3000**
3. Your Nordic website should appear! 🎉

---

## 🎯 Quick Commands Reference

```bash
# Navigate to project
cd /Users/naveed/Downloads/nordic-1000/nordic-nextjs

# Install dependencies (only needed once)
npm install

# Start development server
npm run dev

# Stop server (in Terminal)
Press: Ctrl + C

# Build for production
npm run build

# Preview production build
npm run start
```

---

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution:** Node.js is not installed or not in PATH
- Restart Terminal after installing Node.js
- Or install Node.js using the guide above

### Issue: "Port 3000 is already in use"
**Solution:** Use a different port
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Issue: "Module not found" errors
**Solution:** Reinstall dependencies
```bash
rm -rf node_modules
npm install
```

### Issue: Terminal shows profile errors
**Solution:** Your .zprofile has syntax errors, but we can work around it
```bash
# Use bash instead of zsh
bash
cd /Users/naveed/Downloads/nordic-1000/nordic-nextjs
npm install
npm run dev
```

### Issue: Installation is very slow
**Solution:** Use a faster mirror or wait (first install takes longer)
```bash
# Or try yarn instead
npm install -g yarn
yarn install
yarn dev
```

---

## 📝 After It's Running

Once the server is running at http://localhost:3000, you can:

1. **Edit Content:**
   - Open files in `src/components/sections/`
   - Make changes
   - Save the file
   - Browser refreshes automatically!

2. **Edit Styles:**
   - Modify `tailwind.config.ts` for colors
   - Edit `src/app/globals.css` for global styles

3. **Add Images:**
   - Place images in `public/images/`
   - Reference as `/images/your-image.jpg`

---

## 🎨 Making Your First Edit

Try this to see live updates:

1. **Keep the server running** (`npm run dev`)

2. **Open this file in a text editor:**
   ```
   src/components/sections/Hero.tsx
   ```

3. **Change the heading** (around line 14):
   ```typescript
   // Change this:
   Modern Portfolio & <span className="text-secondary">Creative</span> Studio

   // To this:
   Welcome to <span className="text-secondary">My Website</span>!
   ```

4. **Save the file**

5. **Check your browser** - it updates automatically! ✨

---

## 🚀 Next Steps After Running Locally

1. **Customize Content:**
   - Update all sections with your real content
   - Replace placeholder text
   - Add your own images

2. **Test Responsiveness:**
   - Resize browser window
   - Check mobile view (DevTools: Cmd+Option+I)

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

---

## 💡 Pro Tips

- **Hot Reload:** Changes appear instantly without refreshing
- **Console:** Check browser console (F12) for errors
- **TypeScript:** Red squiggly lines in VS Code = type errors
- **Tailwind:** Use Tailwind classes for styling

---

## 📞 Need Help?

If you encounter issues:

1. Check the error message in Terminal
2. Check browser console (F12)
3. Google the error message
4. Check [Next.js Docs](https://nextjs.org/docs)
5. Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## ✅ Success Checklist

- [ ] Node.js installed and verified
- [ ] Navigated to project directory
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Opened http://localhost:3000
- [ ] Website displays correctly
- [ ] Made a test edit and saw it update

---

**You're all set! Happy coding! 🎉**
