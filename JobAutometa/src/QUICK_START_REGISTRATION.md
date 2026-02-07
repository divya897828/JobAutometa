# 🚀 Quick Start: Registration Form Setup

## What Was Built

A professional registration modal that opens when users click "Get Started" buttons on your homepage.

## ⚡ 3-Minute Setup

### 1. Create Formspree Account (1 minute)
```
👉 Go to: https://formspree.io
👉 Click "Sign Up"
👉 Verify email
```

### 2. Create Form (1 minute)
```
👉 Click "New Form"
👉 Name: "JobAutometa Registration Form"
👉 Email: your-company-email@example.com
👉 Click "Create Form"
👉 Copy the form endpoint (looks like: https://formspree.io/f/xyzabc123)
```

### 3. Update Code (1 minute)
```typescript
👉 Open: /components/RegistrationModal.tsx
👉 Find line 52
👉 Replace: "https://formspree.io/f/YOUR_FORM_ID"
👉 With: "https://formspree.io/f/xyzabc123" (your actual ID)
👉 Save file
```

### 4. Test It! (30 seconds)
```
👉 Click "Get Started" on your website
👉 Fill out the form
👉 Submit
👉 Check your email
```

## ✅ That's It!

Your registration form is now live and collecting leads.

## 📝 What Data Gets Collected

- ✅ First Name
- ✅ Last Name
- ✅ Email
- ✅ Phone Number
- ✅ Service Selection (dropdown)
- ✅ Resume File (optional)

## 🎨 Where Users Can Access It

1. **Hero Section** (top of homepage)
   - Big blue "Get Started" button

2. **CTA Section** (bottom of homepage)
   - "Get Started Now" button

## 📊 Formspree Free Limits

- 50 submissions per month
- 10MB max file size
- Unlimited forms

**Need more?** Upgrade Formspree or switch to Web3Forms (250/month free)

## 🆘 Having Issues?

### Form not working?
```
1. Did you replace YOUR_FORM_ID?
2. Is your Formspree account verified?
3. Check browser console for errors
```

### Not receiving emails?
```
1. Check spam folder
2. Verify email in Formspree settings
3. Check Formspree dashboard logs
```

## 📚 More Help

- **Detailed Guide**: See `/REGISTRATION_FORM_GUIDE.md`
- **Formspree Setup**: See `/FORMSPREE_SETUP.md`
- **Code Location**: `/components/RegistrationModal.tsx`

---

**Ready to collect leads? Set up Formspree now!** 🎯
