# Registration Form Implementation Guide

## Overview

A registration modal form has been successfully implemented for your JobAutometa website. Users can now click "Get Started" buttons to open a professional registration form that collects their information and sends it to your email via Formspree.

## Features Implemented

### ✅ Registration Modal Component
- **Location**: `/components/RegistrationModal.tsx`
- **Trigger Points**: 
  - "Get Started" button in Hero section (top of homepage)
  - "Get Started Now" button in CTA section (bottom of homepage)

### ✅ Form Fields

1. **First Name** (Required)
   - Text input
   - Placeholder: "John"

2. **Last Name** (Required)
   - Text input
   - Placeholder: "Doe"

3. **Email** (Required)
   - Email validation
   - Placeholder: "john.doe@example.com"

4. **Phone Number** (Required)
   - Telephone input
   - Placeholder: "+1 (555) 123-4567"

5. **Service Selection** (Required)
   - Dropdown menu with options:
     - Resume Optimization
     - Full Time Application Support
     - Career Guidance
     - Interview Prep
     - LinkedIn Guidance
     - Networking Guidance

6. **Resume Upload** (Optional)
   - File upload with drag-and-drop interface
   - Accepts: PDF, DOC, DOCX
   - Visual feedback when file is selected
   - Maximum file size: 10MB (Formspree free tier limit)

### ✅ User Experience Features

- **Professional Design**: Matches your navy blue + sky blue + white brand colors
- **Loading States**: Shows spinner and "Submitting..." text during form submission
- **Success Feedback**: 
  - Green checkmark animation
  - Success message: "Registration Successful!"
  - Auto-closes after 3 seconds
  - Form resets automatically
- **Form Validation**: All required fields must be filled before submission
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Accessibility**: Proper labels, ARIA attributes, keyboard navigation

### ✅ Components Updated

1. **Hero Component** (`/components/Hero.tsx`)
   - Added state management for modal
   - "Get Started" button opens registration modal instead of navigating to contact page

2. **CTA Component** (`/components/CTA.tsx`)
   - Added state management for modal
   - "Get Started Now" button opens registration modal

## Setup Instructions

### Step 1: Set Up Formspree (Required)

You **must** configure Formspree to receive form submissions. Without this, the form will not work.

1. **Create Formspree Account**:
   - Go to https://formspree.io
   - Sign up for a free account
   - Verify your email

2. **Create New Form**:
   - Login to Formspree dashboard
   - Click "New Form"
   - Name it: "JobAutometa Registration Form"
   - Enter your company email address
   - Click "Create Form"

3. **Get Form Endpoint**:
   - Copy your form endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)

4. **Update Registration Modal**:
   - Open `/components/RegistrationModal.tsx`
   - Find line 52:
     ```typescript
     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     ```
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Save the file

### Step 2: Test the Form

1. Start your development server (if not running):
   ```bash
   npm run dev
   ```

2. Visit your website
3. Click "Get Started" in the hero section
4. Fill out the form with test data
5. Submit and verify you receive the email

### Step 3: Configure Email Settings (Optional)

In your Formspree dashboard, you can customize:
- Email subject line
- Reply-to address
- Auto-reply messages
- Spam protection settings

## Form Submission Flow

```
User clicks "Get Started"
    ↓
Modal opens with registration form
    ↓
User fills out required fields
    ↓
User optionally uploads resume
    ↓
User clicks "Submit Registration"
    ↓
Form shows loading state ("Submitting...")
    ↓
Data sent to Formspree
    ↓
Formspree forwards to your email
    ↓
Success message shown to user
    ↓
Modal auto-closes after 3 seconds
    ↓
Form resets for next user
```

## Email Format You'll Receive

When a user submits the form, you'll receive an email with:

```
From: Formspree <noreply@formspree.io>
Subject: New submission from JobAutometa Registration Form

First Name: John
Last Name: Doe
Email: john.doe@example.com
Phone: +1 (555) 123-4567
Service: Full Time Application Support

Attachments:
- resume.pdf (if uploaded)
```

## Customization Options

### Change Form Fields

To modify fields, edit `/components/RegistrationModal.tsx`:

```typescript
// Add new field example:
<div className="space-y-2">
  <Label htmlFor="company">Company</Label>
  <Input
    id="company"
    name="company"
    type="text"
    placeholder="Company name"
  />
</div>
```

### Change Service Options

Update the `<SelectContent>` section around line 197:

```typescript
<SelectContent>
  <SelectItem value="new-service">New Service Name</SelectItem>
  {/* Add more options as needed */}
</SelectContent>
```

### Change Success Message

Edit the success state section around line 93:

```typescript
<h3 className="text-2xl text-slate-900">Your Custom Message!</h3>
<p className="text-slate-600 text-center">
  Your custom description here.
</p>
```

### Change Auto-Close Timer

Edit line 71 to change the 3-second auto-close:

```typescript
setTimeout(() => {
  // ... reset logic
  onOpenChange(false);
}, 5000); // Change to 5 seconds
```

## Technical Details

### Technologies Used
- **React**: For component logic and state management
- **Radix UI Dialog**: Accessible modal component
- **Tailwind CSS**: Styling
- **Lucide React**: Icons
- **Formspree**: Form backend service

### File Structure
```
/components
  ├── RegistrationModal.tsx     (Main form component)
  ├── Hero.tsx                   (Updated to include modal)
  ├── CTA.tsx                    (Updated to include modal)
  └── ui/
      ├── dialog.tsx             (Modal base component)
      ├── input.tsx              (Input fields)
      ├── label.tsx              (Form labels)
      ├── select.tsx             (Dropdown select)
      └── button.tsx             (Buttons)
```

### State Management
- Each component (Hero and CTA) maintains its own modal open/close state
- Form data is managed locally in RegistrationModal component
- File upload state tracks the selected filename

## Formspree Free Tier Limits

- ✅ **50 submissions/month** - Perfect for getting started
- ✅ Unlimited forms
- ✅ File uploads up to 10MB
- ✅ Email notifications
- ✅ Spam protection

**When you need more**: Upgrade to Formspree paid plan or switch to alternative service.

## Alternative Form Services

If Formspree doesn't meet your needs, you can easily switch to:

1. **Web3Forms** (https://web3forms.com)
   - 250 submissions/month (free)
   - No account needed

2. **Getform** (https://getform.io)
   - 50 submissions/month (free)
   - Built-in spam protection

3. **Basin** (https://usebasin.com)
   - 100 submissions/month (free)

To switch services, just update the fetch URL in RegistrationModal.tsx.

## Troubleshooting

### Modal Not Opening?
- Check browser console for errors
- Verify React state is updating correctly

### Form Not Submitting?
1. Check that you replaced `YOUR_FORM_ID` with actual Formspree ID
2. Verify Formspree account is active
3. Check browser network tab for failed requests

### Not Receiving Emails?
1. Check spam/junk folder
2. Verify email address in Formspree settings
3. Check Formspree dashboard submission logs

### File Upload Issues?
1. Ensure file is under 10MB
2. Check file format (PDF, DOC, DOCX only)
3. Verify Formspree supports file uploads on your plan

## Next Steps

1. ✅ Set up Formspree account
2. ✅ Update form endpoint in code
3. ✅ Test the form submission
4. ✅ Configure email notifications
5. ✅ Test on mobile devices
6. ✅ Add form to deployment

## Support

For questions about:
- **This implementation**: Review the code comments in `/components/RegistrationModal.tsx`
- **Formspree setup**: See `/FORMSPREE_SETUP.md` or visit https://help.formspree.io
- **Customization**: Refer to this guide's "Customization Options" section

---

**Your registration form is ready to collect leads!** Just complete the Formspree setup and you're good to go. 🚀
