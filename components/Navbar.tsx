
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Menu, X, Linkedin, Github } from 'lucide-react';

// ── Nav items ──────────────────────────────────────────────────────────────
const navItems = [
    { name: 'Home',           path: '#home'           },
    // { name: 'About',          path: '#about'          },
    // { name: 'Skills',         path: '#skills'         },
    { name: 'Projects',       path: '#projects'       },
    // { name: 'Certifications', path: '#certifications' },
    // { name: 'Achievements',   path: '#achievements'   },
    // { name: 'Education',      path: '#education'      },
    { name: 'Resume',         path: '#resume'         },
    { name: 'Contact',        path: '#contact'        },
];

// ── Social links ───────────────────────────────────────────────────────────
const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kanishk-mangal/',
        icon: Linkedin,
        hoverColor: 'hover:text-blue-400',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/kanishkmangal',
        icon: Github,
        hoverColor: 'hover:text-purple-400',
    },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Scroll-spy: highlight nav item matching the visible section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((s) => observer.observe(s));
        return () => sections.forEach((s) => observer.unobserve(s));
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Kanishk Mangal
                </Link>

                {/* ── Desktop Nav ─────────────────────────────────────── */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Nav links */}
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            onClick={(e) => handleScrollTo(e, item.path.substring(1))}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-blue-400 relative',
                                activeSection === item.path.substring(1)
                                    ? 'text-blue-400'
                                    : 'text-slate-400'
                            )}
                        >
                            {item.name}
                            {activeSection === item.path.substring(1) && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                            )}
                        </a>
                    ))}

                    {/* Separator */}
                    <span className="text-slate-700 select-none">|</span>

                    {/* Social icons */}
                    {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={clsx('text-slate-400 transition-colors', hoverColor)}
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-slate-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* ── Mobile Nav ──────────────────────────────────────────── */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 absolute w-full shadow-2xl">
                    <div className="flex flex-col gap-4">
                        {/* Nav links */}
                        {navItems.map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                onClick={(e) => handleScrollTo(e, item.path.substring(1))}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-blue-400 py-2',
                                    activeSection === item.path.substring(1)
                                        ? 'text-blue-400'
                                        : 'text-slate-400'
                                )}
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Social icons — horizontal row in mobile drawer */}
                        <div className="flex items-center gap-5 pt-3 border-t border-slate-800">
                            {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={clsx(
                                        'flex items-center gap-2 text-sm text-slate-400 transition-colors',
                                        hoverColor
                                    )}
                                >
                                    <Icon size={20} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
