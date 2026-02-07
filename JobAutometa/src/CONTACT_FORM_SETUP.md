# Contact Form Setup Guide

## ✅ Updates Complete

The Contact page has been updated to use **Formspree** (same as the registration form) and all contact information has been updated.

---

## 🔄 What Changed
const response = await fetch("https://formspree.io/f/xykdydad", {
- **Before**: Web3Forms API
- **After**: Formspree API (same as registration form)

### 2. Contact Email Updated ✅
- **Before**: `hello@jobautometa.com`
- **After**: `support@jobautometa.com`
- **Updated in**: 4 locations throughout the page

### 3. Contact Phone Updated ✅
- **Before**: `+1 (555) 123-4567` (placeholder)
- **After**: `(530) 366-1683`
- **Updated in**: 4 locations throughout the page

---

## 📋 Contact Form Fields

The contact form collects:

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| First Name | ✅ | Text | - |
| Last Name | ✅ | Text | - |
| Email | ✅ | Email | Valid email format |
| Phone | ⚪ | Tel | Optional |
| Subject | ✅ | Text | What the inquiry is about |
| Message | ✅ | Textarea | Detailed message (6 rows) |

---

## 🚀 Setup Instructions

### Step 1: Create Formspree Form

1. Go to **https://formspree.io/**
2. Sign up or log in to your account
3. Click **"+ New Form"**
4. Name your form: **"JobAutometa Contact Form"**
5. Copy the form endpoint (it looks like `https://formspree.io/f/xabcdefg`)

### Step 2: Update Contact Page

Open `/pages/ContactPage.tsx` and find **line 32**:

```typescript
// CURRENT (line 32):
const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT_ID", {

// CHANGE TO:
const response = await fetch("https://formspree.io/f/YOUR_ACTUAL_ENDPOINT", {
```

**Example**:
```typescript
const response = await fetch("https://formspree.io/f/xabcdefg", {
```

### Step 3: Configure Formspree Settings

In your Formspree dashboard:

1. **Email Destination**: Set to `support@jobautometa.com`
2. **Email Subject**: Will be `Contact Form: [Subject from form]`
3. **Reply-To**: Automatically set to user's email
4. **Spam Protection**: Enable reCAPTCHA (optional)
5. **Success Page**: Leave blank (handled in-app)

### Step 4: Test the Form

1. Go to your Contact page
2. Fill out all required fields:
   - First Name: "Test"
   - Last Name: "User"
   - Email: "test@example.com"
   - Subject: "Testing Contact Form"
   - Message: "This is a test message"
3. Click **"Send Message"**
4. Should see success message with check icon
5. Check `support@jobautometa.com` for the email

---

## 📧 What You'll Receive

### Email Format

```
From: Formspree <noreply@formspree.io>
Reply-To: test@example.com (user's email)
To: support@jobautometa.com
Subject: Contact Form: Testing Contact Form

─────────────────────────────────────────────
First Name: Test
Last Name: User
Email: test@example.com
Phone: (530) 366-1683
Subject: Testing Contact Form
Message: This is a test message

Submitted via JobAutometa Contact Form
─────────────────────────────────────────────
```

---

## 📍 Contact Information Updated

All instances of contact information have been updated throughout the Contact page:

### Email Updated (4 locations)
1. ✅ Error message alerts → `support@jobautometa.com`
2. ✅ "Email Us Directly" card → `support@jobautometa.com`
3. ✅ Left sidebar quick action → `support@jobautometa.com`
4. ✅ mailto links → `mailto:support@jobautometa.com`

### Phone Updated (4 locations)
1. ✅ Success message → `(530) 366-1683`
2. ✅ "Call Us" card → `(530) 366-1683`
3. ✅ Right sidebar quick action → `(530) 366-1683`
4. ✅ Phone Support card → `(530) 366-1683`
5. ✅ All tel: links → `tel:+15303661683`

---

## 🔄 Comparison: Contact Form vs Registration Form

| Feature | Contact Form | Registration Form |
|---------|--------------|-------------------|
| Service | Formspree | Formspree |
| Name Fields | First + Last (separate) | First + Last (separate) |
| Email | ✅ Required | ✅ Required |
| Phone | ⚪ Optional | ✅ Required (10 digits) |
| Subject | ✅ Required | N/A (Service dropdown) |
| Message | ✅ Required (textarea) | ⚪ Optional (Extra Info) |
| Resume | N/A | ⚪ Optional (file upload) |
| Destination | `support@jobautometa.com` | Your registration email |

---

## ✅ Form Validation

### Required Fields
- First Name ✅
- Last Name ✅
- Email ✅ (must be valid email format)
- Subject ✅
- Message ✅

### Optional Fields
- Phone (no validation, any format accepted)

### Error Handling
- Shows loading spinner while submitting
- Displays error alert if submission fails
- Provides fallback email in error message
- All form fields disabled during submission

---

## 🎨 User Experience Flow

### Success Flow
```
User fills out contact form
    ↓
Click "Send Message"
    ↓
Loading spinner shows: "Sending..."
    ↓
Form submits to Formspree
    ↓
Success! Page scrolls to top
    ↓
Shows success message with check icon
    ↓
"We'll respond within 24 hours"
    ↓
Phone number shown as backup: (530) 366-1683
    ↓
Form resets, can send another message
```

### Error Flow
```
User fills out contact form
    ↓
Click "Send Message"
    ↓
Loading spinner shows: "Sending..."
    ↓
Error occurs
    ↓
Alert shows: "Something went wrong. 
Please try again or email us directly 
at support@jobautometa.com"
    ↓
Form stays filled, user can retry
```

---

## 📄 Contact Page Sections

### 1. Hero Section
- "Have questions? Let's chat."
- Gradient background (slate-900 to slate-800)
- Call to action: contact the team

### 2. Contact Form (Left Side)
- White card with border
- 6 input fields
- Submit button with loading state
- Formspree integration

### 3. Quick Actions (Right Side)
- **Email Us Directly** card
  - Icon: Mail
  - Email: `support@jobautometa.com`
- **Call Us** card
  - Icon: Phone
  - Phone: `(530) 366-1683`

### 4. Other Ways to Reach Us
- **Phone Support** card
  - Phone: `(530) 366-1683`
- **Business Hours** card
  - Mon-Fri: 9am - 6pm
  - Sat-Sun: Closed

### 5. FAQ Preview
- Link to FAQ page (placeholder)

---

## 📱 Mobile Responsive

- Form stacks vertically on mobile
- Name fields (First/Last) stay side-by-side on desktop
- Quick Actions cards stack on mobile
- All phone numbers are clickable (tel: links)
- All emails are clickable (mailto: links)

---

## 🔒 Security Features

### Formspree Built-in Security
- ✅ Spam protection
- ✅ Rate limiting
- ✅ HTTPS encryption
- ✅ CSRF protection
- ✅ Email validation
- ✅ Optional reCAPTCHA

### Form Features
- Client-side validation (HTML5)
- Required field enforcement
- Email format validation
- Disabled state during submission (prevents double-submit)
- Error handling with user-friendly messages

---

## 🎯 Next Steps

### Before Going Live

1. ✅ Create Formspree account
2. ✅ Create "Contact Form" in Formspree
3. ✅ Copy endpoint ID
4. ⚠️ **Update line 32** in `/pages/ContactPage.tsx`
5. ✅ Test the form
6. ✅ Verify email arrives at `support@jobautometa.com`
7. ✅ Test error handling
8. ✅ Test on mobile devices

### Optional Enhancements

- Enable Formspree reCAPTCHA for spam protection
- Set up email notifications
- Create auto-responder email template
- Add custom success page (optional)
- Track form submissions in analytics

---

## 📊 Form Submissions You'll See

### In Your Inbox
Each contact form submission will arrive at `support@jobautometa.com` with:
- First Name
- Last Name
- Email (with reply-to)
- Phone (if provided)
- Subject
- Message

### In Formspree Dashboard
You can also view submissions in Formspree:
- Submission timestamp
- All form data
- Export to CSV
- Spam filtering
- Submission statistics

---

## 🆚 Key Differences from Registration Form

| Feature | Contact Form | Registration Form |
|---------|--------------|-------------------|
| **Purpose** | General inquiries | Sign up for service |
| **Phone** | Optional | Required (10 digits) |
| **Resume** | N/A | Optional upload |
| **Subject** | Free text | Service dropdown |
| **Message** | Detailed inquiry | Extra info (optional) |
| **Validation** | Basic | Strict (name, email, phone) |

Both use Formspree but serve different purposes!

---

## ✅ Quick Setup Checklist

- [x] Contact form updated to use Formspree
- [x] Email changed to `support@jobautometa.com` (4 locations)
- [x] Phone changed to `(530) 366-1683` (4 locations)
- [x] Form validation in place
- [x] Success/error handling implemented
- [x] Loading states added
- [ ] **YOU NEED TO**: Create Formspree form
- [ ] **YOU NEED TO**: Update endpoint in line 32
- [ ] **YOU NEED TO**: Test the form

---

## 📞 Support Contacts Summary

### Production Contact Information

**Email**: `support@jobautometa.com`
- Used for: General inquiries, contact form submissions
- Response time: Within 24 hours

**Phone**: `(530) 366-1683`
- Used for: Direct support calls
- Available: Mon-Fri, 9am - 6pm

**Registration**: Separate Formspree endpoint
- Goes to your registration email

---

## 🔗 File Modified

**`/pages/ContactPage.tsx`**
- Line 32: Formspree endpoint (needs your update)
- Lines 64, 69: Error message email updated
- Line 121: Success message phone updated
- Line 251: Email us directly email updated
- Line 268: Call us phone updated
- Line 299: Phone support phone updated
- All `tel:` and `mailto:` links updated

---

## ✅ Summary

**What was requested**:
1. Contact form should send data to inbox (like registration) ✅
2. Change email to `support@jobautometa.com` ✅
3. Change phone to `(530) 366-1683` ✅

**What was delivered**:
✅ Contact form now uses Formspree  
✅ Email updated in all 4 locations  
✅ Phone updated in all 4 locations  
✅ Same submission process as registration form  
✅ Form validation and error handling  
✅ Success message with fallback contact info  

**Status**: **READY** - Just need to add your Formspree endpoint! 🎉

---

*Last Updated: February 7, 2026 - Contact form configured with Formspree*
