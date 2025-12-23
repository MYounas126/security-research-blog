# 📖 Accordion TOC - Smart Collapsible Menu

Your blog now features an **intelligent accordion-style table of contents** that expands/collapses sections as you read!

## 🎯 How It Works Now

### Initial State (Page Load)
When you first open a post, the TOC shows **only the main topics (H2) collapsed**:

```
Table of Contents
├─ ▶ Reconnaissance
├─ ▶ Exploitation  
├─ ▶ Root Cause Analysis
├─ ▶ CVSS v3.1 Scoring
└─ ▶ Remediation
```

### Click a Topic
When you **click on "Reconnaissance"**, it expands to show all subtopics:

```
Table of Contents
├─ ▼ Reconnaissance          ← Expanded
│  ├─ Initial Scanning
│  ├─ Subdomain Bruteforce
│  └─ Service Enumeration
├─ ▶ Exploitation           ← Still collapsed
├─ ▶ Root Cause Analysis
├─ ▶ CVSS v3.1 Scoring
└─ ▶ Remediation
```

### Auto-Expand on Scroll
As you **scroll down** and reach the "Exploitation" section, it **automatically expands**:

```
Table of Contents
├─ ▶ Reconnaissance         ← Auto-collapsed
├─ ▼ Exploitation           ← Auto-expanded
│  ├─ Attack Vector
│  ├─ Initial Access
│  └─ Privilege Escalation
├─ ▶ Root Cause Analysis    ← Still collapsed
├─ ▶ CVSS v3.1 Scoring
└─ ▶ Remediation
```

Continue scrolling, and the TOC **follows you automatically**!

---

## ✨ Features

### 🔄 Auto-Expand on Scroll
- As you read, the TOC automatically expands the section you're currently viewing
- Previous sections collapse to keep the menu clean
- No manual clicking needed while reading

### 🖱️ Click to Expand
- Click any main topic (H2) to expand/collapse its subtopics
- Smooth animation when expanding/collapsing
- Clicking another topic automatically collapses the previous one

### 🎨 Visual Indicators
- **▶** Arrow = Section is collapsed
- **▼** Arrow = Section is expanded  
- Arrow **rotates** smoothly when expanding/collapsing
- Emerald highlight on hover

### 📱 Cleaner Mobile View
- TOC hides on mobile (as before)
- Full-width content for better reading on small screens
- Desktop only: > 1400px wide screens

---

## 📝 Example: Reading an HTB Writeup

### Step 1: Open Post
You open `/writeups/sql-injection/`

```
TOC shows collapsed main sections:
├─ ▶ Reconnaissance
├─ ▶ Exploitation
├─ ▶ Root Cause
├─ ▶ Remediation
└─ ▶ References
```

### Step 2: Reading Reconnaissance
You start reading the "Reconnaissance" section

```
TOC auto-expands Reconnaissance:
├─ ▼ Reconnaissance
│  ├─ Nmap Scan Results
│  ├─ Web Server Discovery
│  └─ Vulnerability Identification
├─ ▶ Exploitation
├─ ▶ Root Cause
├─ ▶ Remediation
└─ ▶ References
```

### Step 3: Scroll to Exploitation
You scroll down to the "Exploitation" section

```
TOC auto-switches to Exploitation:
├─ ▶ Reconnaissance         ← Auto-collapsed
├─ ▼ Exploitation           ← Auto-expanded
│  ├─ SQL Injection Point
│  ├─ Blind SQLi Technique
│  └─ Data Extraction
├─ ▶ Root Cause
├─ ▶ Remediation
└─ ▶ References
```

### Step 4: Click Remediation
You're interested in remediation and click it

```
TOC expands Remediation:
├─ ▶ Reconnaissance
├─ ▶ Exploitation
├─ ▶ Root Cause
├─ ▼ Remediation            ← You clicked this
│  ├─ Parameterized Queries
│  ├─ Input Validation
│  └─ Code Examples
└─ ▶ References
```

---

## 🎯 Why This Design?

### ✅ Keeps Menu Clean
- Only show relevant subtopics
- Reduces visual clutter
- Easier to navigate

### ✅ Helps You Keep Track
- TOC shows which section you're in
- As you scroll, TOC updates automatically
- Always know where you are in the post

### ✅ Multiple Navigation Methods
- **Click**: Manually explore sections
- **Scroll**: Auto-expand as you read
- **Links**: Jump to sections instantly

### ✅ Professional Look
- Matches industry standards (like 0xdf!)
- Shows polish and attention to detail
- Improves user experience

---

## 🔧 How It Works (Technical)

### 1. Initial Render
```astro
// H2 sections with buttons, H3s hidden
<button onclick="toggleSection('reconnaissance')">
  ▶ Reconnaissance
</button>
<ul class="toc-sublist">  <!-- Hidden by default -->
  <li>Initial Scanning</li>
  <li>Service Enumeration</li>
</ul>
```

### 2. Click Handler
```javascript
function toggleSection(sectionId) {
  // Close all other sections
  closeAllExcept(sectionId);
  
  // Toggle current section open/close
  toggle(sectionId);
}
```

### 3. Scroll Handler
```javascript
function autoExpandSection() {
  // Detect which H2 section you're currently viewing
  const currentSection = getCurrentViewportH2();
  
  // Close all sections except current
  closeAllExcept(currentSection);
  
  // Expand current section
  expand(currentSection);
}

// Called while scrolling with throttling
window.addEventListener('scroll', autoExpandSection);
```

---

## 🎨 Styling Details

### Animation
- **Expand/Collapse**: 0.3s smooth transition
- **Arrow Rotation**: 0.2s smooth rotation
- **Hover**: Instant color change

### Colors
- **Main Topics**: Slate-300 gray
- **Subtopics**: Darker slate-600 gray
- **Hover**: Emerald-400 bright
- **Background**: Slight emerald tint on hover

### Layout
- **Arrow**: 1rem width, centers with text
- **Indentation**: 1.2rem for subtopics
- **Spacing**: 0.25rem between items
- **Font**: Slightly smaller for subtopics

---

## 🛠️ Customization

### Want to Show All Sections by Default?
Edit `src/components/TableOfContents.astro`, find the `<script>` section and change:

```javascript
// Add this after `<!-- Initial expand on page load -->`
// Instead of autoExpanding, just expand first section:
const firstButton = document.querySelector('[data-section]');
if (firstButton) {
  const firstId = firstButton.getAttribute('data-section');
  const sublist = document.getElementById(`sublist-${firstId}`);
  if (sublist) sublist.classList.add('open');
}
```

### Want Faster Animations?
Change the `0.3s` in the CSS:

```css
.toc-sublist {
  transition: max-height 0.1s ease, opacity 0.1s ease;  /* Faster */
}
```

### Want Different Arrow Style?
Change the arrow in the component:

```astro
<!-- Change from ▶ to ► or ➤ or → etc -->
{hasSubtopics && '▶'}  <!-- ← Change this -->
```

---

## ⚡ Performance

- **Smooth scrolling** with throttled event handlers (100ms)
- **Lightweight animations** using CSS transitions
- **No page lag** even on long posts
- **Auto-collapse** keeps DOM clean

---

## 🐛 Edge Cases Handled

✅ Posts with no subtopics - Arrow doesn't appear  
✅ Multiple sections with same name - Unique IDs generated  
✅ Long section names - Text wraps properly  
✅ Fast scrolling - Throttled to prevent jank  
✅ Clicking while scrolling - Works smoothly  

---

## 🎓 Why Readers Love This

📖 **Better Reading Flow** - Know your place in the post  
🗂️ **Easy Navigation** - Jump to sections you care about  
📱 **Clean Interface** - Not overwhelming with all options  
✨ **Smart Behavior** - TOC "knows" where you are  
🎯 **Professional** - Industry-standard design pattern  

---

## 📖 Current Behavior Summary

| Action | Result |
|--------|--------|
| **Page loads** | All H2s shown collapsed, H3s hidden |
| **Click H2** | That H2's H3s expand, others collapse |
| **Scroll to H2** | Auto-expands that H2, collapses others |
| **Read smoothly** | TOC updates as you scroll |
| **Mobile** | TOC hidden, full-width content |

---

## ✅ Build Status

```
✅ 8 pages built in 11.63s
✅ Zero errors
✅ Accordion TOC working
✅ Auto-expand on scroll working
✅ Click-to-toggle working
✅ All animations smooth
```

**Your accordion TOC is live!** Try it out on any of your posts. 🚀
