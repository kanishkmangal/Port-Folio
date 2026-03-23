import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { ScrollReveal, ScrollItem } from '@/components/ScrollReveal';

const education = [
    {
        institution: 'Lovely Professional University',
        degree: 'Bachelor of Technology — Computer Science and Engineering',
        location: 'Punjab, India',
        duration: 'Aug 2023 – Present',
        score: 'CGPA: 7.66'
    },
    {
        institution: 'Swami Vivekananda Govt. Model School',
        degree: 'Intermediate (12th Grade)',
        location: 'Rajasthan, India',
        duration: 'Apr 2021 – May 2022',
        score: 'Percentage: 68%'
    },
    {
        institution: 'Mithlesh Academy Senior Secondary English Medium School',
        degree: 'Matriculation (10th Grade)',
        location: 'Rajasthan, India',
        duration: 'Apr 2019 – Mar 2020',
        score: 'Percentage: 73%'
    }
];

export default function Education() {
    return (
        <section id="education" className="container py-20 flex flex-col justify-center overflow-hidden">
            <ScrollReveal>
                <ScrollItem>
                    <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        <GraduationCap className="text-purple-400" size={36} />
                        Education
                    </h2>
                </ScrollItem>
                <div className="max-w-4xl mx-auto w-full relative">
                    {/* Timeline line */}
                    <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 md:-translate-x-1/2"></div>
                    
                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <ScrollItem key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                
                                {/* Timeline dot */}
                                <div className="absolute left-[12px] md:left-1/2 w-4 h-4 rounded-full bg-purple-400 border-4 border-slate-950 md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
                                
                                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/30 transition-all hover:shadow-lg hover:-translate-y-1 group">
                                        <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-purple-400 transition-colors">{edu.institution}</h3>
                                        <p className="text-lg font-medium text-slate-300 mb-4">{edu.degree}</p>
                                        
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                                                <Calendar size={16} className="text-slate-500" />
                                                <span>{edu.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                                                <MapPin size={16} className="text-slate-500" />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold rounded-lg shadow-sm">
                                            {edu.score}
                                        </div>
                                    </div>
                                </div>
                            </ScrollItem>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
