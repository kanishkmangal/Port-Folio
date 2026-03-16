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
            'The Library Seat Booking System is a full-stack web application that allows users to reserve library seats through an interactive seat selection interface similar to a bus ticket booking system. The platform includes secure user authentication using JWT and supports monthly seat reservations with real-time seat availability indicators. An admin dashboard enables seat management, booking control, and report generation for efficient library operations. The system improves seat allocation transparency and eliminates manual reservation processes through a responsive and user-friendly interface.',
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
            'SafeLynx is a secure full-stack document management system built using the MERN stack. The platform allows users to upload, store, manage, and share files with JWT-based authentication and role-based access control. It integrates cloud storage with real-time storage tracking to ensure efficient file management. The system provides a clean user interface for viewing and organizing documents while maintaining strong security practices. It is designed for personal, academic, and small organizational document handling.',
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
            'The Appliance Repair Management System is a full-stack service management platform designed to streamline appliance repair workflows. It enables customers to submit repair requests, technicians to manage assigned jobs, and administrators to oversee service operations through dedicated dashboards. The system includes authentication, job allocation, status tracking, and repair history management. By automating coordination between users, technicians, and admins, the platform improves service efficiency and reduces manual management.',
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
