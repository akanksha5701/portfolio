export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Serd',
    description:
      'An sos Project use to send alert in emergency to added contacts.',
    logo: '/logos/serd.svg',
    link: 'https://github.com/kanik-snippet/emergency-trigger-sos',
    slug: 'serd',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/akanksha5701/portfolio-astro',
    slug: 'vscode-portfolio',
  },

];
