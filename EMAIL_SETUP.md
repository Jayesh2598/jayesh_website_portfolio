# Email Setup Guide

## Setting up the Contact Form Email Functionality

The contact form is now connected to send emails to `jayesh2598@gmail.com` using the Resend email service.

### Step 1: Get a Resend API Key

1. Go to [Resend.com](https://resend.com) and create a free account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key

### Step 2: Set up Environment Variables

Create a `.env.local` file in your project root with the following content:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Replace `your_resend_api_key_here` with the actual API key from Step 1.

### Step 3: Configure the From Email Address

In the file `src/app/api/contact/route.ts`, update the `from` field in the email configuration:

```typescript
from: 'Portfolio Contact <noreply@yourdomain.com>', // Update this line
```

**Options:**
- **Option A (Recommended):** Use your own domain
  1. Add your domain to Resend
  2. Verify the domain
  3. Use `noreply@yourdomain.com` as the from address

- **Option B (Quick Setup):** Use Resend's default sender
  - Change to: `from: 'onboarding@resend.dev'`
  - Note: This is for testing only and has limitations

### Step 4: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email at `jayesh2598@gmail.com`

### Features

- ✅ Form validation (name, email, message required)
- ✅ Email format validation
- ✅ Professional HTML email template
- ✅ Error handling and user feedback
- ✅ Rate limiting (handled by Resend)
- ✅ Spam protection

### Email Template

The emails you receive will include:
- Contact details (name, email, date)
- The message content
- Professional formatting
- Clear identification as a portfolio contact form submission

### Troubleshooting

If emails aren't being sent:
1. Check that your API key is correct
2. Verify the from email address is properly configured
3. Check the browser console for any errors
4. Check the server logs for API errors

### Security Notes

- The API key is stored securely in environment variables
- Form validation prevents malicious input
- Rate limiting is handled by Resend
- No sensitive data is logged 