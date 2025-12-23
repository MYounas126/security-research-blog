# Quick Start Guide

A complete security research portfolio built with Astro, Tailwind CSS, and MDX.

## 🚀 5-Minute Setup

### Prerequisites
- **Node.js 18+** ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- **Code Editor** (VS Code recommended)

### Installation

```bash
# Clone or navigate to the project
cd security-research-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** in your browser. Hot reload is automatic!

---

## 📝 Adding Your First Post

### Create a Vulnerability Writeup

1. **Create file**: `src/content/writeups/your-vulnerability.mdx`

2. **Add frontmatter**:
```yaml
---
title: "Vulnerability Title (HTB or CVE Reference)"
description: "Quick 1-2 sentence summary"
pubDate: 2025-01-15
platform: "HTB"  # or TryHackMe, PortSwigger, Custom, Academic
difficulty: "Hard"  # Easy, Medium, Hard, Insane
tags: ["web", "injection", "authentication"]
---
```

3. **Write your post**:
```markdown
## Reconnaissance

Describe initial enumeration...

## Exploitation

Show the attack step-by-step...

## Root Cause Analysis

Explain the vulnerability using CWE and CVSS...

## Remediation

Provide fixed code...
```

4. **Build and preview**:
```bash
npm run build
npm run preview
```

### Create a Research Post

1. **Create file**: `src/content/research/your-research-topic.mdx`

2. **Add frontmatter**:
```yaml
---
title: "Research Topic (Methodology or Framework)"
description: "Quick summary"
pubDate: 2025-01-15
tools: ["tool1", "tool2"]
citation: "Your Name, GIKI, 2025"
---
```

---

## 🎨 Key Features

| Feature | Purpose |
|---------|---------|
| **Dark Theme** | Professional, research-grade aesthetic |
| **Content Collections** | Automatic validation of post structure |
| **MDX Support** | Write React components in Markdown |
| **Syntax Highlighting** | Support for 11+ languages (Python, SQL, bash, etc.) |
| **Responsive Design** | Works on mobile, tablet, desktop |
| **Static Generation** | Zero JavaScript, super fast, secure |
| **Academic Positioning** | BibTeX citations, CVSS/CWE/CAPEC integration |
| **GitHub Pages Ready** | Deploy for free with custom domain support |

---

## 📂 Project Structure

```
security-research-blog/
├── src/
│   ├── assets/               # Images, fonts
│   ├── components/           # Reusable Astro components
│   │   ├── Callout.astro    # Info/Warning/Danger boxes
│   │   └── CodeComparison.astro
│   ├── content/              # Posts and metadata
│   │   ├── config.ts         # Schema validation
│   │   ├── research/         # Research posts
│   │   └── writeups/         # Vulnerability writeups
│   ├── layouts/              # Page templates
│   │   ├── Layout.astro      # Base HTML shell
│   │   └── PostLayout.astro  # Post template (dark, monospace)
│   ├── pages/                # Route handlers
│   │   ├── index.astro       # Homepage
│   │   ├── about.astro       # About page
│   │   ├── research.astro    # Research index
│   │   ├── research/[slug].astro   # Dynamic research routes
│   │   └── writeups/[slug].astro   # Dynamic writeup routes
│   └── styles/               # Global CSS
│       └── global.css        # Typography, utilities
├── public/                   # Static assets (favicon, etc.)
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS config
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies
├── README.md                 # Project overview
├── CONTRIBUTING.md           # Content guidelines
├── SECURITY.md              # Research standards
└── DEPLOYMENT.md            # GitHub Pages setup
```

---

## 🔨 Common Commands

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run check

# Format code (if configured)
npm run format
```

---

## 📚 Writing Tips

### Use Callout Components

```mdx
import { Callout } from "@/components/Callout.astro";

<Callout type="info" title="Pro Tip">
  This vulnerability is common in legacy systems...
</Callout>

<Callout type="warning" title="Important">
  Never test on production systems without authorization!
</Callout>

<Callout type="danger" title="Warning">
  This attack requires admin privileges...
</Callout>

<Callout type="success" title="Best Practice">
  Use parameterized queries to prevent SQL injection...
</Callout>
```

### Include CVSS Scoring

Every vulnerability writeup should include CVSS v3.1 scoring:

```markdown
## CVSS v3.1 Scoring

**CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H** → Score: **9.8 Critical**

- **AV:N** (Network) - Exploitable over the internet
- **AC:L** (Low) - No special conditions required
- **PR:N** (None) - No authentication needed
- **UI:N** (None) - No user interaction required
- **S:U** (Unchanged) - Affects only the vulnerable component
- **C:H** (High) - Complete data breach possible
- **I:H** (High) - Data modification possible
- **A:H** (High) - Service disruption possible
```

### Format Code Examples

Always show vulnerable AND fixed code:

````markdown
### Vulnerable Code
```python
# SQL Injection Risk!
query = f"SELECT * FROM users WHERE id = {user_input}"
db.execute(query)
```

### Fixed Code
```python
# Safe with parameterized query
cursor.execute("SELECT * FROM users WHERE id = ?", (user_input,))
```
````

### Add Academic References

```markdown
## References

- [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [CWE-89: SQL Injection](https://cwe.mitre.org/data/definitions/89.html)
- [CAPEC-66: SQL Injection](https://capec.mitre.org/data/definitions/66.html)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
```

---

## 🚀 Deployment

### Deploy to GitHub Pages (Free)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Security research blog ready for deployment"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Pages section → Source: GitHub Actions
   - Workflow builds automatically

3. **Custom Domain** (Optional):
   - Claim free `.tech` domain from GitHub Student Pack
   - Add to repository Settings → Pages → Custom domain
   - Configure DNS at registrar

Your site will be live at `https://yourusername.github.io` or your custom domain!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 🛠️ Customization

### Change Site Title and Description

Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://secsharh.dev',  // Your domain
  // ...
})
```

Edit `src/layouts/Layout.astro`:
```astro
<title>{title}</title>
<meta name="description" content="Your description here" />
```

### Modify Color Scheme

Edit `src/styles/global.css` for dark theme colors:
```css
:root {
  --bg-primary: rgb(2, 8, 23);    /* Slate-950 */
  --text-primary: rgb(226, 232, 240); /* Slate-200 */
  --accent: rgb(16, 185, 129);    /* Emerald-500 */
}
```

Or modify `tailwind.config.mjs` for Tailwind theme.

### Add Navigation Links

Edit `src/pages/index.astro` hero section:
```astro
<nav class="flex gap-4">
  <a href="/research">Research</a>
  <a href="/about">About</a>
  <a href="/writeups">Writeups</a>
  <a href="https://github.com/yourname">GitHub</a>
</nav>
```

---

## 🐛 Troubleshooting

### Build fails with "Unknown theme"

Check `astro.config.mjs` has:
```javascript
markdown: {
  shikiConfig: {
    theme: 'github-dark',
  }
}
```

### MDX component not found

Verify import in your post:
```mdx
import { Callout } from "@/components/Callout.astro";
```

### Port 3000 already in use

Use a different port:
```bash
npm run dev -- --port 3001
```

### Git remote not configured

Add GitHub repository as remote:
```bash
git remote add origin https://github.com/yourusername/security-research-blog.git
```

---

## 📖 Learn More

- **[Astro Documentation](https://docs.astro.build/)** - Framework reference
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Styling system
- **[MDX Documentation](https://mdxjs.com/)** - Markdown + JSX
- **[CVSS Calculator](https://www.first.org/cvss/calculator/3.1)** - Score vulnerabilities
- **[CWE Top 25](https://cwe.mitre.org/top25/)** - Common weaknesses
- **[OWASP Resources](https://owasp.org/)** - Security standards

---

## 📋 Content Checklist

Before publishing each post, verify:

- [ ] Frontmatter includes all required fields (title, description, pubDate, platform/tags)
- [ ] Post uses H2 (`##`) for main sections
- [ ] Code examples are syntactically correct
- [ ] Vulnerable AND fixed code are shown (for writeups)
- [ ] CVSS v3.1 scoring is complete (for writeups)
- [ ] CWE and CAPEC references are accurate
- [ ] External links are not broken
- [ ] Images are optimized (< 200KB)
- [ ] Post builds without errors: `npm run build`
- [ ] BibTeX citation is formatted correctly (for research)

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Content structure and frontmatter
- Markdown and MDX features
- Code formatting standards
- CVSS/CWE/CAPEC integration
- Git workflow

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/security-research-blog/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/security-research-blog/discussions)
- **Contact**: [Your Email]

---

## 📄 License

This portfolio is licensed under the **MIT License** unless otherwise specified. Academic references and research follow their original licensing.

---

**Happy blogging! 🔒**

Start with a simple writeup, build your portfolio, and showcase your security research to graduate programs worldwide.
