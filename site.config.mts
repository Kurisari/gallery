import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Cristian Aragón Salazar',
	favicon: 'favicon.ico',
	owner: 'Cristian Aragón Salazar',
	description:
		'Portafolio fotográfico de Cristian Aragón Salazar con retratos, paisajes y proyectos editoriales.',
	keywords: [
		'Cristian Aragón Salazar',
		'fotógrafo',
		'fotografía profesional',
		'portafolio de fotografía',
		'retratos',
		'paisajes',
		'fotografía editorial',
		'méxico',
	],
	siteUrl: 'https://gallery.kurisari.dev/',
	ogImage: 'images/profile.jpg',
	profileImage: 'profile.jpg',
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
