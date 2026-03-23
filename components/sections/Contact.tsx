'use client'

import { useState } from 'react';
import { Mail, Loader2, CheckCircle, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { ScrollReveal, ScrollItem } from '@/components/ScrollReveal';

// ─────────────────────────────────────────────────────────────────────────────
// Contact section — no backend required.
// On submit it opens the user's default mail app pre-filled with the message.
// ─────────────────────────────────────────────────────────────────────────────
const CONTACT_EMAIL  = 'Kanishkmangal270@gmail.com';
const CONTACT_PHONE  = '+91 93581 46810';   // ← update with your real number
const CONTACT_LOCATION = 'India';           // ← update if needed

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const data    = new FormData(event.currentTarget);
        const name    = data.get('name')    as string;
        const email   = data.get('email')   as string;
        const subject = data.get('subject') as string;
        const message = data.get('message') as string;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to send message.');
            }

            setSuccess(true);
            (event.target as HTMLFormElement).reset();
        } catch (err: any) {
            console.error('Contact form error:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="container py-20 min-h-screen flex flex-col justify-center overflow-hidden">
            <ScrollReveal>
                <ScrollItem>
                    <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Get in Touch
                    </h2>
                </ScrollItem>
                <ScrollItem>
                    <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </ScrollItem>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* ── Left: Contact Info ─────────────────────────────────── */}
                    <div className="flex flex-col gap-8">
                        <ScrollItem>
                            <h3 className="text-2xl font-bold text-slate-100 mb-2">Let's talk</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Feel free to reach out through the form or directly via email or phone.
                                I typically respond within 24 hours.
                            </p>
                        </ScrollItem>

                        <div className="flex flex-col gap-6">
                            {/* Email */}
                            <ScrollItem className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <Mail className="text-blue-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Email</p>
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="text-slate-200 font-medium hover:text-blue-400 transition-colors break-all"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </ScrollItem>

                            {/* Phone */}
                            <ScrollItem className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <Phone className="text-green-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Phone</p>
                                    <a
                                        href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                                        className="text-slate-200 font-medium hover:text-green-400 transition-colors"
                                    >
                                        {CONTACT_PHONE}
                                    </a>
                                </div>
                            </ScrollItem>

                            {/* Location */}
                            <ScrollItem className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                    <MapPin className="text-purple-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
                                    <p className="text-slate-200 font-medium">{CONTACT_LOCATION}</p>
                                </div>
                            </ScrollItem>
                        </div>
                    </div>

                    {/* ── Right: Contact Form ────────────────────────────────── */}
                    <ScrollItem className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
                        {success && (
                            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400">
                                <CheckCircle size={20} />
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </div>
                        )}
                        {error && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400">
                                <AlertCircle size={20} />
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-100 placeholder-slate-600 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-100 placeholder-slate-600 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-100 placeholder-slate-600 transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-100 placeholder-slate-600 transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> Sending…
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </ScrollItem>
                </div>
            </ScrollReveal>
        </section>
    );
}
