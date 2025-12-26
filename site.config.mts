import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'CA',
	favicon: 'favicon.ico',
	owner: 'Cristian Aragon Salazar',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/Kurisari',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/kurisari28',
			icon: Instagram,
		} as SocialLink,
	],
};
