# Contributing to Security Research Blog

This guide covers how to add new content, modify existing posts, and maintain the research-grade standards of this portfolio.

## Content Structure

### Adding a New Vulnerability Writeup

1. Create a new file in `src/content/writeups/` with the naming convention: `vulnerability-name.mdx`

2. Use this frontmatter template:

```yaml
---
title: "Vulnerability Title (CVE or Reference)"
description: "1-2 sentence summary for listing pages"
pubDate: 2025-01-15
platform: "HTB" # Options: "HTB", "TryHackMe", "PortSwigger", "Custom", "Academic"
difficulty: "Hard" # Options: "Easy", "Medium", "Hard", "Insane"
tags: ["web", "injection", "authentication"]
---
```

3. Write using these section patterns:

```markdown
## Reconnaissance

Detail what was discovered during initial enumeration...

## Attack Surface

Identify vulnerable endpoints, parameters, or configurations...

## Exploitation

### Attack Vector 1: SQL Injection

Step-by-step breakdown with code examples...

## Root Cause Analysis

| Component | Issue | CWE |
|-----------|-------|-----|
| Input validation | Missing parameterized queries | CWE-89 |

## Remediation

### Vulnerable Code
```python
# Unsafe
query = f"SELECT * FROM users WHERE id = {user_input}"
```

### Fixed Code
```python
# Safe
cursor.execute("SELECT * FROM users WHERE id = ?", (user_input,))
```

## CVSS v3.1 Scoring

**CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H** → Score: **9.8 (Critical)**

Base Metrics:
- Attack Vector: Network
- Attack Complexity: Low
- Privileges Required: None
- User Interaction: None
- Scope: Unchanged
- Confidentiality: High
- Integrity: High
- Availability: High

## References

- [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [CWE-89: Improper Neutralization of Special Elements used in an SQL Command](https://cwe.mitre.org/data/definitions/89.html)
- [CAPEC-66: SQL Injection](https://capec.mitre.org/data/definitions/66.html)
```

### Adding a New Research Post

1. Create a new file in `src/content/research/` with the naming convention: `topic-name.mdx`

2. Use this frontmatter template:

```yaml
---
title: "Research Topic (Framework or Methodology)"
description: "1-2 sentence summary"
pubDate: 2025-01-15
tools: ["tool1", "tool2"]
citation: "Your Name, Institution, 2025"
---
```

3. Write using these section patterns:

```markdown
## Executive Summary

High-level overview for quick scanning...

## Methodology

Explain the approach and framework used...

## Findings

Document key discoveries with code examples...

## Academic Integration

### CVSS Scoring Framework
Explain how severity metrics apply...

### CWE Mapping
Detail Common Weakness Enumeration relationships...

### CAPEC Patterns
Reference Common Attack Pattern Enumeration and Classification...

## BibTeX Citation

```bibtex
@article{yourname_topic_2025,
  title = {{Research Topic}},
  author = {Your Name, GIKI},
  year = {2025},
  url = {https://secsharh.dev/research/topic-name}
}
```

## References

Academic sources in APA or Chicago style...
```

## Markdown Features

### Using Callout Components

```mdx
import { Callout } from "@/components/Callout.astro";

<Callout type="info" title="Pro Tip">
  This is helpful context for the reader...
</Callout>

<Callout type="warning" title="Important">
  Security consideration or critical information...
</Callout>

<Callout type="danger" title="Warning">
  High-risk scenario or worst practice...
</Callout>

<Callout type="success" title="Best Practice">
  Recommended approach or remediation...
</Callout>
```

### Code Highlighting

```mdx
```python
def check_sqli(user_input):
    # This is vulnerable!
    query = f"SELECT * FROM users WHERE id = {user_input}"
    return db.execute(query)
```
```

Supported languages: bash, python, http, json, javascript, typescript, c, sql, html, xml, graphql

### Links and Cross-References

```mdx
# Link to another post
[SQL Injection Writeup](/writeups/sqli-blind-injection/)

# External link
[OWASP Top 10](https://owasp.org/www-project-top-ten/)

# Link to research
[Methodology](/research/vulnerability-assessment-methodology/)
```

## Content Standards

### CVSS Scoring Requirements

All writeups **must** include CVSS v3.1 scoring:

1. Define the attack vector (Network, Adjacent Network, Local, Physical)
2. Assess attack complexity (Low, High)
3. Determine privileges required (None, Low, High)
4. Identify user interaction (None, Required)
5. Evaluate scope (Unchanged, Changed)
6. Rate confidentiality impact (None, Low, High)
7. Rate integrity impact (None, Low, High)
8. Rate availability impact (None, Low, High)

Example: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8 Critical`

### CWE Mapping

All vulnerabilities should reference relevant [CWE entries](https://cwe.mitre.org/):

- **CWE-89**: SQL Injection
- **CWE-79**: Cross-site Scripting
- **CWE-20**: Improper Input Validation
- **CWE-862**: Missing Authorization
- **CWE-434**: Unrestricted Upload of File with Dangerous Type

### CAPEC Patterns

Reference [CAPEC attack patterns](https://capec.mitre.org/) to show systematic methodology:

- **CAPEC-66**: SQL Injection
- **CAPEC-86**: Path Traversal
- **CAPEC-88**: OS Command Injection
- **CAPEC-100**: Overflow Buffer

## Development Workflow

### Local Development

```bash
# Install dependencies (first time)
npm install

# Start development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview
```

### Before Committing

1. Run a build to validate all content:
   ```bash
   npm run build
   ```

2. Check for broken links in your post

3. Verify CVSS/CWE/CAPEC references are accurate

4. Ensure code examples are syntactically correct

### Git Workflow

```bash
# Create a feature branch for new content
git checkout -b feat/new-writeup-sqli

# Make changes and add content files
git add src/content/writeups/new-writeup.mdx

# Commit with descriptive message
git commit -m "Add SQL injection vulnerability writeup with CVSS 9.8 scoring"

# Push to remote
git push origin feat/new-writeup-sqli
```

## Styling Guidelines

### Typography

- **Titles**: Use H2 (`##`) for post sections
- **Code**: Use backticks for inline code, triple backticks with language for blocks
- **Emphasis**: Bold for important terms, italics for emphasis
- **Lists**: Use bullet points for concepts, numbered lists for procedures

### Code Examples

- Always include both **vulnerable** and **fixed** versions
- Add comments explaining the vulnerability
- Provide full, runnable examples when possible
- Use realistic data (sanitized from production)

### Image Guidelines

- Use monospace screenshots for terminal output
- Add alt text for accessibility
- Keep images under 200KB for performance
- Use PNG for diagrams, JPG for photos

## Academic Standards

### Citation Format

All research posts should support academic citation:

```bibtex
@article{author_topic_year,
  title = {{Post Title}},
  author = {Author Name, Institution},
  year = {2025},
  url = {https://secsharh.dev/research/post-slug}
}
```

### References

Use Chicago or APA style:

- **OWASP Top 10 2021**: https://owasp.org/www-project-top-ten/
- **NIST Cybersecurity Framework**: https://www.nist.gov/cyberframework
- **CWE Top 25**: https://cwe.mitre.org/top25/

### Evidence and Reproducibility

- Link to proof-of-concept code (GitHub, security databases)
- Provide step-by-step reproduction instructions
- Include tool versions and environment details
- Reference academic papers where applicable

## Technical Requirements

### Frontmatter Validation

All posts are validated at build time using `src/content/config.ts`:

**Writeup Schema**:
```typescript
- title: string (required)
- description: string (required)
- pubDate: Date (required)
- platform: enum ["HTB", "TryHackMe", "PortSwigger", "Custom", "Academic"] (required)
- difficulty: enum ["Easy", "Medium", "Hard", "Insane"] (optional)
- tags: string[] (required)
```

**Research Schema**:
```typescript
- title: string (required)
- description: string (required)
- pubDate: Date (required)
- tools: string[] (optional)
- citation: string (optional)
```

### Build Checks

The build process validates:

1. **Content structure**: All required frontmatter fields present
2. **MDX syntax**: Correct component imports and usage
3. **Code blocks**: Language tag specified correctly
4. **Links**: No broken internal references
5. **Dates**: Valid ISO format for pubDate

Run locally before pushing:
```bash
npm run build
```

## Quality Checklist

Before publishing a new post:

- [ ] Frontmatter contains all required fields
- [ ] All code examples are syntactically correct
- [ ] CVSS/CWE/CAPEC references are accurate and recent
- [ ] Links (internal and external) are not broken
- [ ] Typography is consistent (H2 for sections, code highlighting)
- [ ] BibTeX citation is properly formatted
- [ ] Post builds without errors (`npm run build`)
- [ ] Content follows dark theme aesthetic (no bright colors in code)
- [ ] Academic tone is maintained throughout
- [ ] References are credible and linked

## Troubleshooting

### Build Fails with "Unknown theme"

Ensure `astro.config.mjs` has correct Shiki theme:
```javascript
markdown: {
  shikiConfig: {
    theme: 'github-dark',
  }
}
```

### MDX Component Not Found

Verify import statement in post:
```mdx
import { Callout } from "@/components/Callout.astro";
```

### Frontmatter Validation Error

Check `src/content/config.ts` for required fields and correct types:
- `pubDate` must be a valid date: `2025-01-15`
- `platform` must be one of the enum options
- `tags` must be an array: `["tag1", "tag2"]`

### Date Format Issues

Always use ISO format: `YYYY-MM-DD`
```yaml
pubDate: 2025-01-15  # ✅ Correct
pubDate: January 15, 2025  # ❌ Invalid
```

## Questions?

Refer to:
- [Astro Documentation](https://docs.astro.build/)
- [Markdown/MDX Guide](https://docs.astro.build/en/guides/markdown-content/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [CVSS v3.1 Specification](https://www.first.org/cvss/v3.1/specification-document)
- [CWE Top 25](https://cwe.mitre.org/top25/)
