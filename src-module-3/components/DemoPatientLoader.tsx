import React from 'react';
import { UserCheck, Sparkles } from 'lucide-react';
import { HealthInput } from '../types';

interface Props {
  onLoadDemo: (data: HealthInput) => void;
}

export const DEMO_PATIENTS: Record<string, HealthInput> = {
  high_risk: {
    age: 58,
    sex: 'male',
    height_cm: 172,
    weight_kg: 96,
    systolic_bp: 148,
    diastolic_bp: 94,
    resting_hr: 82,
    glucose_mg_dl: 168,
    cholesterol_mg_dl: 242,
    smoking_status: 'current',
    alcohol_consumption: 'moderate',
    physical_activity: 'low',
    sleep_duration_hours: 5.5,
    pregnancies: 0,
    family_history_diabetes: 1,
    family_history_heart: 1,
    family_history_hypertension: 1,
    family_history_stroke: 1,
  },
  moderate_risk: {
    age: 46,
    sex: 'female',
    height_cm: 165,
    weight_kg: 74,
    systolic_bp: 128,
    diastolic_bp: 84,
    resting_hr: 74,
    glucose_mg_dl: 112,
    cholesterol_mg_dl: 205,
    smoking_status: 'former',
    alcohol_consumption: 'moderate',
    physical_activity: 'moderate',
    sleep_duration_hours: 7.0,
    pregnancies: 2,
    family_history_diabetes: 1,
    family_history_heart: 0,
    family_history_hypertension: 1,
    family_history_stroke: 0,
  }
};

export const DemoPatientLoader: React.FC<Props> = ({ onLoadDemo }) => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
            Quick Test: Load Demo Patient
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Demo/Synthetic Data — Not a Real Patient
            </span>
          </h4>
          <p className="text-xs text-slate-400">
            Populate clinical assessment fields instantly with standard benchmark test parameters.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => onLoadDemo(DEMO_PATIENTS.high_risk)}
          className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
        >
          <UserCheck className="w-3.5 h-3.5 text-rose-400" />
          Load Elevated Risk Demo
        </button>
        <button
          type="button"
          onClick={() => onLoadDemo(DEMO_PATIENTS.moderate_risk)}
          className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
        >
          <UserCheck className="w-3.5 h-3.5 text-amber-400" />
          Load Moderate Demo
        </button>
      </div>
    </div>
  );
};
