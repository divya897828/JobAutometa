# JobAutometa

AI-powered job application automation platform that helps job seekers land their dream jobs faster.

## 🎉 NEW: Registration Form

A professional registration modal has been added to your website! Users can now register by clicking "Get Started" buttons.

### ⚠️ REQUIRED SETUP (Takes 5 minutes)

**The registration form won't work until you complete this setup:**

1. **Read**: `/WHAT_TO_DO_NEXT.md` - Start here!
2. **Setup Formspree**: Follow `/QUICK_START_REGISTRATION.md`
3. **Update Code**: Replace `YOUR_FORM_ID` in `/components/RegistrationModal.tsx` (line 52)

**Quick Setup**: 
- Sign up at https://formspree.io
- Create a form, copy the endpoint
- Update `/components/RegistrationModal.tsx` line 52
- Test it!

### Registration Form Documentation

- 📖 **Start Here**: `/WHAT_TO_DO_NEXT.md` - Complete guide on what to do
- ⚡ **Quick Setup**: `/QUICK_START_REGISTRATION.md` - 3-minute setup guide
- 📚 **Full Guide**: `/REGISTRATION_FORM_GUIDE.md` - Complete implementation details
- 🔧 **Formspree Setup**: `/FORMSPREE_SETUP.md` - Detailed Formspree configuration
- 📊 **Summary**: `/REGISTRATION_IMPLEMENTATION_SUMMARY.md` - Technical overview
- 📝 **Field Validation**: `/FORM_FIELDS_VALIDATION_GUIDE.md` - Field formats & validation

### Form Fields

The registration form collects:
- ✅ First Name (required, letters only, 2-50 chars)
- ✅ Last Name (required, letters only, 2-50 chars)
- ✅ Email (required, validated format)
- ✅ Phone Number (required, various formats accepted)
- ✅ Service Selection (required, 6 options)
- ⚪ Resume Upload (optional, PDF/DOC/DOCX, max 10MB)
- ⚪ Extra Info (optional, textarea, 1000 chars max)

## Features

- 🤖 **Automated Applications**: We apply to jobs for you 24/7
- 📝 **Tailored Resumes**: AI + human expertise for every application
- 📊 **Personal Dashboard**: Track all your applications in one place
- 🎯 **Interview Coaching**: Expert guidance to ace your interviews
- ⚡ **87% Interview Rate**: Proven results with ATS-optimized applications
- ⚖️ **Legal Pages**: Complete Terms of Service and Privacy Policy pages

## Project Pages

- **Home**: Hero banner, features, stats, testimonials, CTA
- **How It Works**: Step-by-step process explanation
- **Pricing**: Essential vs Elite plans comparison
- **About**: Company story and mission
- **Contact**: Contact form with Web3Forms integration
- **Terms of Service**: Comprehensive legal terms ⚖️ NEW
- **Privacy Policy**: Detailed privacy practices 🔒 NEW

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v3.4.1 (downgraded from v4 for stability)
- **UI Components**: Radix UI + ShadCN
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jobautometa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect the framework (Vite)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

## Project Structure

```
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   └── ...               # Feature components
├── pages/                # Page components
├── styles/               # Global styles
└── package.json          # Dependencies and scripts
```

## Environment Variables

If you're using Web3Forms for contact form submissions, create a `.env` file:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

## Contact Form Setup

### Main Contact Page (ContactPage.tsx)
1. Get a free API key from [web3forms.com](https://web3forms.com)
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` in `/pages/ContactPage.tsx` (line 34) with your actual key
3. Or use environment variable: `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`

### Registration Modal (Get Started Form)
1. Get a free account from [formspree.io](https://formspree.io)
2. Create a form and copy the endpoint
3. Replace `YOUR_FORM_ID` in `/components/RegistrationModal.tsx` (line 52)
4. See `/WHAT_TO_DO_NEXT.md` for complete instructions

## License

All rights reserved © JobAutometa

## Support

For support, email hello@jobautometa.com