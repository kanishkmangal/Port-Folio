import { Trophy, Star } from 'lucide-react';
import { ScrollReveal, ScrollItem } from '@/components/ScrollReveal';

const achievements = [
    {
        title: 'Successfully completed Hacktoberfest 2025 with multiple accepted open-source pull requests',
        date: 'Oct 2025',
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="container py-20 flex flex-col justify-center overflow-hidden">
            <ScrollReveal>
                <ScrollItem>
                    <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        <Trophy className="text-yellow-400" size={36} />
                        Achievements
                    </h2>
                </ScrollItem>
                <div className="max-w-3xl mx-auto w-full space-y-6">
                    {achievements.map((achievement, index) => (
                        <ScrollItem key={index}>
                            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-yellow-500/30 transition-all hover:shadow-lg flex items-start gap-4 group">
                                <div className="p-3 bg-yellow-500/10 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                                    <Star className="text-yellow-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-slate-200 mb-2 leading-relaxed">{achievement.title}</h3>
                                    <span className="text-sm font-semibold text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full inline-block mt-2">{achievement.date}</span>
                                </div>
                            </div>
                        </ScrollItem>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
