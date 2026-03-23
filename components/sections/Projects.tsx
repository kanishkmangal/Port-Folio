'use client'

import { useState, useEffect } from 'react';
import { Project } from '@/app/page';
import { ScrollReveal, ScrollItem } from '@/components/ScrollReveal';

export default function Projects({ initialProjects }: { initialProjects: Project[] }) {
    const [projects]          = useState<Project[]>(initialProjects);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);
    const [filter, setFilter] = useState('All');
    const [allTechs, setAllTechs] = useState<string[]>([]);

    useEffect(() => {
        const techs = new Set<string>();
        initialProjects.forEach(p => p.technologies.forEach(t => techs.add(t)));
        setAllTechs(Array.from(techs));
    }, [initialProjects]);

    useEffect(() => {
        setFilteredProjects(
            filter === 'All' ? projects : projects.filter(p => p.technologies.includes(filter))
        );
    }, [filter, projects]);

    return (
        <section id="projects" className="container py-20 min-h-screen flex flex-col justify-center overflow-hidden">
            <ScrollReveal>
                <ScrollItem>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        My Projects
                    </h2>
                </ScrollItem>

                {/* Filter buttons */}
                <ScrollItem className="flex flex-wrap gap-2 justify-center mb-12">
                    {['All', ...allTechs].map(tech => (
                        <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                filter === tech
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                            }`}
                        >
                            {tech}
                        </button>
                    ))}
                </ScrollItem>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ScrollItem key={project.id} className="h-full">
                            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group flex flex-col h-full">
                                <div className="h-48 bg-slate-800 relative overflow-hidden shrink-0">
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            <span className="text-slate-500 text-4xl font-bold opacity-10">
                                                {project.title[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 4).map(tech => (
                                            <span key={tech} className="text-xs px-2 py-1 bg-slate-800 text-blue-300 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="text-xs px-2 py-1 bg-slate-800 text-slate-500 rounded">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollItem>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <ScrollItem>
                        <p className="text-center text-slate-500 mt-8">No projects found.</p>
                    </ScrollItem>
                )}
            </ScrollReveal>
        </section>
    );
}
