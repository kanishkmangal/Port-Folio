import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

// ── Static Data ──────────────────────────────────────────────────────────────
// Edit these arrays to update your portfolio content.

export type Skill = {
    id: string;
    name: string;
    category: 'Languages' | 'Frameworks' | 'Tools';
};

export type Project = {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    imageUrl?: string;
    featured: boolean;
};

const SKILLS: Skill[] = [
    // Languages
    { id: '1',  name: 'TypeScript',  category: 'Languages' },
    { id: '2',  name: 'JavaScript',  category: 'Languages' },
    { id: '3',  name: 'Java',       category: 'Languages' },
    { id: '4',  name: 'C',       category: 'Languages' },
    { id: '5',  name: 'C++',       category: 'Languages' },
    { id: '6',  name: 'Python',      category: 'Languages' },
    { id: '7',  name: 'HTML / CSS',  category: 'Languages' },
    { id: '8',  name: 'PHP',         category: 'Languages' },
    // Frameworks
    { id: '9',  name: 'React',       category: 'Frameworks' },
    { id: '10',  name: 'Next.js',     category: 'Frameworks' },
    { id: '11',  name: 'Angular.js',     category: 'Frameworks' },
    { id: '12', name: 'Node.js',     category: 'Frameworks' },
    { id: '13', name: 'Express.js',  category: 'Frameworks' },
    { id: '14', name: 'Tailwind CSS',category: 'Frameworks' },
    // Tools
    { id: '15', name: 'Git & GitHub',category: 'Tools' },
    { id: '16', name: 'PostgreSQL',  category: 'Tools' },
    { id: '17', name: 'MongoDB',     category: 'Tools' },  
    { id: '18', name: 'VS Code', category: 'Tools' },
    { id: '19',  name: 'MYSQL',       category: 'Tools' },
    { id: '20',  name: 'PostMan',       category: 'Tools' },
];

const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Project One',
        description:
            'A full-stack web application built with Next.js and MongoDB. Implements authentication, CRUD operations, and a modern UI.',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
        githubLink: 'https://github.com',
        liveLink: 'https://example.com',
        featured: true,
    },
    {
        id: '2',
        title: 'Project Two',
        description:
            'A real-time chat application using WebSockets and Node.js. Supports multiple rooms and direct messaging.',
        technologies: ['Node.js', 'Socket.io', 'React', 'Express'],
        githubLink: 'https://github.com',
        liveLink: 'https://example.com',
        featured: true,
    },
    {
        id: '3',
        title: 'Project Three',
        description:
            'An e-commerce platform with Stripe integration, product management, and a responsive storefront.',
        technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
        githubLink: 'https://github.com',
        liveLink: 'https://example.com',
        featured: false,
    },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <About />
            <Skills skills={SKILLS} />
            <Projects initialProjects={PROJECTS} />
            <Contact />
        </div>
    );
}
