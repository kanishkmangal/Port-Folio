import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Resume from '@/components/sections/Resume';
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
    { id: '7',  name: 'HTML5',       category: 'Languages' },
    { id: '8',name: 'CSS3',        category: 'Languages' },
    { id: '9',  name: 'PHP',         category: 'Languages' },
    // Frameworks
    { id: '10',  name: 'React',       category: 'Frameworks' },
    { id: '11',  name: 'Next.js',     category: 'Frameworks' },
    { id: '12',  name: 'Angular.js',     category: 'Frameworks' },
    { id: '13', name: 'Node.js',     category: 'Frameworks' },
    { id: '14', name: 'Express.js',  category: 'Frameworks' },
    { id: '15', name: 'Tailwind CSS',category: 'Frameworks' },
    // Tools
    { id: '16', name: 'Git',         category: 'Tools' },
    { id: '17',name: 'GitHub',     category: 'Tools' },
    { id: '18', name: 'PostgreSQL',  category: 'Tools' },
    { id: '19', name: 'MongoDB',     category: 'Tools' },  
    { id: '20', name: 'VS Code', category: 'Tools' },
    { id: '21',  name: 'MYSQL',       category: 'Tools' },
    { id: '22',  name: 'PostMan',       category: 'Tools' },
];

const PROJECTS: Project[] = [
    {
        id: '1',
        imageUrl: 'library.png',
        title: 'Library Seat Booking Management System',
        description:
            'A comprehensive seat booking system for libraries, enabling students to reserve seats, view availability, and manage their bookings efficiently.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
        githubLink: 'https://github.com/kanishkmangal/Library-Seat-Booking-Management-System',
        liveLink: 'https://library-seat-booking-management-sys.vercel.app/',
        featured: false,
    },
    {
        id: '2',
        imageUrl: 'safelynx.png',
        title: 'SafeLynx - File Management System',
        description:
            'Secure document management system with authentication, cloud uploads and document access control.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
        githubLink: 'https://github.com/kanishkmangal/SafeLynx-Secure-Document-Hub',
        liveLink: 'https://safe-lynx-secure-document-hub.vercel.app/',
        featured: true,
    },
    {
        id: '3',
        imageUrl: 'appliance.png',
        title: 'Appliance Repair Management System',
        description:
            'A comprehensive appliance repair management system that have Workflow system for repair requests, technician allocation and service tracking',
        technologies: ['React.js', 'PHP', 'MySQL', 'Tailwind CSS'],
        githubLink: 'https://github.com/kanishkmangal/Appliance_Repair_management_System',
        liveLink: 'https://appliance-repair-management-system.vercel.app/',
        featured: true,
    },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <About />
            <Projects initialProjects={PROJECTS} />
            <Skills skills={SKILLS} />
            <Certifications />
            <Achievements />
            <Education />
            <Resume />
            <Contact />
        </div>
    );
}
