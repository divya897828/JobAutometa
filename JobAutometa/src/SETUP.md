# JobAutometa - Complete Setup Instructions

## Prerequisites
- Node.js 18.0.0 or higher
- npm (comes with Node.js)

## Step-by-Step Setup

### 1. Clean Installation

```bash
# Remove any existing installations
rm -rf node_modules
rm -f package-lock.json

# Clean npm cache
npm cache clean --force
```

### 2. Install All Dependencies

```bash
npm install
```

This will install:
- ✅ React 18.2.0
- ✅ Tailwind CSS 3.4.1 (stable)
- ✅ Vite 5.1.4
- ✅ All UI components and dependencies

### 3. Verify Installation

Check that these folders exist:
```bash
ls node_modules | grep -E "react|tailwind|vite"
```

You should see:
- react
- react-dom
- tailwindcss
- tailwindcss-animate
- vite

### 4. Start Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.1.4  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 5. Open in Browser

Go to: `http://localhost:5173/`

## Troubleshooting

### If you see a blank page:

1. **Test React and Tailwind separately**
   - Open the file `/test.html` directly in your browser
   - If it looks styled, your browser supports Tailwind
   - If it's plain, check browser extensions

2. **Use the Diagnostic Component**
   
   Edit `main.tsx` temporarily:
   ```typescript
   // Change this line:
   import App from './App.tsx'
   // To this:
   import App from './DiagnosticApp.tsx'
   ```
   
   Refresh browser. If the diagnostic page shows with colors and styling:
   - ✅ React works
   - ✅ Vite works  
   - ✅ Tailwind works
   
   Then change it back to use `App.tsx`

3. **Check Browser Console**
   - Press F12 to open Developer Tools
   - Click "Console" tab
   - Look for error messages (red text)
   - Common errors:
     - "Failed to resolve" → Missing dependency
     - "Cannot find module" → Run `npm install` again
     - "Unexpected token" → TypeScript/JSX issue

4. **Hard Refresh**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
   - Or try incognito/private mode

### If styles aren't loading:

```bash
# Stop the dev server (Ctrl+C)
# Delete Vite cache
rm -rf node_modules/.vite

# Restart
npm run dev
```

### If TypeScript errors appear:

```bash
# Reinstall TypeScript dependencies
npm install -D typescript @types/react @types/react-dom

# Restart dev server
npm run dev
```

### Port already in use:

```bash
# Use a different port
npm run dev -- --port 3001
```

## File Checklist

Make sure these files exist with correct content:

- ✅ `index.html` - Has `<div id="root"></div>`
- ✅ `main.tsx` - Imports `./styles/globals.css`
- ✅ `styles/globals.css` - Has `@tailwind` directives
- ✅ `tailwind.config.js` - Configured with content paths
- ✅ `postcss.config.js` - Has tailwindcss plugin
- ✅ `vite.config.ts` - Configured with React plugin
- ✅ `package.json` - All dependencies listed

## Verification Tests

### Test 1: Check if Vite is running
```bash
npm run dev
```
Should start without errors

### Test 2: Check if TypeScript compiles
```bash
npm run build
```
Should complete without errors

### Test 3: Check if all imports resolve
Open any component file, the IDE should not show red underlines for imports

## Contact Form Setup

Don't forget to:
1. Go to https://web3forms.com
2. Get your free Access Key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` in `/pages/ContactPage.tsx` (line 34)

## Build for Production

```bash
npm run build
```

Files will be in the `dist` folder

## Deploy to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel dashboard.

## Success Indicators

When everything works, you should see:
- ✅ Blue and white gradient hero section
- ✅ Smooth navigation between pages
- ✅ Auto-playing YouTube video background
- ✅ Scrolling testimonials
- ✅ Responsive design on mobile
- ✅ Functional contact form (after adding Web3Forms key)

## Need More Help?

Check the full troubleshooting guide: `TROUBLESHOOTING.md`
