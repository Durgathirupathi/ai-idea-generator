import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import IdeaCard from '../components/IdeaCard';
import { ArrowLeft, RefreshCw, FolderDown } from 'lucide-react';

export default function Results() {
    const [ideas, setIdeas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Check local storage for ideas
        const stored = localStorage.getItem('latestIdeas');
        if (stored) {
            try {
                setIdeas(JSON.parse(stored));
            } catch (err) {
                console.error('Error parsing ideas', err);
            }
        } else {
            // If none, go back to generator
            navigate('/generator');
        }
    }, [navigate]);

    if (!ideas || ideas.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="w-10 h-10 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">
                        Your Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Blueprints</span>
                    </h1>
                    <p className="text-slate-400">Based on your unique profile</p>
                </div>

                <div className="flex items-center gap-3">
                    <Link to="/generator" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700">
                        <RefreshCw size={16} /> Regenerate
                    </Link>
                    <button
                        onClick={() => alert("Save functionality coming soon (Phase 2!)")}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]"
                    >
                        <FolderDown size={16} /> Save Ideas
                    </button>
                </div>
            </div>

            <div className="space-y-8">
                {ideas.map((idea, index) => (
                    <IdeaCard key={index} idea={idea} />
                ))}
            </div>

            <div className="mt-12 text-center pb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
            </div>
        </div>
    );
}
