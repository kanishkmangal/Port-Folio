import { Sparkles, Code2, Layers, Wrench } from 'lucide-react';
import { Skill } from '@/app/page';

export default function Skills({ skills }: { skills: Skill[] }) {
    const languages  = skills.filter(s => s.category === 'Languages');
    const frameworks = skills.filter(s => s.category === 'Frameworks');
    const tools      = skills.filter(s => s.category === 'Tools');

    const Card = ({
        title,
        icon,
        borderColor,
        list,
    }: {
        title: string;
        icon: React.ReactNode;
        borderColor: string;
        list: Skill[];
    }) => (
        <div className={`bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:${borderColor} transition-colors`}>
            <div className="flex items-center gap-3 mb-6">
                {icon}
                <h3 className="text-xl font-bold text-slate-100">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {list.length > 0 ? list.map(skill => (
                    <span key={skill.id} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                        {skill.name}
                    </span>
                )) : (
                    <p className="text-slate-500 italic">Nothing here yet.</p>
                )}
            </div>
        </div>
    );

    return (
        <section id="skills" className="container py-20 min-h-screen flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-100 flex items-center justify-center gap-2">
                <Sparkles className="text-yellow-400" /> Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card
                    title="Languages"
                    icon={<Code2 className="text-blue-400" size={28} />}
                    borderColor="border-blue-500/30"
                    list={languages}
                />
                <Card
                    title="Frameworks"
                    icon={<Layers className="text-green-400" size={28} />}
                    borderColor="border-green-500/30"
                    list={frameworks}
                />
                <Card
                    title="Tools"
                    icon={<Wrench className="text-purple-400" size={28} />}
                    borderColor="border-purple-500/30"
                    list={tools}
                />
            </div>
        </section>
    );
}
