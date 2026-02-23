import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';

export default function Generator() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGenerate = async (formData) => {
        setIsLoading(true);
        setError('');

        try {
            const endpoint = import.meta.env.DEV
                ? 'http://localhost:5000/api/generate'
                : '/api/generate';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to generate ideas. Please try again later.');
            }

            const data = await response.json();

            // Save to local storage for the Results page
            localStorage.setItem('latestIdeas', JSON.stringify(data.ideas || []));

            // Navigate to Results page
            navigate('/results');
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-16 px-4 flex flex-col items-center">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 tracking-tight">
                    Let's Forge Something New
                </h1>
                <p className="text-slate-400 text-lg max-w-xl mx-auto">
                    Tell us what you're good at and what you love. Our AI will craft personalized startup blueprints for you.
                </p>
            </div>

            {error && (
                <div className="mb-6 bg-red-500/10 border border-red-500/50 text-red-400 px-6 py-4 rounded-xl max-w-2xl w-full text-center">
                    {error}
                </div>
            )}

            <InputForm onSubmit={handleGenerate} isLoading={isLoading} />
        </div>
    );
}
