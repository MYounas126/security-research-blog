# Deployment Guide: Security Research Blog

## Overview

This site is deployed to GitHub Pages with a custom domain using GitHub Actions for automated CI/CD.

**Site URL**: https://secsharh.dev  
**Repository**: https://github.com/MYounas126/security-research-blog  
**Deployment**: Automatic on every push to `main` branch

---

## Prerequisites

You must complete these steps before initial deployment:

### 1. GitHub Account & Student Pack

- [ ] Have a GitHub account
- [ ] Enroll in [GitHub Student Pack](https://education.github.com/pack)
- [ ] Verify `.edu` email (or other student-verified account)
- [ ] Get free domain credits (if using Namecheap or similar)

### 2. Repository Setup

```bash
# Initialize git (if not done already)
cd security-research-blog
git init
git add .
git commit -m "Initial commit: security research blog"

# Add remote origin
git remote add origin https://github.com/yourusername/security-research-blog.git

# Create main branch and push
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: GitHub Actions
   - **Branch**: main
3. Save

---

## Automatic Deployment (GitHub Actions)

The `.github/workflows/deploy.yml` file automatically:

1. **Triggers** when you push to `main` branch
2. **Builds** the Astro site with `npm run build`
3. **Uploads** the `dist/` directory to GitHub Pages
4. **Deploys** to `https://yourusername.github.io/`

### Monitoring Deployment

```bash
# View deployment status
# Go to: repository → Actions tab

# Check deployment logs
# Click on the latest workflow run
```

---

## Custom Domain Setup

### Option 1: Using GitHub Student Pack (Free)

1. **Claim free domain** from GitHub Student Pack:
   - Go to [GitHub Student Pack benefits](https://education.github.com/pack)
   - Find Namecheap, .tech, or other domain providers
   - Redeem free domain code
   - Register domain (e.g., `secsharh.dev`)

2. **Configure DNS** at registrar:

   **For Namecheap:**
   - Login to Namecheap
   - Domain List → Manage
   - Nameservers → Custom DNS
   - Add GitHub Pages nameservers (provided by GitHub)

   OR use GitHub's custom domain:
   - Domain List → Manage
   - Advanced DNS
   - Add `CNAME` record:
     ```
     Host: @
     Type: CNAME
     Value: yourusername.github.io
     TTL: 3600
     ```

3. **Configure in GitHub**:
   - Repository Settings → Pages
   - Custom domain: `secsharh.dev`
   - ✅ Enforce HTTPS (automatic after 5-10 minutes)

### Option 2: Using GitHub's Subdomainz (Free but Not Custom)

If you don't have a custom domain yet:

- Your site will be available at `https://yourusername.github.io/`
- Update later when you acquire a custom domain

---

## File Structure for Deployment

```
security-research-blog/
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   ├── writeups/
│   │   └── research/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/                    # Static assets (favicons, etc.)
├── .github/
│   └── workflows/
│       └── deploy.yml         # Auto-deployment workflow
├── astro.config.mjs           # Build configuration
├── package.json
├── tsconfig.json
└── dist/                      # Generated on build (not in git)
```

---

## Deployment Checklist

### Pre-Deployment

- [ ] Site builds locally: `npm run build`
- [ ] No broken links (check in browser: `npm run dev`)
- [ ] All posts have correct frontmatter (title, date, tags, etc.)
- [ ] Code examples test and run correctly
- [ ] Images/assets are optimized
- [ ] README.md is up-to-date

### GitHub Setup

- [ ] Repository created and initialized
- [ ] Remote origin configured (`git remote -v`)
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Workflow file exists (`.github/workflows/deploy.yml`)
- [ ] Custom domain configured (if applicable)

### Testing Deployment

```bash
# Push to main branch
git add .
git commit -m "Ready for deployment"
git push origin main

# Monitor build in GitHub Actions
# Wait 2-5 minutes for deployment to complete
# Check site at https://yourusername.github.io (or custom domain)
```

### Post-Deployment

- [ ] Site loads without errors
- [ ] All pages render correctly
- [ ] Search/navigation works
- [ ] Links point to correct URLs
- [ ] No console errors (F12 → Console)
- [ ] Mobile responsive (test on phone)

---

## Updates & Content Publishing

### Publishing New Research

```bash
# Create new post
touch src/content/research/my-research-topic.mdx

# Write content (see post examples for format)
# Build locally to test
npm run build

# Commit and push to deploy
git add src/content/research/my-research-topic.mdx
git commit -m "Add research: My Research Topic"
git push origin main

# Site auto-rebuilds and deploys within 2-5 minutes
```

### Updating Existing Posts

```bash
# Edit post
nano src/content/research/my-research-topic.mdx

# Test build
npm run build

# Commit and push
git add src/content/research/my-research-topic.mdx
git commit -m "Update research: My Research Topic"
git push origin main
```

---

## Troubleshooting

### Build Fails

**Error: "Failed to resolve @astrojs/tailwind"**
- Solution: Run `npm install @astrojs/tailwind`

**Error: "Invalid frontmatter"**
- Solution: Check post YAML syntax at [yamllint.com](https://www.yamllint.com/)

**Error: "Content collection validation failed"**
- Solution: Verify all required fields match `src/content/config.ts` schema

### Site Not Appearing

**GitHub Pages not building:**
1. Check Actions tab → Latest workflow
2. Look for red X (build failed)
3. Click workflow → View logs
4. Fix errors locally, commit, and push again

**Custom domain not resolving:**
1. Wait 5-10 minutes for DNS propagation
2. Check DNS records at registrar
3. Verify custom domain in GitHub Pages settings
4. Test with `dig secsharh.dev` command

**HTTPS not working:**
- GitHub Pages auto-provisions SSL after 5-10 minutes
- Don't manually set up SSL (GitHub handles it)
- Ensure "Enforce HTTPS" is checked in Pages settings

---

## Security & Best Practices

### Repository Security

```bash
# Add .gitignore to exclude unnecessary files
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore

git add .gitignore
git commit -m "Add .gitignore"
```

### Content Security

- Never commit API keys, credentials, or secrets
- Use environment variables for sensitive data
- Review posts before publishing (security/accuracy check)

### Domain Security

- Enable domain auto-renewal (don't lose domain)
- Keep registrar account secure (strong password, 2FA)
- Monitor DNS for unauthorized changes

---

## Monitoring & Maintenance

### Check Build Status

```bash
# View latest deployment
git log --oneline -5

# Check Actions history
# GitHub.com → Repository → Actions tab
```

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update dependencies safely
npm update

# Test build
npm run build

# Commit changes
git add package.json package-lock.json
git commit -m "Update dependencies"
git push origin main
```

---

## Performance Tips

### Build Optimization

- Images: Use Next-gen formats (WebP) or compress with TinyPNG
- Code: Minification happens automatically
- Assets: Lazy load images where possible

### Site Speed

Check performance at:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

---

## Support & Resources

- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Student Pack](https://education.github.com/pack)
- [Namecheap Domain Setup](https://www.namecheap.com/support/knowledgebase/)

---

**Last Updated**: December 2025  
**Maintainer**: GIKI Security Research
