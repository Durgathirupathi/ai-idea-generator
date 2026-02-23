import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
                IdeaForge AI
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Generate high-potential startup ideas tailored to your skills, interests, and budget.
            </p>
            <Link
                to="/generator"
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-all transform hover:scale-105"
            >
                Start Generating Ideas
            </Link>
        </div>
    );
}
