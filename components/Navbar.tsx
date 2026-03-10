
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Scroll Spy Logic
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Fallback for active state if observer lags or for instant feedback
            setActiveSection(id);
        }
    };

    return (
        <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Kanishk Mangal
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            onClick={(e) => handleScrollTo(e, item.path.substring(1))} // Remove '#' for ID
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-blue-400 relative',
                                activeSection === item.path.substring(1) ? 'text-blue-400' : 'text-slate-400'
                            )}
                        >
                            {item.name}
                            {activeSection === item.path.substring(1) && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                            )}
                        </a>
                    ))}

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 absolute w-full shadow-2xl">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                onClick={(e) => handleScrollTo(e, item.path.substring(1))}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-blue-400 py-2',
                                    activeSection === item.path.substring(1) ? 'text-blue-400' : 'text-slate-400'
                                )}
                            >
                                {item.name}
                            </a>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
}
