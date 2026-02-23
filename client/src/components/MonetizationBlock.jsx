import { DollarSign, Wallet } from 'lucide-react';

export default function MonetizationBlock({ revenue, cost }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-5 flex items-start gap-4 hover:border-green-500/40 transition-colors">
                <div className="bg-green-500/20 p-3 rounded-lg text-green-400">
                    <DollarSign size={24} />
                </div>
                <div>
                    <h4 className="text-green-300 font-bold mb-1">Revenue Model</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{revenue || 'Subscription based.'}</p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-5 flex items-start gap-4 hover:border-orange-500/40 transition-colors">
                <div className="bg-orange-500/20 p-3 rounded-lg text-orange-400">
                    <Wallet size={24} />
                </div>
                <div>
                    <h4 className="text-orange-300 font-bold mb-1">Cost Breakdown</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{cost || 'Minimal overhead costs.'}</p>
                </div>
            </div>
        </div>
    );
}
