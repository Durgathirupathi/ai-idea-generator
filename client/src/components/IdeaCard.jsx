import { Zap, Target, AlertCircle, Wrench, Megaphone } from 'lucide-react';
import RoadmapTimeline from './RoadmapTimeline';
import MonetizationBlock from './MonetizationBlock';

export default function IdeaCard({ idea }) {
    return (
        <div className="bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl transition-all hover:border-slate-600 w-full mb-8 overflow-hidden group">

            <div className="mb-6">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                    {idea.title || 'Innovative Idea'}
                </h3>
                <p className="text-lg text-indigo-200/80 font-medium">
                    {idea.one_line_concept || 'A unique conceptual approach.'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800/80">
                    <h4 className="flex items-center gap-2 text-rose-400 font-semibold mb-3">
                        <AlertCircle size={18} /> The Problem
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        {idea.problem || 'Identified missing pain points in current workflows.'}
                    </p>
                </div>

                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800/80">
                    <h4 className="flex items-center gap-2 text-emerald-400 font-semibold mb-3">
                        <Target size={18} /> Target Audience
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        {idea.audience || 'Professionals looking to simplify operations.'}
                    </p>
                </div>

                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800/80">
                    <h4 className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
                        <Wrench size={18} /> Tools & Tech Required
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        {idea.tools_required || 'Standard web tech stack.'}
                    </p>
                </div>

                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800/80">
                    <h4 className="flex items-center gap-2 text-pink-400 font-semibold mb-3">
                        <Megaphone size={18} /> Marketing Strategy
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        {idea.marketing_strategy || 'Organic growth and targeted ads.'}
                    </p>
                </div>

            </div>

            <MonetizationBlock revenue={idea.revenue_model} cost={idea.cost_estimate} />

            <h4 className="flex items-center gap-2 text-purple-400 font-semibold mt-10 mb-4 text-xl">
                <Zap size={22} /> 90-Day Roadmap Action Plan
            </h4>
            <RoadmapTimeline roadmapText={idea.roadmap_90_days} />

        </div>
    );
}
