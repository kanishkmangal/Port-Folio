import { Award, ExternalLink } from 'lucide-react';
import { ScrollReveal, ScrollItem } from '@/components/ScrollReveal';

const certifications = [
    {
        title: 'Cloud Computing',
        platform: 'NPTEL',
        date: 'Oct 2025',
        link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S145870141910566107.pdf'
    },
    {
        title: 'Generative AI, Data Science, AI Foundation',
        platform: 'Oracle',
        date: 'Oct 2025',
        link: 'https://drive.google.com/drive/folders/1v7iOVbeAypJ1DgqLkeslCeIOtsX2TDNo'
    },
    {
        title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
        platform: 'Infosys Springboard',
        date: 'Aug 2025',
        link: 'https://drive.google.com/drive/folders/1OIt-lpL8hkxIhBaZ-Aa_dyuPzVEZrOdX'
    },
    {
        title: 'Master Generative AI & Generative AI Tools (ChatGPT & more)',
        platform: 'Infosys Springboard',
        date: 'Aug 2025',
        link: 'https://drive.google.com/drive/folders/1OIt-lpL8hkxIhBaZ-Aa_dyuPzVEZrOdX'
    },
    {
        title: 'Full Stack Web Development: Angular and Next.js',
        platform: 'CSE Pathshala',
        date: 'Jul 2025',
        link: 'https://drive.google.com/drive/folders/1npKx2FCF9VvqrfwQWqpKnrhB7z9B09qM'
    },
    {
        title: 'Introduction to Hardware and Operating Systems',
        platform: 'Coursera',
        date: 'Sep 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/XA8FAG1GJXFR'
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="container py-20 min-h-screen flex flex-col justify-center overflow-hidden">
            <ScrollReveal>
                <ScrollItem>
                    <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        <Award className="text-blue-400" size={36} />
                        Certifications
                    </h2>
                </ScrollItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <ScrollItem key={index} className="h-full">
                            <div className="h-full bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col group">
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4">{cert.platform}</p>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <span className="text-xs font-semibold text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">{cert.date}</span>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                        View <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </ScrollItem>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
