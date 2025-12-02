# Troubleshooting Guide

## Error: "Cannot read properties of undefined (reading 'call')"

This webpack error typically occurs due to cache issues or dependency problems. Follow these steps:

### Solution 1: Clear Cache and Restart

1. Stop the development server (Ctrl+C)
2. Delete the build cache:
   ```bash
   rm -rf .next
   rm -rf node_modules/.cache
   ```
3. Restart the dev server:
   ```bash
   npm run dev
   ```

**OR use the clean script:**
```bash
chmod +x clean-cache.sh
./clean-cache.sh
npm run dev
```

### Solution 2: Reinstall Dependencies

If the above doesn't work, try reinstalling all dependencies:

```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

### Solution 3: Check Node Version

Ensure you're using a compatible Node.js version:

```bash
node --version
```

Recommended: Node.js 18.x or 20.x

If you're on an older version, update Node.js from https://nodejs.org/

### Solution 4: Update Next.js

The error message shows Next.js 14.2.33 is outdated. Update to the latest:

```bash
npm install next@latest react@latest react-dom@latest
npm run dev
```

## Common Issues

### Issue: Fonts not loading

**Solution:** Check that Google Fonts are properly configured in `src/app/layout.tsx`

### Issue: Tailwind styles not applying

**Solution:**
1. Verify `tailwind.config.ts` is valid
2. Check that `globals.css` imports are correct
3. Clear cache and rebuild

### Issue: Components not found

**Solution:** Check that all components are properly exported:
- `export default function ComponentName()`
- Located in `src/components/sections/`

## Quick Fix Commands

```bash
# Clear everything and start fresh
rm -rf .next node_modules/.cache
npm run dev

# Full reset (if nothing else works)
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

## Still Having Issues?

1. Check the browser console for specific error messages
2. Look at the terminal output for detailed error info
3. Verify all component files exist in `src/components/sections/`
4. Ensure no TypeScript errors in your IDE

## Files Updated

All components now have proper section IDs:
- `HeroBusiness.tsx` → `id="hero"`
- `ServicesBusiness.tsx` → `id="services"`
- `FlagshipProjects.tsx` → `id="portfolio"`
- `WhyChooseUs.tsx` → `id="about"`
- `ProcessBusiness.tsx` → `id="process"`
- `ContactLead.tsx` → `id="contact"`

These IDs enable smooth scrolling from the navigation menu.
