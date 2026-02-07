# 📝 Form Fields & Validation Guide

## Overview

The registration form now includes **7 fields** with proper format validation to ensure high-quality data collection.

---

## 🔍 Field Details & Validation

### 1. First Name ✅ **REQUIRED**

**Type**: Text Input  
**Validation Pattern**: `^[A-Za-z\s\-']{2,50}$`

**What's Allowed**:
- ✅ Letters (A-Z, a-z)
- ✅ Spaces
- ✅ Hyphens (-)
- ✅ Apostrophes (')
- ✅ Minimum 2 characters
- ✅ Maximum 50 characters

**Examples**:
- ✅ Valid: "John", "Mary-Jane", "O'Connor", "Jean Paul"
- ❌ Invalid: "J" (too short), "John123" (numbers), "John@" (special chars)

**Error Message**: "Please enter a valid first name (2-50 characters, letters only)"

---

### 2. Last Name ✅ **REQUIRED**

**Type**: Text Input  
**Validation Pattern**: `^[A-Za-z\s\-']{2,50}$`

**What's Allowed**:
- ✅ Letters (A-Z, a-z)
- ✅ Spaces
- ✅ Hyphens (-)
- ✅ Apostrophes (')
- ✅ Minimum 2 characters
- ✅ Maximum 50 characters

**Examples**:
- ✅ Valid: "Smith", "Van Der Berg", "O'Neill", "Lee-Johnson"
- ❌ Invalid: "S" (too short), "Smith123" (numbers), "Smith!" (special chars)

**Error Message**: "Please enter a valid last name (2-50 characters, letters only)"

---

### 3. Email ✅ **REQUIRED**

**Type**: Email Input  
**Validation Pattern**: `^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`

**What's Allowed**:
- ✅ Standard email format
- ✅ Letters, numbers, dots, underscores, hyphens
- ✅ Must have @ symbol
- ✅ Must have domain name
- ✅ Must have TLD (e.g., .com, .org)

**Examples**:
- ✅ Valid: "john.doe@example.com", "user+tag@company.co.uk"
- ❌ Invalid: "john@", "john.doe", "@example.com", "john doe@example.com"

**Error Message**: "Please enter a valid email address (e.g., name@example.com)"

---

### 4. Phone Number ✅ **REQUIRED**

**Type**: Tel Input  
**Validation Pattern**: `^[0-9]{10}$`

**What's Allowed**:
- ✅ Exactly 10 digits
- ✅ Numbers only (0-9)
- ✅ No spaces, hyphens, or special characters
- ✅ No country code

**Examples**:
- ✅ Valid:
  - "5551234567"
  - "1234567890"
  - "9876543210"
- ❌ Invalid:
  - "+1 555-123-4567" (has country code and formatting)
  - "(555) 123-4567" (has formatting)
  - "555 123 4567" (has spaces)
  - "555-123-4567" (has hyphens)
  - "555123456" (only 9 digits)
  - "55512345678" (11 digits)
  - "phone" (not numbers)

**Error Message**: "Please enter exactly 10 digits (e.g., 5551234567)"

---

### 5. Service Selection ✅ **REQUIRED**

**Type**: Dropdown Select  
**Validation**: Must select one option

**Available Options**:
1. **Resume Optimization** - Value: `resume-optimization`
2. **Full Time Application Support** - Value: `full-time-application-support`
3. **Career Guidance** - Value: `career-guidance`
4. **Interview Prep** - Value: `interview-prep`
5. **LinkedIn Guidance** - Value: `linkedin-guidance`
6. **Networking Guidance** - Value: `networking-guidance`

**Placeholder**: "Select a service"

**Error**: Browser automatically prevents submission if not selected

---

### 6. Resume Upload ⚪ **OPTIONAL**

**Type**: File Upload  
**Validation**: Accept specific file types only

**What's Allowed**:
- ✅ PDF files (.pdf)
- ✅ Microsoft Word (.doc, .docx)
- ✅ Maximum file size: 10MB (Formspree limit)

**User Experience**:
- Click to upload or drag & drop
- Shows file name after selection
- Green checkmark when file selected
- Can be left empty

**Examples**:
- ✅ Valid: "resume.pdf", "my_cv.docx", "john_doe_resume.doc"
- ❌ Invalid: "resume.txt", "resume.jpg", "resume.zip", files > 10MB

**Visual Feedback**:
```
Before upload:
┌─────────────────────────────────────┐
│  📤 Click to upload resume          │
│     (PDF, DOC, DOCX)                │
└─────────────────────────────────────┘

After upload:
┌─────────────────────────────────────┐
│  📤 john_doe_resume.pdf             │
└─────────────────────────────────────┘
✅ john_doe_resume.pdf
```

---

### 7. Extra Info ⚪ **OPTIONAL** 🆕 NEW

**Type**: Textarea  
**Validation**: Character count limit

**What's Allowed**:
- ✅ Any text (letters, numbers, special characters)
- ✅ Multiline text
- ✅ Maximum 1000 characters
- ✅ Can be left empty

**Features**:
- Real-time character counter
- 4 rows tall (expandable on input)
- Non-resizable (locked height)

**Placeholder**: "Tell us anything else that might help us serve you better..."

**Character Counter**: Shows "0/1000 characters" and updates in real-time

**Examples of What Users Might Write**:
- ✅ "I'm looking for software engineering roles in fintech"
- ✅ "I need help with F1 visa OPT applications"
- ✅ "Prefer remote positions on the West Coast"
- ✅ "I have 5 years of experience in data science"

**Visual Layout**:
```
┌───────────────────────────────────────┐
│ Any extra info you want to share?    │
│ (Optional)                            │
│                                       │
│ ┌─────────────────────────────────┐  │
│ │ Tell us anything else that might│  │
│ │ help us serve you better...     │  │
│ │                                 │  │
│ │                                 │  │
│ └─────────────────────────────────┘  │
│                       245/1000 chars │
└───────────────────────────────────────┘
```

---

## 🎨 Form Layout

### Visual Structure

```
┌─────────────────────────────────────────────┐
│  Get Started with JobAutometa               │
│  Fill out the form below and we'll get in   │
│  touch with you shortly.                    │
├─────────────────────────────────────────────┤
│                                             │
│  [First Name *]     [Last Name *]           │
│                                             │
│  [Email *]                                  │
│                                             │
│  [Phone Number *]                           │
│                                             │
│  [Service Selection * ▼]                    │
│                                             │
│  [📤 Upload Resume (Optional)]              │
│                                             │
│  [Extra Info (Optional)]                    │
│  ┌─────────────────────────────────┐       │
│  │ Textarea with 1000 char limit   │       │
│  │                                 │       │
│  └─────────────────────────────────┘       │
│                         0/1000 chars       │
│                                             │
│  [  Submit  ]  [ Cancel ]                  │
└─────────────────────────────────────────────┘
```

---

## ⚠️ Validation Behavior

### On Submit

**All Required Fields Must Be Filled**:
- ❌ If any required field is empty → Browser shows error
- ❌ If format is invalid → Browser shows pattern error message
- ✅ If all valid → Form submits to Formspree

**Optional Fields**:
- ⚪ Resume: Can be empty or contain valid file
- ⚪ Extra Info: Can be empty or contain up to 1000 characters

### Real-Time Validation

**Browser Native Validation**:
- Shows red border on invalid fields
- Displays custom error messages
- Prevents form submission until valid

**Custom Features**:
- Character counter updates as user types in Extra Info
- File name displays immediately after selection
- All inputs show focus styles (blue border)

---

## 📧 Email Format You'll Receive

When a user submits the form, you'll receive:

```
From: Formspree <noreply@formspree.io>
To: your-email@example.com
Subject: New submission from JobAutometa Registration Form

─────────────────────────────────────────────
First Name: Rajesh
Last Name: Kumar
Email: rajesh.kumar@gmail.com
Phone: +1 (555) 123-4567
Service: full-time-application-support
Extra Info: I'm an F1 visa student looking for 
            full-time software engineering roles 
            in the Bay Area. I have 3 years of 
            experience with React and Node.js.

Attachments:
📎 rajesh_kumar_resume.pdf (245 KB)
─────────────────────────────────────────────
```

---

## 🔧 Technical Implementation

### Validation Attributes Used

```typescript
// First Name & Last Name
pattern="^[A-Za-z\s\-']{2,50}$"
title="Please enter a valid first name (2-50 characters, letters only)"

// Email
pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
title="Please enter a valid email address (e.g., name@example.com)"

// Phone
pattern="^[0-9]{10}$"
title="Please enter exactly 10 digits (e.g., 5551234567)"

// Resume
accept=".pdf,.doc,.docx"

// Extra Info
maxLength={1000}
rows={4}
```

---

## 🎯 Why These Validations?

### Name Validation
- **Prevents**: Numbers, special characters
- **Allows**: International names with hyphens/apostrophes
- **Goal**: Clean, professional data

### Email Validation
- **Prevents**: Invalid email formats
- **Allows**: Standard business and personal emails
- **Goal**: Ensure deliverability

### Phone Validation
- **Prevents**: Text, invalid formats
- **Allows**: International formats, various separators
- **Goal**: Accept global phone numbers

### File Validation
- **Prevents**: Wrong file types, oversized files
- **Allows**: Standard resume formats
- **Goal**: Ensure compatibility and prevent abuse

### Extra Info
- **Prevents**: Spam (with 1000 char limit)
- **Allows**: Flexible user input
- **Goal**: Collect additional context without overwhelming

---

## 🧪 Test Cases

### Test Valid Submissions

1. **Minimal Required**:
   - First Name: "John"
   - Last Name: "Doe"
   - Email: "john@example.com"
   - Phone: "5551234567"
   - Service: Select any
   - Result: ✅ Should submit

2. **All Fields**:
   - All required fields filled
   - Resume uploaded
   - Extra info added
   - Result: ✅ Should submit

3. **International Format**:
   - Name: "José María"
   - Phone: "+44 20 7946 0958"
   - Email: "jose@example.co.uk"
   - Result: ✅ Should submit

### Test Invalid Submissions

1. **Short Name**:
   - First Name: "J"
   - Result: ❌ Shows error

2. **Invalid Email**:
   - Email: "john@"
   - Result: ❌ Shows error

3. **Invalid Phone**:
   - Phone: "phone"
   - Result: ❌ Shows error

4. **Wrong File Type**:
   - Resume: "resume.txt"
   - Result: ❌ File not accepted

5. **Too Long Extra Info**:
   - Extra Info: 1001 characters
   - Result: ❌ Truncated at 1000

---

## 🎨 Customization Examples

### Change Name Pattern (Allow Numbers)

```typescript
pattern="^[A-Za-z0-9\s\-']{2,50}$"
```

### Change Phone Pattern (US Only)

```typescript
pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
title="Please enter a US phone number (e.g., (555) 123-4567)"
```

### Change Extra Info Limit

```typescript
maxLength={500}  // Change from 1000 to 500
```

### Change Textarea Rows

```typescript
rows={6}  // Change from 4 to 6 rows
```

---

## 📱 Mobile Behavior

### Input Types on Mobile

- **text**: Standard keyboard
- **email**: Email keyboard (@ key easily accessible)
- **tel**: Numeric keypad with special characters
- **file**: Opens file picker/camera

### Responsive Design

- Fields stack vertically on small screens
- Touch-friendly tap targets (44px minimum)
- Proper spacing for mobile keyboards

---

## ✅ Summary

| Field | Required | Format | Max Length |
|-------|----------|--------|------------|
| First Name | ✅ | Letters, spaces, -' | 50 chars |
| Last Name | ✅ | Letters, spaces, -' | 50 chars |
| Email | ✅ | Valid email | - |
| Phone | ✅ | Valid phone | - |
| Service | ✅ | Dropdown | - |
| Resume | ⚪ | PDF/DOC/DOCX | 10MB |
| Extra Info | ⚪ | Any text | 1000 chars |

**Total Fields**: 7 (5 required, 2 optional)  
**Estimated Fill Time**: 2-3 minutes  
**Mobile Friendly**: ✅ Yes  
**Accessibility**: ✅ Full ARIA support

---

*Last Updated: Field validation and Extra Info field added*