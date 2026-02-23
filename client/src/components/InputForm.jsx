import { useState } from 'react';
import { Sparkles, Briefcase, Coins, MapPin, Target } from 'lucide-react';

export default function InputForm({ onSubmit, isLoading }) {
    const [formData, setFormData] = useState({
        interests: '',
        skills: '',
        budget: '',
        location: '',
        riskLevel: 'Medium'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl">
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <Sparkles className="text-yellow-400" />
                    Define Your Startup Idea
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <Target size={16} className="text-blue-400" /> Interests
                            </label>
                            <input
                                type="text" name="interests" required
                                placeholder="e.g., AI, Fitness, SaaS..."
                                value={formData.interests} onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700/50 focus:border-blue-500 focus:bg-slate-800 focus:ring-1 focus:ring-blue-500 outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <Briefcase size={16} className="text-purple-400" /> Skills
                            </label>
                            <input
                                type="text" name="skills" required
                                placeholder="e.g., Coding, Marketing..."
                                value={formData.skills} onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700/50 focus:border-purple-500 focus:bg-slate-800 focus:ring-1 focus:ring-purple-500 outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <Coins size={16} className="text-green-400" /> Budget Range
                            </label>
                            <select
                                name="budget" required
                                value={formData.budget} onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700/50 focus:border-blue-500 focus:bg-slate-800 focus:ring-1 focus:ring-blue-500 outline-none rounded-xl px-4 py-3 text-white text-sm transition-all appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Select Budget...</option>
                                <option value="₹0–10k">₹0–10k (Bootstrap)</option>
                                <option value="₹10k–1L">₹10k–1L (MVP Stage)</option>
                                <option value="₹1L+">₹1L+ (Scale)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <Sparkles size={16} className="text-orange-400" /> Risk Appetite
                            </label>
                            <select
                                name="riskLevel"
                                value={formData.riskLevel} onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700/50 focus:border-purple-500 focus:bg-slate-800 focus:ring-1 focus:ring-purple-500 outline-none rounded-xl px-4 py-3 text-white text-sm transition-all appearance-none cursor-pointer"
                            >
                                <option value="Low">Low (Safe & Steady)</option>
                                <option value="Medium">Medium (Balanced)</option>
                                <option value="High">High (Moonshot)</option>
                            </select>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <MapPin size={16} className="text-pink-400" /> Location (Optional)
                            </label>
                            <input
                                type="text" name="location"
                                placeholder="e.g., India, Remote..."
                                value={formData.location} onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700/50 focus:border-pink-500 focus:bg-slate-800 focus:ring-1 focus:ring-pink-500 outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Forging Ideas...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2 text-lg">
                                    Generate My Startup <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
