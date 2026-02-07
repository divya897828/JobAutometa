# 🎯 Formspree Endpoint - Exact Update Instructions

## What You Need to Update

**File**: `/components/RegistrationModal.tsx`  
**Line**: 52  
**What to Change**: Replace `YOUR_FORM_ID` with your actual Formspree form ID

---

## Step-by-Step Visual Guide

### 1. Get Your Formspree Form ID

After creating a form in Formspree, you'll see an endpoint URL like:

```
https://formspree.io/f/xyzabc123
                        ↑↑↑↑↑↑↑↑↑
                     This is your Form ID
```

Copy the entire endpoint URL.

---

### 2. Open the File

**File to edit**: `/components/RegistrationModal.tsx`

**Navigate to line 52** (inside the `handleSubmit` function)

---

### 3. Current Code (Before)

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formDataToSubmit = new FormData(form);

  try {
    // Replace with your Formspree endpoint
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                                                           ↑↑↑↑↑↑↑↑↑↑↑↑↑
                                                    REPLACE THIS PART
```

---

### 4. Updated Code (After)

Example if your form ID is `xyzabc123`:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formDataToSubmit = new FormData(form);

  try {
    // Replace with your Formspree endpoint
    const response = await fetch("https://formspree.io/f/xyzabc123", {
                                                           ↑↑↑↑↑↑↑↑↑
                                                      Your actual ID
```

---

## Exact Code to Find and Replace

### FIND THIS (Line 52):
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

### REPLACE WITH:
```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```
*(Replace `xyzabc123` with YOUR actual form ID)*

---

## Example Form IDs

Formspree form IDs typically look like:
- `mldejpqr`
- `xyzabc123`
- `mnopqrst`
- `abcd1234`

**Your form ID will be different!** Use the one from your Formspree dashboard.

---

## How to Find Your Form ID in Formspree

1. **Login** to https://formspree.io
2. **Click** on your form ("JobAutometa Registration Form")
3. **Look** for the "Integration" or "Setup" tab
4. **Copy** the endpoint URL shown (e.g., `https://formspree.io/f/xyzabc123`)
5. **Use** the part after `/f/` as your form ID

---

## Complete Context (Lines 45-60)

Here's the complete section for reference:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formDataToSubmit = new FormData(form);

  try {
    // Replace with your Formspree endpoint
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formDataToSubmit,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setIsSuccess(true);
      // ... rest of the code
```

**Only change the URL on line 52** - don't modify anything else!

---

## Verification

After updating:

1. **Save** the file
2. **Refresh** your browser (or restart dev server)
3. **Test** the form by clicking "Get Started"
4. **Submit** with test data
5. **Check** your email inbox

---

## Common Mistakes to Avoid

### ❌ Wrong - Forgetting quotes:
```typescript
const response = await fetch(https://formspree.io/f/xyzabc123, {
```

### ✅ Correct - Keep the quotes:
```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

---

### ❌ Wrong - Removing the full URL:
```typescript
const response = await fetch("xyzabc123", {
```

### ✅ Correct - Keep the full URL:
```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

---

### ❌ Wrong - Changing other parts:
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "GET",  // ← Don't change this!
```

### ✅ Correct - Only change the form ID:
```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
  method: "POST",  // ← Keep as POST
```

---

## Quick Copy-Paste Template

Replace `YOUR_ACTUAL_FORM_ID_HERE` with your form ID:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_ACTUAL_FORM_ID_HERE", {
```

---

## That's It!

Just this **ONE LINE** needs to be updated. Nothing else!

After updating, save the file and test the form.

---

## Need Help?

If you're stuck:
1. Check that you copied the form ID correctly
2. Verify the quotes are in place
3. Make sure you saved the file
4. Try refreshing your browser
5. Check browser console for errors

**Still stuck?** See `/TROUBLESHOOTING.md` or `/WHAT_TO_DO_NEXT.md`

---

*Last Updated: Registration form implementation complete*
