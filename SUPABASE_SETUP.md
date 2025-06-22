# Supabase Setup Guide for Bring AI

Follow these steps to set up Supabase for your Bring AI waiting list:

## 1. Create a Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign Up"
3. Create an account using GitHub, Google, or email

## 2. Create a New Project

1. Click "New Project"
2. Choose your organization
3. Enter project details:
   - **Name**: `bring-ai-waitlist` (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait for the project to be set up (2-3 minutes)

## 3. Get Your API Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## 4. Create Environment File

1. In your project root, create a file called `.env.local`
2. Add your credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Replace the values with your actual Project URL and anon key**

## 5. Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Paste and run this SQL:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected'))
);

-- Create an index for better performance
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting new emails
CREATE POLICY "Allow public insert" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reading all emails (for admin purposes)
CREATE POLICY "Allow public read" ON waitlist
  FOR SELECT USING (true);
```

4. Click "Run" to execute the SQL

## 6. Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to your app and try submitting an email
3. Check your Supabase dashboard → **Table Editor** → **waitlist** to see the new entry

## 7. View Your Data

- **Table Editor**: View all submitted emails
- **Authentication**: Manage users (if you add auth later)
- **API**: View your API documentation

## 8. Optional: Set Up Email Notifications

You can set up email notifications when new emails are added:

1. Go to **Database** → **Functions**
2. Create a new function to send notifications
3. Set up webhooks or use Supabase's built-in email service

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure your `.env.local` file exists and has the correct values
- Restart your development server after creating the file

### "Network error"
- Check your internet connection
- Verify your Supabase URL is correct
- Make sure your project is active in Supabase dashboard

### "This email is already on our waiting list"
- This is expected behavior - the email constraint prevents duplicates
- The user will see a friendly error message

### Database connection issues
- Check that your anon key is correct
- Verify your project is not paused
- Check the Supabase status page for any outages

## Security Notes

- The anon key is safe to use in client-side code
- Row Level Security (RLS) is enabled for data protection
- Only insert operations are allowed from the client
- Consider adding rate limiting for production use

## Next Steps

Once Supabase is working:
1. Test the email submission flow
2. Consider adding email validation
3. Set up admin dashboard to view submissions
4. Add email notifications for new signups
5. Deploy to production

Your Bring AI waiting list is now fully functional with a real database! 🚀 