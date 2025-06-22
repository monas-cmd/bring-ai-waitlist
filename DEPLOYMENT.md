# Deploy Bring AI to Vercel

Follow these steps to deploy your Bring AI waiting list to Vercel:

## 🚀 Quick Deploy (Recommended)

### 1. Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Bring AI waiting list"

# Create a new repository on GitHub and push
git remote add origin https://github.com/yourusername/bring-ai-waitlist.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Click **"Deploy"**

## ⚙️ Environment Variables Setup

### 1. In Vercel Dashboard
1. Go to your project settings
2. Click **"Environment Variables"**
3. Add these variables:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Redeploy
After adding environment variables, redeploy your project:
1. Go to **"Deployments"** tab
2. Click **"Redeploy"** on your latest deployment

## 🔧 Manual Deploy (Alternative)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
vercel
```

### 4. Follow the prompts:
- Set up and deploy? → **Y**
- Which scope? → **Select your account**
- Link to existing project? → **N**
- What's your project name? → **bring-ai-waitlist**
- In which directory is your code located? → **./** (current directory)
- Want to override the settings? → **N**

## 📋 Pre-Deployment Checklist

### ✅ Code Ready
- [ ] All components working locally
- [ ] Supabase integration tested
- [ ] Mobile responsiveness verified
- [ ] No console errors

### ✅ Environment Variables
- [ ] Supabase URL configured
- [ ] Supabase anon key configured
- [ ] Database table created
- [ ] RLS policies set up

### ✅ Build Test
```bash
npm run build
```
Make sure the build completes successfully.

## 🌐 Custom Domain (Optional)

### 1. Add Custom Domain
1. Go to **"Settings"** → **"Domains"**
2. Add your domain (e.g., `waitlist.bringai.com`)
3. Follow DNS configuration instructions

### 2. SSL Certificate
Vercel automatically provides SSL certificates for custom domains.

## 📊 Post-Deployment

### 1. Test Your Live Site
- [ ] Visit your Vercel URL
- [ ] Test email signup functionality
- [ ] Verify database integration
- [ ] Check mobile responsiveness
- [ ] Test all animations and interactions

### 2. Monitor Performance
- [ ] Check Vercel Analytics
- [ ] Monitor database performance
- [ ] Set up error tracking (optional)

### 3. Set Up Monitoring
Consider adding:
- **Sentry** for error tracking
- **Google Analytics** for user insights
- **Supabase Dashboard** for database monitoring

## 🔄 Continuous Deployment

Once deployed, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Rollback to previous versions if needed

## 🚨 Troubleshooting

### Build Errors
```bash
# Check build locally first
npm run build

# Common issues:
# - Missing environment variables
# - TypeScript errors
# - Missing dependencies
```

### Environment Variables Not Working
1. Check variable names (must start with `VITE_`)
2. Redeploy after adding variables
3. Verify in browser console

### Database Connection Issues
1. Check Supabase project status
2. Verify environment variables
3. Test database connection locally

### Performance Issues
1. Check Vercel Analytics
2. Optimize images and assets
3. Consider upgrading Vercel plan

## 📈 Analytics & Monitoring

### Vercel Analytics
- Automatic performance monitoring
- Real user metrics
- Core Web Vitals tracking

### Supabase Monitoring
- Database performance
- Query analytics
- Real-time logs

## 🎉 Success!

Your Bring AI waiting list is now live on Vercel with:
- ✅ Global CDN
- ✅ Automatic SSL
- ✅ Real-time database
- ✅ Mobile optimization
- ✅ Continuous deployment

**Your live URL will be:** `https://your-project-name.vercel.app`

Share it with the world! 🌟 