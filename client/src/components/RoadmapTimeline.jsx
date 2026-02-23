export default function RoadmapTimeline({ roadmapText }) {
    return (
        <div className="relative border-l-2 border-indigo-500/30 ml-3 pl-6 py-2 space-y-6 text-sm">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-4 shadow-[0_0_10px_#6366f1]"></div>

            <div className="bg-slate-900/40 p-5 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all text-slate-300 leading-relaxed whitespace-pre-wrap">
                {roadmapText || 'Phase 1: Validation.\nPhase 2: MVP Build.\nPhase 3: Launch.'}
            </div>

            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] bottom-4 shadow-[0_0_10px_#a855f7]"></div>
        </div>
    );
}
