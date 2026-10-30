import React from 'react';
import { Heart, ShieldCheck, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-400">Personalized Health Risk Prediction ML Platform</span>
            <span>•</span>
            <span>Final Year Academic Project</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> SHAP XAI</span>
            <span>•</span>
            <span>Scikit-Learn & XGBoost</span>
            <span>•</span>
            <span>FastAPI + React</span>
          </div>
        </div>

        <p className="text-center md:text-left text-slate-600 leading-relaxed text-[11px]">
          Disclaimer: This application presents mathematical risk models strictly for educational demonstration. 
          Model predictions do not constitute medical diagnoses or clinical guarantees. Always consult a licensed medical professional for health evaluations.
        </p>
      </div>
    </footer>
  );
};
