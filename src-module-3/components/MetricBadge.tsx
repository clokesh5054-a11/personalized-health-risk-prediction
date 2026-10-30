import React from 'react';

interface Props {
  title: string;
  value: string | number;
  unit?: string;
  category?: string;
  icon: React.ElementType;
  color?: 'cyan' | 'emerald' | 'amber' | 'purple';
}

export const MetricBadge: React.FC<Props> = ({ title, value, unit, category, icon: Icon, color = 'cyan' }) => {
  const colorMap = {
    cyan: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    emerald: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    amber: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
    purple: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400',
  };

  return (
    <div className={`glass-card rounded-2xl p-4 border bg-gradient-to-br ${colorMap[color]} space-y-2`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{title}</span>
        <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
          <Icon className="w-4 h-4" />
        </div>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold font-mono text-slate-100">{value}</span>
        {unit && <span className="text-xs text-slate-400 font-normal">{unit}</span>}
      </div>

      {category && (
        <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">
          {category}
        </span>
      )}
    </div>
  );
};
