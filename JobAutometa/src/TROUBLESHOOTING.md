# JobAutometa - Troubleshooting Guide

## Issue: Pages not rendering / No styling

Follow these steps **in order**:

### Step 1: Clean Install
```bash
# Remove all existing dependencies
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Clear npm cache
npm cache clean --force
```

### Step 2: Install Dependencies
```bash
# Install all dependencies fresh
npm install
```

### Step 3: Verify Tailwind is installed
```bash
# Check if tailwindcss is in node_modules
ls node_modules | grep tailwind
# You should see: tailwindcss and tailwindcss-animate
```

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Check Browser Console
- Open your browser's developer tools (F12)
- Go to the Console tab
- Look for any error messages (red text)
- Common errors to check for:
  - "Failed to resolve import"
  - "Module not found"
  - TypeScript errors

### Step 6: Verify Files Exist
Make sure these critical files exist:
- `tailwind.config.js` ✓
- `postcss.config.js` ✓
- `styles/globals.css` ✓
- `main.tsx` ✓
- `index.html` ✓

### Step 7: Check Network Tab
- Open Developer Tools → Network tab
- Refresh the page
- Look for:
  - `main.tsx` should load successfully
  - `globals.css` should load successfully
  - No 404 errors

## Common Issues & Solutions

### Issue: "Cannot find module 'tailwindcss'"
**Solution:** Run `npm install` again

### Issue: Blank white page
**Solution:** 
1. Check browser console for errors
2. Verify `<div id="root"></div>` exists in index.html
3. Verify main.tsx is importing App correctly

### Issue: Styles not applying
**Solution:**
1. Verify tailwind.config.js exists
2. Check that globals.css has `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`
3. Restart dev server

### Issue: TypeScript errors
**Solution:**
```bash
# Delete TypeScript cache
rm -rf node_modules/.vite
npm run dev
```

## Still Having Issues?

Check these:

1. **Node version**: Make sure you're using Node 18 or higher
   ```bash
   node --version
   ```

2. **Port conflict**: Try a different port
   ```bash
   npm run dev -- --port 3001
   ```

3. **Browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

4. **Environment**: Try in incognito/private mode
