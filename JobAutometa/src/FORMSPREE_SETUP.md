# Formspree Setup Guide for JobAutometa Registration Form

## What is Formspree?

Formspree is a free and open-source form backend service that allows you to receive form submissions directly to your email without needing a backend server or database.

## Setup Instructions

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create a New Form

1. After logging in, click "New Form" or "Create Form"
2. Give your form a name: **"JobAutometa Registration Form"**
3. Enter the email address where you want to receive submissions (this will be your company email)
4. Click "Create Form"

### Step 3: Get Your Form Endpoint

1. After creating the form, you'll see a form endpoint URL like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
2. Copy this URL - you'll need it in the next step

### Step 4: Update the Registration Modal Component

1. Open `/components/RegistrationModal.tsx`
2. Find line 52 where it says:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID

   For example, if your endpoint is `https://formspree.io/f/xyzabc123`, update it to:
   ```typescript
   const response = await fetch("https://formspree.io/f/xyzabc123", {
   ```

### Step 5: Configure Form Settings (Optional)

In your Formspree dashboard, you can configure:

1. **Email Settings**
   - Subject line for emails you receive
   - Reply-to address
   - CC/BCC addresses

2. **Notifications**
   - Email notification template
   - Auto-reply to users who submit the form

3. **Spam Protection**
   - reCAPTCHA integration
   - Honeypot fields

4. **Webhook Integration** (for advanced users)
   - Send form data to other services like Slack, Discord, etc.

## What Data Will Be Sent?

The registration form collects:
- ✅ First Name (required)
- ✅ Last Name (required)
- ✅ Email (required)
- ✅ Phone Number (required)
- ✅ Service Selection (required) - dropdown with options:
  - Resume Optimization
  - Full Time Application Support
  - Career Guidance
  - Interview Prep
  - LinkedIn Guidance
  - Networking Guidance
- ✅ Resume File (optional) - accepts PDF, DOC, DOCX

## Testing Your Form

1. After updating the form endpoint, save the file
2. Start your development server if not already running
3. Click "Get Started" on your website
4. Fill out the registration form with test data
5. Submit the form
6. Check your email inbox for the submission

## Formspree Free Tier Limits

- ✅ 50 submissions per month
- ✅ Unlimited forms
- ✅ File uploads (up to 10MB per file)
- ✅ Spam protection
- ✅ Email notifications

If you need more submissions, consider upgrading to a paid plan.

## Alternative Form Services

If you prefer alternatives to Formspree, you can also use:

1. **Web3Forms** (https://web3forms.com)
   - Similar to Formspree
   - Free tier: 250 submissions/month
   - No account required

2. **Getform** (https://getform.io)
   - Free tier: 50 submissions/month
   - Built-in spam protection

3. **Basin** (https://usebasin.com)
   - Free tier: 100 submissions/month
   - Good spam filtering

To switch to any of these services, simply replace the fetch URL in `/components/RegistrationModal.tsx` with the endpoint provided by your chosen service.

## Troubleshooting

### Form Submission Not Working?

1. Check browser console for errors
2. Verify the Formspree endpoint URL is correct
3. Ensure your Formspree account email is verified
4. Check your spam folder for submission emails

### File Upload Not Working?

1. Ensure the file is under 10MB
2. Check that the file format is PDF, DOC, or DOCX
3. Verify your Formspree plan supports file uploads

### Not Receiving Emails?

1. Check spam/junk folder
2. Verify the email address in Formspree settings
3. Check Formspree dashboard for submission logs

## Support

For Formspree-specific issues, visit:
- Documentation: https://help.formspree.io
- Support: support@formspree.io
