import type { AssessmentState, ScoreResult, SiblingPosition } from '../types';
import { departments, dimensionNames } from '../data';
import { calculateScores, getMaxScore } from '../scoring';
import { generateTitle, generateResearchFocus, generateWorkProfile } from '../titleGenerator';
import { DepartmentIcon, getDepartmentIconKey, WillowLogo } from './Icons';

interface ResultViewProps {
  state: AssessmentState;
  onRestart: () => void;
}

export function ResultView({ state, onRestart }: ResultViewProps) {
  const result = calculateScores(state);
  const title = generateTitle({ result, state });
  const researchFocus = generateResearchFocus(result, state);
  const workProfile = generateWorkProfile(result);
  const maxScore = getMaxScore(result.scores);

  const primaryDept = departments[result.primary];
  const secondaryDept = departments[result.secondary];

  const animalMarker = result.markers.find(m => ['Eichhörnchen', 'Eule', 'Biber', 'Delfin'].includes(m)) || '—';
  const snackMarker = result.markers.find(m => ['Schokolade', 'Chips', 'Nüsse', 'Obst'].includes(m)) || '—';

  return (
    <div className="flex-1 flex flex-col px-5 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex items-center justify-between mb-8 no-print">
          <button
            onClick={onRestart}
            className="text-xs text-anthracite/50 hover:text-olive-dark transition-colors flex items-center gap-1.5"
          >
            <span>←</span> Neues Verfahren
          </button>
          <button
            onClick={() => window.print()}
            className="text-xs text-anthracite/50 hover:text-olive-dark transition-colors flex items-center gap-1.5"
          >
            Drucken / PDF
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12 pb-8 border-b border-line">
          <div className="flex justify-center mb-4">
            <WillowLogo className="w-12 h-12 text-olive-dark/70" />
          </div>
          <p className="text-[10px] tracking-wide3 uppercase text-anthracite/50 mb-2">
            Universitas Felberensis · Amtliches Zuordnungsverfahren
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl text-olive-dark mb-1">
            Ihre institutionelle Zuordnung
          </h1>
          <p className="text-xs text-anthracite/50 mt-2">
            Bescheid Nr. UF-{Date.now().toString(36).toUpperCase().slice(-8)} · Ausgestellt am{' '}
            {new Date().toLocaleDateString('de-AT', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Academic Title */}
        <section className="mb-12 animate-fade-in-up">
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
            Akademischer Titel
          </p>
          <div className="border-l-2 border-olive-dark pl-5 py-2">
            <h2 className="font-serif text-xl sm:text-2xl text-anthracite leading-snug">
              {title}
            </h2>
            <p className="text-sm text-anthracite/60 mt-2">
              {state.name}
            </p>
          </div>
        </section>

        {/* Primary Department */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-4">
            Primary Department
          </p>
          <div className="border border-line bg-paper p-6 sm:p-7">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center border"
                style={{ borderColor: primaryDept.color }}
              >
                <DepartmentIcon iconKey={getDepartmentIconKey(result.primary)} color={primaryDept.color} className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg text-anthracite leading-tight">
                  {primaryDept.name}
                </h3>
                <p className="text-xs text-anthracite/50 mt-1">
                  Forschungsfeld: {primaryDept.field}
                </p>
              </div>
            </div>
            <p className="text-sm text-anthracite/70 leading-relaxed mb-4">
              {primaryDept.description}
            </p>
            <div className="border-t border-line-soft pt-3">
              <p className="text-xs text-anthracite/50">
                <span className="text-anthracite/40">Institutionelle Funktion: </span>
                {primaryDept.function}
              </p>
            </div>
          </div>
        </section>

        {/* Secondary Department */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-4">
            Secondary Department
          </p>
          <div className="border border-line bg-paper p-6 sm:p-7">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center border"
                style={{ borderColor: secondaryDept.color }}
              >
                <DepartmentIcon iconKey={getDepartmentIconKey(result.secondary)} color={secondaryDept.color} className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg text-anthracite leading-tight">
                  {secondaryDept.name}
                </h3>
                <p className="text-xs text-anthracite/50 mt-1">
                  Forschungsfeld: {secondaryDept.field}
                </p>
              </div>
            </div>
            <p className="text-sm text-anthracite/70 leading-relaxed mb-4">
              {secondaryDept.description}
            </p>
            <div className="border-t border-line-soft pt-3">
              <p className="text-xs text-anthracite/50">
                <span className="text-anthracite/40">Institutionelle Funktion: </span>
                {secondaryDept.function}
              </p>
            </div>
          </div>
        </section>

        {/* All departments with relative scores */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-4">
            Relative Bewertung aller Fachbereiche
          </p>
          <div className="space-y-3">
            {result.ranking.map((dim, i) => {
              const dept = departments[dim];
              const score = result.scores[dim];
              const widthPct = maxScore > 0 ? (score / maxScore) * 100 : 0;
              return (
                <div key={dim} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <DepartmentIcon iconKey={getDepartmentIconKey(dim)} color={dept.color} className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs text-anthracite/70 truncate">
                        {dimensionNames[dim]} · {dept.shortName}
                      </span>
                      <span className="text-[10px] text-anthracite/40 ml-2 flex-shrink-0">
                        {score} {score === 1 ? 'Punkt' : 'Punkte'}
                      </span>
                    </div>
                    <div className="h-1.5 bg-line-soft relative overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full transition-all duration-700 ease-out"
                        style={{
                          width: `${widthPct}%`,
                          backgroundColor: dept.color,
                          animationDelay: `${i * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                  {i === 0 && <span className="text-[9px] tracking-wide2 uppercase text-olive-dark flex-shrink-0">Primär</span>}
                  {i === 1 && <span className="text-[9px] tracking-wide2 uppercase text-anthracite/40 flex-shrink-0">Sekundär</span>}
                  {i > 1 && <span className="w-12 flex-shrink-0" />}
                </div>
              );
            })}
          </div>
        </section>

        {/* Research focus */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
            Forschungsschwerpunkt
          </p>
          <p className="text-sm text-anthracite/80 leading-relaxed border-l-2 border-line pl-5">
            {researchFocus}
          </p>
        </section>

        {/* Work profile */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
            Forschungs- und Arbeitsprofil
          </p>
          <p className="text-sm text-anthracite/80 leading-relaxed border-l-2 border-line pl-5">
            {workProfile}
          </p>
        </section>

        {/* Institutional function */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
            Institutionelle Funktion
          </p>
          <p className="text-sm text-anthracite/80 leading-relaxed border-l-2 border-line pl-5">
            {primaryDept.function}
            <span className="text-anthracite/60">; stellvertretend auch: {secondaryDept.function}.</span>
          </p>
        </section>

        {/* Personal research data */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '550ms' }}>
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-4">
            Persönliche Forschungsdaten
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div className="flex justify-between sm:block border-b border-line-soft pb-2">
              <dt className="text-anthracite/50 text-xs">Name</dt>
              <dd className="text-anthracite/80 text-sm">{state.name}</dd>
            </div>
            <div className="flex justify-between sm:block border-b border-line-soft pb-2">
              <dt className="text-anthracite/50 text-xs">Serie</dt>
              <dd className="text-anthracite/80 text-sm">{state.serie || '—'}</dd>
            </div>
            <div className="flex justify-between sm:block border-b border-line-soft pb-2">
              <dt className="text-anthracite/50 text-xs">Geschwisterposition</dt>
              <dd className="text-anthracite/80 text-sm">{state.sibling || 'Nicht angegeben'}</dd>
            </div>
            <div className="flex justify-between sm:block border-b border-line-soft pb-2">
              <dt className="text-anthracite/50 text-xs">Forschungsassistenz</dt>
              <dd className="text-anthracite/80 text-sm">{animalMarker}</dd>
            </div>
            <div className="flex justify-between sm:block border-b border-line-soft pb-2">
              <dt className="text-anthracite/50 text-xs">Snack</dt>
              <dd className="text-anthracite/80 text-sm">{snackMarker}</dd>
            </div>
          </dl>
        </section>

        {/* Methodological note */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
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

        {/* Actions */}
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
          Universitas Felberensis · Onboarding-Portal · Bescheid automatisch generiert
        </p>
      </div>
    </div>
  );
}
