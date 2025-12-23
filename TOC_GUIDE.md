# Table of Contents (TOC) Menu Feature

Your blog posts now feature a professional **table of contents sidebar** similar to 0xdf's HackTheBox writeups!

## 🎯 What You Get

### Desktop View
- **Sticky sidebar** on the right side of each post (screens > 1400px)
- **Auto-generated navigation** from your post headings (H2 and H3 only)
- **Smooth scrolling** when clicking links
- **Emerald accent color** matching your theme
- **Visual hierarchy** with indentation for H3 sub-sections
- **Hover effects** with background highlight and accent color

### Mobile View
- TOC automatically hides on smaller screens
- Keeps your mobile layout clean and readable

## 📋 How It Works

### Automatic Generation

The TOC is **automatically generated** from your post's headings:

```markdown
# Your Post Title (H1 - skipped)

## Main Section (H2) ← Added to TOC
Some content here...

### Subsection (H3) ← Added to TOC (indented)
More content...

## Another Main Section (H2) ← Added to TOC
Content...

#### Deep subsection (H4) ← Not added to TOC
```

### What Gets Included
- ✅ **H2 headings** (main sections) - listed at top level
- ✅ **H3 headings** (subsections) - indented under parent
- ❌ **H1 headings** - skipped (that's your post title)
- ❌ **H4+ headings** - not included (keeps TOC clean)

### Generated HTML IDs

Each heading automatically gets an ID based on its text:

```markdown
## Reconnaissance
↓
<h2 id="reconnaissance">Reconnaissance</h2>
```

## 🎨 TOC Features

### Visual Design
- **Border-left indicator**: Emerald green border highlights hover state
- **Monospace font styling**: Consistent with your dark theme
- **Nested indentation**: H3 items are indented for clarity
- **Smooth scrollbar**: Custom styled scrollbar for the sidebar
- **Color scheme**:
  - Heading text: Emerald-400 (matching your brand)
  - H2 links: Slate-300 gray
  - H3 links: Darker slate-600 (visual hierarchy)
  - Hover state: Emerald-400 with background highlight

### Responsive Behavior
- **Large screens (> 1400px)**: Shows sticky TOC sidebar
- **Medium screens (< 1400px)**: TOC automatically hides
- **Mobile devices**: TOC hidden, full width content
- **Sticky positioning**: TOC follows scroll with `top: 120px` offset

## 📝 Best Practices for TOC

To get the best TOC navigation, follow these guidelines when writing posts:

### 1. Use H2 for Main Sections
```markdown
## Reconnaissance
## Exploitation  
## Root Cause Analysis
## Remediation
```

### 2. Use H3 for Subsections
```markdown
## Reconnaissance

### Nmap Scan
### Service Enumeration
### Vulnerability Discovery
```

### 3. Keep Headings Clear
✅ **Good**: `## SQL Injection Discovery`  
❌ **Avoid**: `## This is a very long heading that describes everything about the vulnerability...`

### 4. Don't Overload with Headings
- Aim for 5-15 items in TOC (not 50+)
- Group related content under H3s
- Too many headings = cluttered sidebar

### 5. Naming Convention
```markdown
## Reconnaissance
## Exploitation
  ### Step 1: Initial Access
  ### Step 2: Privilege Escalation
## Root Cause Analysis
## CVSS v3.1 Scoring
## Remediation
  ### Before (Vulnerable Code)
  ### After (Fixed Code)
## References
```

## 🔧 Example Post Structure

Here's an ideal structure for your vulnerability writeups:

```markdown
---
title: "SQL Injection (Blind)"
description: "Detailed writeup with exploitation and remediation"
pubDate: 2025-01-15
platform: "HTB"
difficulty: "Hard"
tags: ["injection", "database"]
---

## Reconnaissance

### Nmap Scan
Content about initial scanning...

### Web Server Discovery
Content about service discovery...

## Exploitation

### Attack Vector Identification
Details about the vulnerability...

### Proof of Concept
Step-by-step exploitation...

## Root Cause Analysis

### Vulnerable Code
Before code example...

### How the Attack Works
Explanation...

## CVSS v3.1 Scoring

CVSS vector and explanation...

## Remediation

### Before (Vulnerable)
```python
vulnerable_code()
```

### After (Fixed)
```python
fixed_code()
```

## References

External links...
```

This structure creates a clean TOC with:
- 5 main sections (H2)
- 2-3 subsections per section (H3)
- Easy navigation for readers

## 🎯 ToC Styling Details

If you want to customize the TOC appearance, edit `src/components/TableOfContents.astro`:

### Change Colors
```css
.toc-header {
  color: rgb(16, 185, 129);  /* Change emerald color */
}

.toc-link:hover {
  color: rgb(16, 185, 129);  /* Hover color */
  background-color: rgba(16, 185, 129, 0.1);  /* Background tint */
}
```

### Change Position
```css
.toc-sidebar {
  position: sticky;
  top: 120px;  /* Distance from top when scrolling */
  width: 220px;  /* Sidebar width */
}
```

### Change Width Breakpoint
```css
@media (max-width: 1400px) {
  .toc-sidebar {
    display: none;  /* Hide on smaller screens */
  }
}
```

## ✨ Pro Tips

1. **Test on Desktop**: View your posts on a wide screen (> 1400px) to see the TOC
2. **Check Link Scrolling**: Click TOC items to verify smooth scrolling works
3. **View Source**: Open DevTools (F12) → Elements to see generated heading IDs
4. **Mobile Testing**: Use DevTools responsive mode to test mobile view
5. **Long Posts**: TOC really shines on longer posts (500+ words)

## 🐛 Troubleshooting

### TOC Not Appearing?
- Check post has H2 or H3 headings
- Verify screen width > 1400px (it's hidden on mobile)
- Look in browser DevTools → Elements for `<nav class="toc-sidebar">`

### Links Not Working?
- Make sure headings use H2/H3 tags
- Check heading text doesn't have special characters
- Avoid heading text like "##$ Special %@#"

### Styling Issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind CSS build includes `src/components/`
- Verify `TableOfContents.astro` is in `src/components/`

## 📚 Examples

### Current Posts with TOC

All of your existing posts now have TOC:

- **SQL Injection**: `/writeups/sqli-blind-injection/` (8-10 TOC items)
- **GraphQL BOLA**: `/writeups/graphql-bola/` (5-7 TOC items)
- **HTB Analytics**: `/writeups/htb-placeholder/` (6-8 TOC items)
- **Methodology**: `/research/vulnerability-assessment-methodology/` (7-9 TOC items)
- **Protocol Analysis**: `/research/protocol-analysis/` (5-7 TOC items)

Visit each post to see the TOC in action!

## 🎓 What Readers Like About TOC

✅ **Quick Navigation** - Jump to relevant sections instantly  
✅ **Content Preview** - See post structure at a glance  
✅ **Better UX** - Reduces scrolling on long posts  
✅ **Professional Look** - Shows polish and attention to detail  
✅ **Accessibility** - Helps readers with various abilities  
✅ **SEO Benefit** - Search engines love clear structure  

---

**That's it! Your TOC is ready to go.** Each new post automatically generates a navigation menu from its headings.

Next time you add a post, just use clear H2/H3 headings and the TOC will appear automatically on desktop screens! 🚀
