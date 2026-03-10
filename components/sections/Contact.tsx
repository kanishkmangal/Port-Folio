'use client'

import { useState } from 'react';
import { Mail, Loader2, CheckCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Contact form — no backend required.
// On submit it opens the user's default mail app pre-filled with the message.
// To use a real email API (e.g. EmailJS, Resend, Formspree) replace
// the handleSubmit body below.
// ─────────────────────────────────────────────────────────────────────────────
const CONTACT_EMAIL = 'Kanishkmangal270@gmail.com.com'; // ← change this to your real email

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        const data = new FormData(event.currentTarget);
        const name    = data.get('name')    as string;
        const email   = data.get('email')   as string;
        const message = data.get('message') as string;

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body    = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);

        // Open the default mail client
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        setLoading(false);
        setSuccess(true);
        (event.target as HTMLFormElement).reset();
    }

    return (
        <section id="contact" className="container py-20 min-h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-lg bg-slate-900/50 border border-slate-800 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-3 bg-blue-500/10 rounded-full mb-4">
                        <Mail className="text-blue-400" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100">Get in Touch</h2>
                    <p className="text-slate-400 mt-2 text-center">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                {success && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400">
                        <CheckCircle size={20} />
                        <span>Your mail app is opening&nbsp;— thanks for reaching out!</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
