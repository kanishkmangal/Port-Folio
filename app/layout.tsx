
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveDotBackground from '@/components/InteractiveDotBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My Portfolio',
    description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={clsx(inter.className, 'bg-slate-950 text-slate-50 min-h-screen cursor-none-desktop')}>
                <InteractiveDotBackground />
                <CustomCursor />
                <div className="flex flex-col min-h-screen">
                    <Navbar />

                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
