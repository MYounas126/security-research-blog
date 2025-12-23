import { defineCollection, z } from 'astro:content';

// Schema for technical writeups (CTFs, Machines)
const writeups = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		platform: z.enum(['HackTheBox', 'TryHackMe', 'PortSwigger', 'VulnHub', 'Custom']),
		difficulty: z.enum(['Easy', 'Medium', 'Hard', 'Insane']).optional(),
		tags: z.array(z.string()),
	}),
});

// Schema for academic/novel research
const research = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		cve: z.string().optional(), // e.g., CVE-2024-XXXX
		tools: z.array(z.string()).optional(),
		citation: z.string().optional(), // For academic referencing
	}),
});

export const collections = { writeups, research };