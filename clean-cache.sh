#!/bin/bash
# Clean Next.js cache and rebuild

echo "Cleaning Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

echo "Cache cleaned! Now run: npm run dev"
