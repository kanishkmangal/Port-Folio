
export default function Footer() {
    return (
        <footer className="border-t border-slate-800 py-8 bg-slate-950">
            <div className="container mx-auto px-4 text-center text-slate-400">
                <p>© {new Date().getFullYear()} Kanishk Mangal Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}
