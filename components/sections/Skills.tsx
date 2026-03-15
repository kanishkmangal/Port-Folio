import { Sparkles, Code2, Layers, Wrench } from 'lucide-react';
import { Skill } from '@/app/page';

// ── React Icons ───────────────────────────────────────────────────────────
import { 
    SiTypescript, SiJavascript, SiC, SiCplusplus, SiPython, 
    SiHtml5, SiCss, SiPhp, SiReact, SiNextdotjs, SiAngular, 
    SiExpress, SiTailwindcss, SiGit, SiGithub, 
    SiPostgresql, SiMongodb, SiMysql, SiPostman 
} from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

// Map skill names to their official icons and brand colors
const skillIconMap: Record<string, React.ReactNode> = {
    'TypeScript':   <SiTypescript className="text-[#3178C6]" size={16} />,
    'JavaScript':   <SiJavascript className="text-[#F7DF1E]" size={16} />,
    'Java':         <FaJava className="text-[#5382a1]" size={18} />,
    'C':            <SiC className="text-[#A8B9CC]" size={16} />,
    'C++':          <SiCplusplus className="text-[#00599C]" size={16} />,
    'Python':       <SiPython className="text-[#3776AB]" size={16} />,
    'HTML / CSS':   <div className="flex -space-x-1"><SiHtml5 className="text-[#E34F26]" size={16} /><SiCss className="text-[#1572B6]" size={16} /></div>,
    'PHP':          <SiPhp className="text-[#777BB4]" size={20} />,

    'React':        <SiReact className="text-[#61DAFB]" size={16} />,
    'Next.js':      <SiNextdotjs className="text-slate-100" size={16} />,
    'Angular.js':   <SiAngular className="text-[#DD0031]" size={16} />,
    'Node.js':      <FaNodeJs className="text-[#339933]" size={16} />,
    'Express.js':   <SiExpress className="text-slate-100" size={16} />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" size={16} />,

    'Git & GitHub': <div className="flex -space-x-1"><SiGit className="text-[#F05032]" size={16} /><SiGithub className="text-slate-100" size={16} /></div>,
    'PostgreSQL':   <SiPostgresql className="text-[#4169E1]" size={16} />,
    'MongoDB':      <SiMongodb className="text-[#47A248]" size={16} />,
    'VS Code':      <VscVscode className="text-[#007ACC]" size={16} />,
    'MYSQL':        <SiMysql className="text-[#4479A1]" size={18} />,
    'PostMan':      <SiPostman className="text-[#FF6C37]" size={16} />,
};

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
        <div className={`bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:${borderColor} transition-colors group`}>
            <div className="flex items-center gap-3 mb-6">
                <div className="group-hover:scale-110 transition-transform">{icon}</div>
                <h3 className="text-xl font-bold text-slate-100">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {list.length > 0 ? list.map(skill => (
                    <span 
                        key={skill.id} 
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full text-sm border border-slate-700 hover:border-slate-500 transition-all font-medium hover:shadow-md cursor-default"
                    >
                        {skillIconMap[skill.name]}
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
