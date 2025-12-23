# Security Research Blog

A professional security research portfolio and technical blog built with **Astro**, optimized for academic rigor and graduate program evaluation.

**Live Site**: https://secsharh.dev  
**Target Audience**: Security researchers, graduate admissions committees, security teams

---

## 🎯 Project Goals

- **Demonstrate technical depth**: Portfolio-grade vulnerability writeups with full exploitation chains
- **Academic credibility**: CVSS scoring, CWE mapping, CAPEC documentation
- **Reproducibility**: Each post includes exact steps, code examples, and proof-of-concept exploits
- **Professional positioning**: Positioned for MS/PhD applications in cybersecurity

---

## 📋 Features

- ✅ **Content Collections**: Separate writeups (CTF/HTB) and research (novel findings)
- ✅ **MDX Support**: React-like components in markdown (Callout, CodeComparison)
- ✅ **Syntax Highlighting**: Shiki with bash, python, http, json, sql, graphql
- ✅ **Dark Theme**: Designed for extended technical reading (0xdf/IppSec style)
- ✅ **Academic Integration**: BibTeX citation support, research index
- ✅ **CI/CD**: Automatic deployment to GitHub Pages on every push
- ✅ **Custom Domain**: GitHub Pages with custom domain support

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git configured

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/security-research-blog.git
cd security-research-blog

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Creating Content

**New Writeup (CTF/HTB):**

```bash
touch src/content/writeups/my-machine.mdx
```

```yaml
---
title: "HTB: Machine Name"
description: "Brief vulnerability summary"
pubDate: 2025-12-23
platform: HackTheBox
difficulty: Hard
tags: [web, rce, privilege-escalation]
---

# Your markdown content here
```

**New Research Post:**

```bash
touch src/content/research/vulnerability-analysis.mdx
```

```yaml
---
title: "Research Topic"
description: "Academic summary"
pubDate: 2025-12-23
tools: [tool1, tool2]
cve: CVE-2024-XXXXX
citation: "Author, Year"
---

# Your research content here
```

### Build for Production

```bash
npm run build        # Generate static site
npm run preview      # Preview production build locally
```

---

## 📁 Project Structure

```
security-research-blog/
├── src/
│   ├── content/
│   │   ├── config.ts              # Content collection schemas
│   │   ├── writeups/              # CTF writeups, HTB machines
│   │   └── research/              # Original research, methodologies
│   ├── components/
│   │   ├── Callout.astro          # Info/warning/danger boxes
│   │   └── CodeComparison.astro   # Vulnerable vs fixed code
│   ├── layouts/
│   │   ├── Layout.astro           # Base HTML shell
│   │   └── PostLayout.astro       # Post-specific styling
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── research.astro         # Research index
│   │   ├── about.astro            # Researcher background
│   │   ├── research/[slug].astro  # Post templates
│   │   └── writeups/[slug].astro
│   └── styles/
│       └── global.css             # Tailwind + custom utilities
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deployment
├── public/                        # Static assets
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind CSS config
├── package.json
├── DEPLOYMENT.md                  # Deployment guide
└── README.md                      # This file
```

---

## 🎨 Design Philosophy

### Dark Theme (Security-First)

- **Background**: `slate-950` (minimal eye strain for extended reading)
- **Text**: `slate-200` (high contrast, readable)
- **Accents**: Emerald (status), Blue (links)
- **Code**: Monospace with syntax highlighting (Shiki + github-dark theme)

### Typography

- **Headers**: Monospace (SF Mono, Monaco, etc.) for technical credibility
- **Body**: System sans-serif for readability
- **Code**: Monospace with padding and rounded corners

### Responsive Design

- Mobile-first approach
- Readable on phones, tablets, desktops
- Code blocks scrollable on mobile (no horizontal overflow)

---

## 📝 Content Standards

Each vulnerability writeup should include:

1. **Executive Summary**: CVSS score, severity, affected component
2. **Overview**: What vulnerability + why it matters
3. **Attack Surface**: Reconnaissance + discovery process
4. **Vulnerability Details**: Technical analysis with code examples
5. **Exploitation**: Step-by-step PoC with output
6. **Root Cause**: Why the vulnerability exists (CWE mapping)
7. **Impact**: Severity assessment (confidentiality, integrity, availability)
8. **Remediation**: Immediate fixes + long-term hardening
9. **References**: OWASP, CWE, CVE, standards

See example posts in `src/content/writeups/` for full structure.

---

## 🔧 Technology Stack

- **Framework**: [Astro 5](https://astro.build/) (static site generator)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + typography plugin
- **Markdown**: [MDX](https://mdxjs.com/) with [Shiki](https://shiki.style/) syntax highlighting
- **Content**: Astro Content Collections API
- **Deployment**: GitHub Pages + GitHub Actions
- **Language**: TypeScript + Astro components

---

## 📚 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)**: Step-by-step GitHub Pages setup
- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)**: AI assistant context
- **[Astro Docs](https://docs.astro.build/)**: Full Astro documentation
- **[Tailwind Docs](https://tailwindcss.com/docs)**: CSS utilities reference

---

## 🚀 Deployment

### Automatic (GitHub Pages)

```bash
git add .
git commit -m "Update content"
git push origin main
# Site auto-builds and deploys within 2-5 minutes
```

### Manual (Local Build)

```bash
npm run build
# Output in ./dist/
# Upload dist/ to hosting provider (AWS S3, Netlify, etc.)
```

### Custom Domain

See [DEPLOYMENT.md](./DEPLOYMENT.md) for GitHub Student Pack domain setup.

---

## 📊 Analytics & Monitoring

Currently **no analytics** (privacy-first):
- No Google Analytics
- No tracking cookies
- No user data collection

To add analytics:
1. Install provider (e.g., Plausible, Fathom)
2. Add script to `src/layouts/Layout.astro`
3. Respect user privacy + GDPR

---

## 🤝 Contributing

This is a personal portfolio, but feedback is welcome:

- **Bug Reports**: Open an issue on GitHub
- **Content Feedback**: Email or discussion post
- **Security Issues**: See `SECURITY.md` (create if needed)

---

## 📄 License

Content (posts, writeups, research):
- **Copyright** © 2025 GIKI Security Research
- **License**: [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)
- You may use, share, and adapt content with proper attribution

Code (Astro config, components, layouts):
- **License**: MIT
- Free to use and modify
- See [LICENSE](./LICENSE) for details

---

## 🔐 Security

- **No secrets in repo**: API keys, credentials never committed
- **Dependency scanning**: Regular updates via Dependabot
- **HTTPS enforced**: GitHub Pages auto-provisions SSL
- **Headers**: Security headers configured in Astro

---

## 📞 Contact

- **Email**: researcher@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Profile](https://linkedin.com)
- **Twitter**: [@yourhandle](https://twitter.com)

---

## 🎓 About

**Creator**: BS Cybersecurity student at GIKI (Ghulam Ishaq Khan Institute), Pakistan

**Goal**: MS/PhD in Cybersecurity at leading European or US institution

**Motivation**: Build a credible, reproducible security research portfolio demonstrating:
- Technical depth in vulnerability analysis
- Rigorous academic methodology
- Professional security communication
- Practical exploit development skills

---

**Last Updated**: December 2025  
**Build Status**: ✅ Passing