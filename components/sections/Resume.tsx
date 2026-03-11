import { Eye, Download, FileText } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Place your resume at /public/resume.pdf to make the buttons work.
// ─────────────────────────────────────────────────────────────────────────────

export default function Resume() {
    return (
        <section id="resume" className="container py-20 min-h-screen flex flex-col items-center justify-center">
            {/* Card */}
            <div className="w-full max-w-2xl bg-slate-900/50 border border-slate-800 rounded-2xl p-10 shadow-xl backdrop-blur-sm text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                        <FileText className="text-blue-400" size={34} />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    My Resume
                </h2>

                {/* Subtitle */}
                <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    Interested in working together? View or download my resume to learn more about my experience, skills, and projects.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    {/* View Resume — opens in new tab */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
                    >
                        <Eye size={20} />
                        View Resume
                    </a>

                    {/* Download Resume — triggers browser download */}
                    <a
                        href="/resume.pdf"
                        download="Kanishk_Mangal_Resume.pdf"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-xl transition-all transform hover:scale-105"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>
                </div>

                {/* Hint */}
                <p className="text-slate-600 text-sm mt-8">
                    PDF · Last updated March 2026
                </p>
            </div>
        </section>
    );
}
