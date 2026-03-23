import { ScrollReveal, ScrollItem } from '@/components/ScrollReveal';

export default function About() {
    return (
        <section id="about" className="container py-20 min-h-screen flex flex-col justify-center overflow-hidden">
            <ScrollReveal className="max-w-3xl mx-auto">
                <ScrollItem>
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">About Me</h2>
                </ScrollItem>
                <div className="text-slate-300 leading-relaxed text-lg space-y-6 text-center md:text-left">
                    <ScrollItem>
                        <p>
                            I'm a passionate Full Stack Developer with a deep love for building scalable web applications and intuitive user interfaces.
                            My journey in tech started with a curiosity for how things work on the web, which eventually led me to master modern technologies like React, Next.js, and Node.js.
                        </p>
                    </ScrollItem>
                    <ScrollItem>
                        <p>
                            I believe in writing clean, maintainable code and dealing with complex problems using simple, elegant solutions.
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge with the community.
                        </p>
                    </ScrollItem>
                </div>
            </ScrollReveal>
        </section>
    );
}
