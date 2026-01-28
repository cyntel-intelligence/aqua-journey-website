# Aqua Journey Swim School - Deployment Guide

This guide will walk you through deploying your new website to Vercel (free hosting).

## Prerequisites

Before you begin, you'll need:
1. A GitHub account (free) - [Sign up here](https://github.com/signup)
2. A Vercel account (free) - [Sign up here](https://vercel.com/signup)

---

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com/signup](https://github.com/signup)
2. Enter your email and create a password
3. Choose a username
4. Verify your account

---

## Step 2: Install Git (if not already installed)

### On Mac:
Open Terminal and type:
```bash
git --version
```

If Git isn't installed, you'll be prompted to install it. Click "Install" when the popup appears.

---

## Step 3: Upload Your Website to GitHub

Open Terminal and run these commands one at a time:

```bash
# Navigate to your project folder
cd ~/aqua-journey-website

# Initialize git (already done, but just in case)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit - Aqua Journey Swim School website"
```

Now create a repository on GitHub:
1. Go to [github.com/new](https://github.com/new)
2. Name it `aqua-journey-website`
3. Keep it **Public** (required for free Vercel hosting) or Private if you prefer
4. Click **Create repository**
5. Copy the commands shown under "…or push an existing repository from the command line"

They'll look like this (with YOUR username):
```bash
git remote add origin https://github.com/YOUR-USERNAME/aqua-journey-website.git
git branch -M main
git push -u origin main
```

Run those commands in Terminal.

---

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in with your GitHub account
2. Click **"Add New Project"**
3. Find and select your `aqua-journey-website` repository
4. Click **Import**
5. Leave all settings as default
6. Click **Deploy**

Wait a minute or two. Once complete, Vercel will give you a URL like:
`https://aqua-journey-website.vercel.app`

**Your website is now live!**

---

## Step 5: Connect Your Custom Domain (Optional)

If you want to use `aquajourneyswimschool.com` instead of the Vercel URL:

1. In Vercel, go to your project → **Settings** → **Domains**
2. Enter your domain: `aquajourneyswimschool.com`
3. Click **Add**
4. Vercel will show you DNS records to add

Then go to your domain registrar (where you bought the domain) and:
1. Find DNS settings
2. Add the records Vercel showed you
3. Wait 24-48 hours for DNS to propagate

---

## Making Changes to Your Website

Whenever you want to update your website:

1. Edit the files in your `aqua-journey-website` folder
2. Open Terminal and run:
```bash
cd ~/aqua-journey-website
git add .
git commit -m "Description of what you changed"
git push
```

Vercel will automatically rebuild and deploy your changes!

---

## Customizing Your Content

### To change text content:
- **Home page:** Edit `src/app/page.tsx`
- **About page:** Edit `src/app/about/page.tsx`
- **Classes page:** Edit `src/app/classes/page.tsx`
- **Contact page:** Edit `src/app/contact/page.tsx`
- **FAQ page:** Edit `src/app/faq/page.tsx`
- **Testimonials:** Edit `src/app/testimonials/page.tsx`

### To change contact information:
Update the Footer in `src/components/Footer.tsx` and the Contact page.

### To change colors:
Edit `src/app/globals.css` - look for the `:root` section with color variables.

### To add your logo:
1. Add your logo image to the `public` folder
2. Update `src/components/Header.tsx` and `src/components/Footer.tsx` to use an `<Image>` tag pointing to your logo

---

## Running Locally (for testing)

To preview changes before deploying:

```bash
cd ~/aqua-journey-website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Press `Ctrl + C` in Terminal to stop the local server.

---

## Getting Help

If you run into issues:
1. Check that you saved all files after editing
2. Make sure you ran all the git commands
3. Check the Vercel dashboard for deployment errors

---

## What's Included

Your website includes:
- ✅ Home page with hero, features, programs overview
- ✅ About page with your story and values
- ✅ Classes page with all program details
- ✅ Contact page with form and info
- ✅ FAQ page with common questions
- ✅ Testimonials page
- ✅ Mobile-responsive design
- ✅ Gift card links to your existing system
- ✅ SEO-optimized meta tags

---

## Need More Help?

Feel free to reach out if you need assistance with:
- Adding new pages
- Integrating a contact form service
- Adding your actual logo/images
- Any other customizations

Good luck with your new website! 🏊‍♂️
