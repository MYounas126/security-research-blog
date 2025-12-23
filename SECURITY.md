# Security Research Standards

This document outlines the security research methodologies, standards, and frameworks used throughout this portfolio.

## Research Philosophy

This blog functions as a **research-grade security portfolio**, not a clickbait vulnerability aggregator. Each post is written to:

1. **Demonstrate depth**: Show technical understanding, not just exploitation
2. **Provide reproducibility**: Enable readers to understand and validate findings
3. **Maintain academic rigor**: Reference standardized frameworks and peer-reviewed work
4. **Contribute to the field**: Help developers build more secure systems

## Vulnerability Assessment Framework

### The Integrated Approach

All vulnerability writeups use a systematic four-framework integration:

```
┌─────────────────────────────────────────────────┐
│   Vulnerability Writeup Structure               │
├─────────────────────────────────────────────────┤
│                                                 │
│  1. Reconnaissance & Attack Surface Discovery   │
│     ↓                                           │
│  2. Exploitation with Proof-of-Concept          │
│     ↓                                           │
│  3. Root Cause Analysis (CWE)                   │
│     ↓                                           │
│  4. CVSS v3.1 Quantification                    │
│     ↓                                           │
│  5. Remediation with Code Examples              │
│     ↓                                           │
│  6. CAPEC Attack Pattern Documentation          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Framework Details

#### 1. CVSS v3.1 Scoring (Common Vulnerability Scoring System)

CVSS provides a standardized severity rating (0.0 to 10.0):

**Base Score Metrics** (Environmental factors apply):

| Metric | Options | Purpose |
|--------|---------|---------|
| **Attack Vector (AV)** | Network, Adjacent Network, Local, Physical | How can the vulnerability be exploited? |
| **Attack Complexity (AC)** | Low, High | How difficult is the attack to execute? |
| **Privileges Required (PR)** | None, Low, High | What access level is needed? |
| **User Interaction (UI)** | None, Required | Does the user need to do something? |
| **Scope (S)** | Unchanged, Changed | Does it affect other components? |
| **Confidentiality (C)** | None, Low, High | Can data be read? |
| **Integrity (I)** | None, Low, High | Can data be modified? |
| **Availability (A)** | None, Low, High | Can services be disrupted? |

**Severity Ratings**:
- 0.0: None
- 0.1–3.9: Low
- 4.0–6.9: Medium
- 7.0–8.9: High
- 9.0–10.0: Critical

**Example**: SQL Injection in login form
```
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8 Critical

- AV:N     (Network) - can be exploited over the internet
- AC:L     (Low)     - no special conditions needed
- PR:N     (None)    - no authentication required
- UI:N     (None)    - attacker doesn't need user interaction
- S:U      (Changed) - affects only the vulnerable component
- C:H      (High)    - complete data breach possible
- I:H      (High)    - database modification possible
- A:H      (High)    - service disruption possible
```

References:
- [CVSS v3.1 Specification](https://www.first.org/cvss/v3.1/specification-document)
- [CVSS Calculator](https://www.first.org/cvss/calculator/3.1)

#### 2. CWE (Common Weakness Enumeration)

CWE identifies the root cause—the **type of flaw** that allows the vulnerability to exist.

**Common CWEs in Security Research**:

| CWE | Name | Example |
|-----|------|---------|
| CWE-89 | Improper Neutralization of Special Elements used in an SQL Command | SQL Injection |
| CWE-79 | Improper Neutralization of Input During Web Page Generation | Cross-Site Scripting (XSS) |
| CWE-20 | Improper Input Validation | Buffer overflow, format strings |
| CWE-434 | Unrestricted Upload of File with Dangerous Type | Malicious file upload |
| CWE-862 | Missing Authorization | Broken access control |
| CWE-287 | Improper Authentication | Weak password validation |
| CWE-327 | Use of a Broken or Risky Cryptographic Algorithm | Outdated crypto |
| CWE-200 | Exposure of Sensitive Information to an Unauthorized Actor | Information disclosure |

**Why CWE Matters**: Understanding the root cause shows developers *what to fix*, not just *that something is broken*.

**Process**:
1. Identify the vulnerability (e.g., SQL injection)
2. Trace the root cause (e.g., missing parameterized queries)
3. Reference the CWE entry (e.g., CWE-89)
4. Document the fix that addresses the root cause

References:
- [CWE Top 25 Most Dangerous](https://cwe.mitre.org/top25/)
- [CWE List](https://cwe.mitre.org/data/definitions/alphabetical.html)

#### 3. CAPEC (Common Attack Pattern Enumeration and Classification)

CAPEC documents *how* attackers exploit vulnerabilities—the methodical approach and tactics.

**CAPEC vs. CWE**:
- **CWE**: *What is broken?* (root cause)
- **CAPEC**: *How do you exploit it?* (attack methodology)

**Example CAPEC Patterns**:

| CAPEC-ID | Name | Used In |
|----------|------|---------|
| CAPEC-66 | SQL Injection | Database-backed applications |
| CAPEC-86 | Path Traversal | File upload/download systems |
| CAPEC-88 | OS Command Injection | Shell command execution |
| CAPEC-100 | Overflow Buffer | C/C++ applications |
| CAPEC-87 | Forceful Browsing | Web applications |
| CAPEC-115 | Authentication Bypass | Login systems |

**CAPEC Structure**:
```markdown
## Attack Pattern: CAPEC-66 (SQL Injection)

### Prerequisites
- Target system uses SQL database
- User input reaches SQL query construction
- Input validation is insufficient

### Typical Sequence
1. Attacker identifies SQL parameter
2. Attacker injects SQL syntax (', OR, --, /**)
3. Attacker manipulates query logic
4. Attacker extracts/modifies data

### Resources Required
- SQL knowledge
- Reconnaissance tools (Burp Suite, SQLmap)
- Database familiarity
```

References:
- [CAPEC Index](https://capec.mitre.org/data/definitions/index.html)
- [CAPEC-66 SQL Injection](https://capec.mitre.org/data/definitions/66.html)

#### 4. OWASP References

OWASP provides application security standards:

**OWASP Top 10 (2021)**:
1. A01:2021 – Broken Access Control
2. A02:2021 – Cryptographic Failures
3. A03:2021 – Injection
4. A04:2021 – Insecure Design
5. A05:2021 – Security Misconfiguration
6. A06:2021 – Vulnerable and Outdated Components
7. A07:2021 – Identification and Authentication Failures
8. A08:2021 – Software and Data Integrity Failures
9. A09:2021 – Logging and Monitoring Failures
10. A10:2021 – Server-Side Request Forgery (SSRF)

**OWASP API Security Top 10**:
1. API1:2023 – Broken Object-Level Authorization (BOLA)
2. API2:2023 – Broken Authentication
3. API3:2023 – Broken Object Property Level Authorization (BOPLA)
4. API4:2023 – Unrestricted Resource Consumption
5. API5:2023 – Broken Function-Level Authorization (BFLA)
6. API6:2023 – Unrestricted Access to Sensitive Business Flows
7. API7:2023 – Server-Side Request Forgery (SSRF)
8. API8:2023 – Lack of Protection from Automated Threats
9. API9:2023 – Improper Inventory Management
10. API10:2023 – Unsafe Consumption of APIs

References:
- [OWASP Top 10 2021](https://owasp.org/www-project-top-ten/)
- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

#### 5. NIST Framework Integration

The NIST Cybersecurity Framework provides organizational context:

```
┌──────────────┬──────────────┬──────────────┐
│    IDENTIFY  │    PROTECT   │    DETECT    │
├──────────────┼──────────────┼──────────────┤
│ • Asset      │ • Access     │ • Security   │
│   management │   controls   │   monitoring │
│ • Risk       │ • Data       │ • Anomaly    │
│   assessment │   protection │   detection  │
│ • Business   │ • Training   │ • Logging    │
│   context    │ • Encryption │ • Alerting   │
└──────────────┴──────────────┴──────────────┘
        ↓              ↓              ↓
┌──────────────┬──────────────┬──────────────┐
│   RESPOND    │  RECOVER     │              │
├──────────────┼──────────────┤   GOVERN     │
│ • Incident   │ • Restoration│ • Risk       │
│   response   │ • System     │   management │
│ • Forensics  │   hardening  │ • Policy     │
│ • Evidence   │ • Post-incident             │
│   collection │   analysis   │ • Oversight  │
└──────────────┴──────────────┴──────────────┘
```

### Post Structure Template

Every vulnerability writeup follows this structure:

```markdown
# Title: [Vulnerability Name] ([Platform])

## 1. Executive Summary
- Quick 3-5 line overview
- CVSS severity at a glance
- Impact statement

## 2. Reconnaissance
- Information gathering techniques
- Tools used (nmap, Burp Suite, etc.)
- Target analysis

## 3. Attack Surface
- Vulnerable components identified
- Attack vectors documented
- Prerequisites listed

## 4. Exploitation
- Step-by-step attack demonstration
- Proof-of-concept code
- Evidence of success

## 5. Root Cause Analysis

| Component | Issue | CWE | OWASP |
|-----------|-------|-----|-------|
| Input validation | Missing sanitization | CWE-89 | A03:2021 |

## 6. Remediation

### Before (Vulnerable)
[Code example]

### After (Fixed)
[Code example]

## 7. CVSS v3.1 Scoring
CVSS:3.1/[vector string] = [score] ([severity])

[Metric-by-metric explanation]

## 8. CAPEC Attack Pattern
[CAPEC-XX reference and attack sequence]

## 9. References
- NIST Cybersecurity Framework: Identify, Protect, Detect
- OWASP Top 10 / API Security mapping
- Academic papers or standards
```

## Research Post Standards

Research posts document security methodologies, frameworks, and analysis:

### Example: Vulnerability Assessment Methodology

A research post should cover:

1. **Problem Statement**
   - What is the challenge?
   - Why is it important?

2. **Methodology**
   - Frameworks used (CVSS, CWE, CAPEC)
   - Assessment steps
   - Tools and techniques

3. **Application**
   - Real-world examples
   - Case studies from writeups

4. **Conclusion**
   - Key takeaways
   - Best practices

5. **Citation**
   - BibTeX entry for academic use
   - References and further reading

## Static Analysis

This blog uses **static site generation** (Astro) with **zero client-side JavaScript**. This provides:

### Security Benefits

| Feature | Benefit |
|---------|---------|
| **No JavaScript** | No XSS vulnerabilities, no DOM exploitation |
| **No Database** | No SQL injection, no data breach risk |
| **Static Files** | Simple to audit, easy to cache, fast delivery |
| **No User Input** | Posts are pre-rendered; comments are external (if added) |
| **Build-Time Validation** | Content schema checked before deployment |

### Build-Time Checks

```bash
npm run build
```

This validates:
- ✅ Content structure (Zod schema validation)
- ✅ Markdown/MDX syntax (Astro parser)
- ✅ Internal links (no broken references)
- ✅ Frontmatter completeness (required fields present)
- ✅ Code block syntax highlighting (Shiki language support)

## Responsible Disclosure

When documenting vulnerabilities:

1. **Avoid publishing exploits that target unpatched systems**
   - Wait for vendor patches before details
   - Reference CVE IDs for context

2. **Use sanitized examples**
   - Change domain names, IP addresses, usernames
   - Remove production data

3. **Credit discoverers**
   - Link to original advisories
   - Cite security researchers

4. **Provide remediation context**
   - Show how to fix the issue
   - Link to official patches

## Academic Integrity

### Citing Sources

All research and methodologies are properly cited:

**APA Format**:
```
NIST Cybersecurity Framework (2018). Cybersecurity framework: Version 1.1. 
National Institute of Standards and Technology.
https://doi.org/10.6028/NIST.CSWP.04162018
```

**Chicago Style**:
```
National Institute of Standards and Technology. "Cybersecurity Framework: Version 1.1." 
NIST Cybersecurity Framework, April 16, 2018. 
https://doi.org/10.6028/NIST.CSWP.04162018
```

**BibTeX**:
```bibtex
@article{nist_csf_2018,
  author = {National Institute of Standards and Technology},
  title = {{Cybersecurity Framework: Version 1.1}},
  year = {2018},
  doi = {10.6028/NIST.CSWP.04162018}
}
```

### Avoiding Plagiarism

- Paraphrase security concepts with attribution
- Link to original security tools and databases
- Create original proof-of-concept code
- Document your methodology uniquely

## Ethical Hacking Standards

### Scope and Authorization

All documented vulnerabilities must be:

- ✅ **In a controlled environment** (HTB, TryHackMe, labs)
- ✅ **With explicit authorization** (course assignments, CTF platforms)
- ✅ **Time-appropriate** (after patches released, after disclosure agreements)
- ❌ **Never** on production systems without written approval

### Proof-of-Concept Responsibility

When sharing exploits:

1. **Target only intentionally vulnerable systems** (DVWA, WebGoat, PortSwigger labs)
2. **Sanitize configuration and credentials**
3. **Provide mitigations alongside attacks**
4. **Document tool usage and safety precautions**

## Continuous Improvement

This portfolio is maintained to reflect current security research standards:

- **Quarterly reviews**: Update CVSS scores, OWASP mappings
- **Framework updates**: Incorporate NIST v2.0 as it releases
- **New CVEs**: Add writeups for critical vulnerabilities
- **Academic integration**: Maintain peer-review standards

## Resources

### Foundational Standards

- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CVSS v3.1 Specification](https://www.first.org/cvss/v3.1/specification-document)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [CAPEC Patterns](https://capec.mitre.org/)

### Security Research

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [NIST Special Publications](https://csrc.nist.gov/publications/sp/)
- [CVE/NVD Database](https://nvd.nist.gov/)

### Tools & Platforms

- **Vulnerability Assessment**: Burp Suite, OWASP ZAP, Nessus
- **Reverse Engineering**: Ghidra, IDA Pro, Radare2
- **CTF Platforms**: HackTheBox, TryHackMe, PicoCTF
- **Code Analysis**: Semgrep, CodeQL, Fortify

### Learning

- [SANS Security Resources](https://www.sans.org/)
- [Cybrary](https://www.cybrary.it/)
- [eLearnSecurity](https://www.elearnsecurity.com/)
- [PortSwigger Academy](https://portswigger.net/web-security)

---

**Last Updated**: 2025-01-15  
**Maintained By**: Security Research Portfolio  
**Contact**: [GitHub Issues](https://github.com/yourusername/security-research-blog/issues)
