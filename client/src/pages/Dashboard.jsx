import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className="min-h-screen py-16 px-4 flex flex-col items-center justify-center text-center">
            <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700/50 max-w-lg w-full backdrop-blur-xl mb-8 shadow-2xl">
                <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Clock size={32} className="text-slate-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">Dashboard Coming Soon</h2>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                    In Phase 2, you'll be able to save your generated blueprints to the cloud, track market validation scores, and export your roadmaps to PDF.
                </p>
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 font-medium">
                    Premium SaaS Features in Development
                </div>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors overflow-hidden group">
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
        </div>
    );
}
