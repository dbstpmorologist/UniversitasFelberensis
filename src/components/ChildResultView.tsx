import type { AssessmentState, ChildRole } from '../types';
import { childQuestions } from '../data';
import { WillowLogo } from './Icons';

interface ChildResultViewProps {
  state: AssessmentState;
  onRestart: () => void;
}

function determineRole(state: AssessmentState): ChildRole {
  const roleCounts: Record<string, number> = {};
  for (const q of childQuestions) {
    const idx = state.childAnswers[q.id];
    if (idx === undefined) continue;
    const role = q.options[idx]?.role;
    if (role) {
      roleCounts[role] = (roleCounts[role] || 0) + 1;
    }
  }
  const sorted = Object.entries(roleCounts).sort((a, b) => b[1] - a[1]);
  return (sorted[0]?.[0] as ChildRole) || 'Junior Chaos Research Assistant';
}

export function ChildResultView({ state, onRestart }: ChildResultViewProps) {
  const role = determineRole(state);

  const roleDescriptions: Record<string, string> = {
    'Junior Research Assistant for Curious Things':
      'Du stellst viele Fragen und willst alles genau verstehen. Du untersuchst die Welt mit viel Geduld und Neugier.',
    'Junior Repair Researcher':
      'Du reparierst und baust Dinge am liebsten selbst. Wenn etwas kaputt ist, probierst du es zu fixen.',
    'Junior Social Researcher':
      'Du arbeitest am liebsten mit anderen zusammen. Freunde und Teamarbeit sind dir wichtig.',
    'Junior Exploration Fellow':
      'Du willst die Welt entdecken. Tiere, Natur und ferne Orte findest du am spannendsten.',
    'Junior Imagination Researcher':
      'Du hast viele verrückte Ideen und erfindest gerne neue Dinge. Dein Forschungslabor ist voller Überraschungen.',
    'Junior Chaos Research Assistant':
      'Du probierst einfach alles aus und schaust was passiert. Chaos ist für dich kein Problem, sondern eine Methode.',
  };

  return (
    <div className="flex-1 flex flex-col px-5 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <div className="max-w-2xl w-full mx-auto">
        <div className="flex items-center justify-between mb-8 no-print">
          <button
            onClick={onRestart}
            className="text-xs text-anthracite/50 hover:text-olive-dark transition-colors flex items-center gap-1.5"
          >
            <span>←</span> Neues Verfahren
          </button>
          <button
            onClick={() => window.print()}
            className="text-xs text-anthracite/50 hover:text-olive-dark transition-colors"
          >
            Drucken / PDF
          </button>
        </div>

        <div className="text-center mb-10 pb-8 border-b border-line">
          <div className="flex justify-center mb-4">
            <WillowLogo className="w-12 h-12 text-olive-dark/70" />
          </div>
          <p className="text-[10px] tracking-wide3 uppercase text-anthracite/50 mb-2">
            Universitas Felberensis · Nachwuchsforschung
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl text-olive-dark mb-1">
            Deine Forschungsrolle
          </h1>
          <p className="text-xs text-anthracite/50 mt-2">
            Junior-Zuordnung · Ausgestellt am{' '}
            {new Date().toLocaleDateString('de-AT', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        <section className="mb-10 animate-fade-in-up">
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
            Offizielle Rolle
          </p>
          <div className="border-l-2 border-olive-dark pl-5 py-2">
            <h2 className="font-serif text-xl sm:text-2xl text-anthracite leading-snug">
              {role}
            </h2>
            {state.name && (
              <p className="text-sm text-anthracite/60 mt-2">
                {state.name}
              </p>
            )}
          </div>
        </section>

        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
            Was das bedeutet
          </p>
          <p className="text-sm text-anthracite/80 leading-relaxed border-l-2 border-line pl-5">
            {roleDescriptions[role]}
          </p>
        </section>

        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="bg-paper-warm border border-line p-5 sm:p-6">
            <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-2">
              Methodischer Hinweis
            </p>
            <p className="text-xs text-anthracite/60 leading-relaxed italic">
              Die Zuordnung basiert auf einer standardisierten Selbstauskunft der Universitas Felberensis.
              Das Verfahren dient ausschließlich der institutionellen Zuordnung und besitzt keine diagnostische
              oder psychometrische Validität.
            </p>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 no-print pt-4 border-t border-line">
          <button
            onClick={() => window.print()}
            className="flex-1 px-6 py-3 border border-line bg-paper text-anthracite text-sm tracking-wide2 uppercase hover:border-olive-dark hover:bg-paper-warm transition-all cursor-pointer"
          >
            Drucken / PDF
          </button>
          <button
            onClick={onRestart}
            className="flex-1 px-6 py-3 bg-olive-dark text-paper text-sm tracking-wide2 uppercase hover:bg-anthracite transition-colors cursor-pointer"
          >
            Neues Verfahren
          </button>
        </div>

        <p className="text-center text-[10px] tracking-wide2 uppercase text-anthracite/35 mt-8">
          Universitas Felberensis · Nachwuchsforschung · Junior-Zuordnung
        </p>
      </div>
    </div>
  );
}
