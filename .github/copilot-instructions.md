# Copilot Instructions for Security Research Blog

## Project Philosophy

This is **not a CMS blog**. This is a **research notebook + vulnerability portfolio** built with Astro, targeting security researchers and graduate admissions committees (MS/PhD programs in Europe/US).

Target audience expectations:
- Technical depth and rigor (0xdf, IppSec level)
- Long-form security writeups (CTFs, vulnerability research)
- Academic positioning (citations, references, methodology)
- No marketing language or visual fluff

## Architecture Overview

```
security-research-blog/
├── src/
│   ├── content/
│   │   ├── config.ts          # Two collections: writeups + research
│   │   ├── writeups/          # CTF/HTB posts (HackTheBox, TryHackMe, etc.)
│   │   └── research/          # Original research, novel findings, methodology
│   ├── layouts/
│   │   ├── Layout.astro       # Base HTML/CSS shell
│   │   └── PostLayout.astro   # Post-specific styling (dark, monospace, wide code)
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   └── research.astro     # Research index (TODO: Phase 5)
│   └── styles/
│       └── global.css         # Tailwind utilities + typography
├── public/
└── astro.config.mjs           # Integrations: Tailwind, MDX, Shiki
```

## Content Collections Structure

### Writeups Collection (`src/content/writeups/`)
- **Purpose**: CTF writeups, HackTheBox machines, PortSwigger labs
- **Format**: `.mdx` files with frontmatter
- **Required frontmatter**:
  ```yaml
  title: "Machine Name | Platform"
  description: "One-line summary"
  pubDate: 2025-12-23
  platform: HackTheBox  # enum: HackTheBox, TryHackMe, PortSwigger, VulnHub, Custom
  difficulty: Hard      # enum: Easy, Medium, Hard, Insane (optional)
  tags: [web, sql-injection, privilege-escalation]
  ```

### Research Collection (`src/content/research/`)
- **Purpose**: Original vulnerability research, novel findings, methodology notes
- **Format**: `.mdx` files with frontmatter
- **Required frontmatter**:
  ```yaml
  title: "Vulnerability Type or Research Topic"
  description: "Academic summary"
  pubDate: 2025-12-23
  cve: CVE-2024-XXXXX  # Optional
  tools: [burp-suite, custom-exploit]  # Optional
  citation: "Author Name, Year"  # For academic referencing
  ```

## Build & Development Commands

```bash
npm run dev      # Start local dev server (http://localhost:3000)
npm run build    # Generate static site (dist/)
npm run preview  # Preview built site locally
```

## Key Conventions & Patterns

### 1. Post Layout Pattern
All writeups and research use `PostLayout.astro`:
```astro
---
import PostLayout from '../../layouts/PostLayout.astro';
export const layout = PostLayout;

const { frontmatter } = Astro.props;
---

# Your markdown content here
```

### 2. Dark Theme + Monospace Styling
- **Base theme**: `bg-slate-950` (dark), `text-slate-200`
- **Accent colors**: Emerald (#10b981) for timestamps, Blue (#3b82f6) for links
- **Code blocks**: Dark GitHub theme (`github-dark`), monospace, 4-space wrap
- **Typography**: `prose prose-invert` (Tailwind typography plugin)

### 3. Code Highlighting
Shiki integration provides syntax highlighting for:
- Bash/Shell scripts
- Python
- HTTP requests
- JSON
- HTML/JavaScript

Configure language-specific highlighting in code fence:
```bash
# Bash example
whoami
```

### 4. Exploit-Style Code Blocks
Use labeled code blocks for vulnerability patterns:

**Vulnerable Code:**
```python
# Direct string interpolation (SQL injection)
query = f"SELECT * FROM users WHERE id={user_id}"
```

**Fixed Code:**
```python
# Parameterized query
cursor.execute("SELECT * FROM users WHERE id=?", (user_id,))
```

### 5. Cross-Post Linking
Link between writeups and research using relative paths:
```astro
[SQL Injection in Web Apps](/research/sql-injection-methods)
[HackTheBox Vaccine Machine](/writeups/htb-vaccine)
```

## External Dependencies & Integration Points

### Astro Integrations
- **@astrojs/mdx**: Enables `.mdx` support (React-like components in markdown)
- **@astrojs/tailwind**: Tailwind CSS via Vite
- **Shiki**: Syntax highlighting (configured in astro.config.mjs)

### Markdown Features
- Code fence language specification: ` ```bash `, ` ```python `, ` ```http `
- Frontmatter YAML parsing via Astro Collections API
- MDX components (TODO: Callout boxes, diagram support in Phase 3)

### Configuration Files
- **astro.config.mjs**: Site domain (`site: 'https://secsharh.dev'`), integrations, Shiki theme
- **package.json**: Dependencies for Astro, MDX, Tailwind, TypeScript
- **tsconfig.json**: Path aliases, strict mode for type safety

## Common Development Tasks

### Adding a New Writeup
1. Create `src/content/writeups/machine-name.mdx`
2. Add required frontmatter (title, platform, difficulty, tags)
3. Write content using Markdown + code fences
4. File naming: lowercase, hyphenated (e.g., `htb-vaccine.mdx`)

### Adding Research Post
1. Create `src/content/research/vulnerability-type.mdx`
2. Add frontmatter (title, description, optional CVE)
3. Organize with H2 headers: Overview, Discovery, Impact, Mitigation, References
4. Include BibTeX citation snippet at bottom (Phase 5)

### Debugging Missing Posts
- Posts must be in correct collection folder (writeups/ or research/)
- Frontmatter YAML must match schema in `src/content/config.ts`
- File extension must be `.mdx` or `.md`
- Run `npm run build` to see validation errors

## References & Key Files

- **Content schema**: [src/content/config.ts](src/content/config.ts) — defines post metadata validation
- **Post styling**: [src/layouts/PostLayout.astro](src/layouts/PostLayout.astro) — dark theme, prose settings
- **Global CSS**: [src/styles/global.css](src/styles/global.css) — Tailwind config utilities
- **Build config**: [astro.config.mjs](astro.config.mjs) — site domain, integrations, Shiki settings

---

**Last Updated**: December 2025
