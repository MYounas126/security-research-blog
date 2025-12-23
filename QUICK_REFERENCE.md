# 📌 Quick Reference Card

Keep this page open while working on your portfolio.

---

## 🚀 Essential Commands

```bash
# Development
npm run dev              # Start server (http://localhost:3000)

# Production
npm run build            # Build for deployment
npm run preview          # Preview production build locally

# Git
git status              # Check what changed
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push                # Push to GitHub
```

---

## 📝 Add New Post (Template)

### Vulnerability Writeup

```bash
# 1. Create file
touch src/content/writeups/your-title.mdx

# 2. Add frontmatter
---
title: "Vulnerability Title (CVE or Reference)"
description: "1-2 sentence summary"
pubDate: 2025-01-15
platform: "HTB"  # HTB, TryHackMe, PortSwigger, Custom, Academic
difficulty: "Hard"  # Easy, Medium, Hard, Insane
tags: ["web", "injection", "authentication"]
---

# 3. Write content
## Reconnaissance
...

## Exploitation
...

## Root Cause Analysis

| Component | Issue | CWE |
|-----------|-------|-----|
| ... | ... | CWE-## |

## CVSS v3.1 Scoring
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8 Critical

## Remediation
[before/after code]

## References
[links to OWASP, CWE, CAPEC, NIST]
```

### Research Post

```bash
# 1. Create file
touch src/content/research/your-topic.mdx

# 2. Add frontmatter
---
title: "Research Topic"
description: "1-2 sentence summary"
pubDate: 2025-01-15
tools: ["tool1", "tool2"]
citation: "Your Name, GIKI, 2025"
---

# 3. Write content
## Introduction

## Methodology

## Findings

## BibTeX Citation
@article{yourname_topic_2025, ...}

## References
```

---

## 🎨 Markdown Formatting

### Headings
```markdown
# H1 - Don't use in posts
## H2 - Main sections
### H3 - Subsections
#### H4 - Details
```

### Code Highlighting
````markdown
```python
# Python code
def vulnerable_code():
    pass
```

```bash
# Bash/shell commands
curl https://example.com
```

```sql
-- SQL queries
SELECT * FROM users WHERE id = 1
```
````

### Callout Boxes
```mdx
import { Callout } from "@/components/Callout.astro";

<Callout type="info" title="Tip">
  Content here...
</Callout>

<Callout type="warning" title="Warning">
  Content here...
</Callout>

<Callout type="danger" title="Danger">
  Content here...
</Callout>

<Callout type="success" title="Success">
  Content here...
</Callout>
```

### Links
```markdown
# Internal
[Link text](/path/to/page/)
[SQL Injection](/writeups/sqli-blind-injection/)

# External
[OWASP](https://owasp.org/)
[CWE-89](https://cwe.mitre.org/data/definitions/89.html)
```

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

---

## 📊 CVSS Quick Reference

### Score Ranges
- 0.0: None
- 0.1-3.9: Low
- 4.0-6.9: Medium
- 7.0-8.9: High
- 9.0-10.0: Critical

### Common Abbreviations
```
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8 Critical

AV = Attack Vector (N=Network, A=Adjacent, L=Local, P=Physical)
AC = Attack Complexity (L=Low, H=High)
PR = Privileges Required (N=None, L=Low, H=High)
UI = User Interaction (N=None, R=Required)
S = Scope (U=Unchanged, C=Changed)
C = Confidentiality (N=None, L=Low, H=High)
I = Integrity (N=None, L=Low, H=High)
A = Availability (N=None, L=Low, H=High)
```

### Common CWE References
- CWE-89: SQL Injection
- CWE-79: Cross-Site Scripting (XSS)
- CWE-20: Improper Input Validation
- CWE-434: Unrestricted Upload
- CWE-862: Missing Authorization
- CWE-287: Improper Authentication
- CWE-327: Broken Cryptography
- CWE-200: Information Disclosure

### Common CAPEC References
- CAPEC-66: SQL Injection
- CAPEC-86: Path Traversal
- CAPEC-88: OS Command Injection
- CAPEC-100: Buffer Overflow
- CAPEC-87: Forceful Browsing
- CAPEC-115: Authentication Bypass

---

## 🌐 File Paths Quick Reference

### Content Locations
```
src/content/
├── writeups/              ← New vulnerability writeups
│   ├── htb-placeholder.md
│   ├── graphql-bola.mdx
│   └── sqli-blind-injection.mdx
└── research/              ← Research posts
    ├── protocol-analysis.md
    └── vulnerability-assessment-methodology.mdx
```

### Page Locations
```
src/pages/
├── index.astro            ← Homepage
├── about.astro            ← About page (CUSTOMIZE THIS!)
├── research.astro         ← Research index
├── research/[slug].astro  ← Dynamic research routes
└── writeups/[slug].astro  ← Dynamic writeup routes
```

### Configuration
```
Project Root/
├── astro.config.mjs       ← Site domain (change if needed)
├── tailwind.config.mjs    ← Theme colors
├── tsconfig.json          ← TypeScript config
├── package.json           ← Dependencies
└── .gitignore             ← Git exclusions
```

---

## 📋 Pre-Deployment Checklist

### Before Pushing to GitHub
- [ ] Run `npm run build` → 0 errors
- [ ] Run `npm run preview` → All pages load
- [ ] Update `src/pages/about.astro` with your info
- [ ] Verify social links are correct
- [ ] Check all external links work
- [ ] Review dark theme displays correctly

### After Pushing to GitHub
- [ ] Create repository on GitHub
- [ ] Set visibility to Public
- [ ] Go to Settings → Pages
- [ ] Set Source to "GitHub Actions"
- [ ] Wait 2-5 minutes for build
- [ ] Visit https://yourusername.github.io
- [ ] Verify all pages load correctly

### Custom Domain (Optional)
- [ ] Claim .tech domain from GitHub Student Pack
- [ ] Add custom domain to GitHub Pages settings
- [ ] Configure DNS at registrar
- [ ] Wait 24 hours for DNS propagation

---

## 🔧 Troubleshooting

### Build Fails
**Error**: "Cannot find module '@astrojs/tailwind'"
```bash
npm install @astrojs/tailwind
```

**Error**: Frontmatter validation fails
→ Check `src/content/config.ts` for required fields
→ Ensure dates are format: `2025-01-15` (YYYY-MM-DD)
→ Ensure arrays have quotes: `tags: ["tag1", "tag2"]`

### Site Doesn't Build on GitHub
→ Check GitHub Actions tab for error message
→ Verify `.github/workflows/deploy.yml` exists
→ Ensure source is "GitHub Actions" in Pages settings

### Custom Domain DNS Not Working
→ Use `nslookup yourdomain.com` to verify
→ Check Namecheap DNS settings
→ Wait 24-48 hours for DNS propagation

---

## 📚 Important Links

### Your Documentation
- [START_HERE.md](START_HERE.md) - Main entry point
- [QUICKSTART.md](QUICKSTART.md) - 5-minute setup
- [CONTRIBUTING.md](CONTRIBUTING.md) - Content guidelines
- [SECURITY.md](SECURITY.md) - Research frameworks
- [DEPLOYMENT.md](DEPLOYMENT.md) - GitHub Pages guide

### External Resources
- [Astro Docs](https://docs.astro.build/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [CVSS Calculator](https://www.first.org/cvss/calculator/3.1)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

## 💡 Pro Tips

### Add Callout Box to Existing Post
```mdx
import { Callout } from "@/components/Callout.astro";

<Callout type="warning" title="Important">
  This is important context...
</Callout>
```

### Create Table for Comparison
```markdown
| Vulnerable | Fixed |
|-----------|-------|
| SELECT * FROM users WHERE id = $input | SELECT * FROM users WHERE id = ? |
| No validation | Parameterized query |
```

### Add Code Line Numbers
Use standard markdown code blocks—Shiki auto-highlights syntax.

### Link to Another Post
```markdown
[View SQL Injection Writeup](/writeups/sqli-blind-injection/)
```

### Update About Page
Edit `src/pages/about.astro` with your:
- Name
- Education (BS Cybersecurity, GIKI)
- Skills (languages, tools, frameworks)
- Background (2-3 paragraphs)
- Social links (GitHub, LinkedIn, email)

### Change Site Domain
Edit `astro.config.mjs` line 1:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com',  // ← Change here
  // ...
})
```

---

## 📞 Ask Questions

If you're stuck:

1. **How do I add a post?** → See [CONTRIBUTING.md](CONTRIBUTING.md)
2. **How do I deploy?** → See [DEPLOYMENT.md](DEPLOYMENT.md)
3. **CVSS help?** → See [SECURITY.md](SECURITY.md)
4. **Git help?** → Search "git [command] tutorial"
5. **Astro help?** → See https://docs.astro.build/

---

**Keep this page bookmarked!** Use it as your quick reference while developing.

Last updated: 2025-01-15
