import type { AccessType } from '../types';

interface AccessProps {
  onSelect: (type: AccessType) => void;
  onBack: () => void;
}

export function Access({ onSelect, onBack }: AccessProps) {
  return (
    <div className="flex-1 flex flex-col px-5 sm:px-6 py-8 sm:py-12 animate-fade-in-up">
      <div className="max-w-2xl w-full mx-auto">
        <button
          onClick={onBack}
          className="text-xs text-anthracite/50 hover:text-olive-dark transition-colors mb-8 flex items-center gap-1.5"
        >
          <span>←</span> Zurück
        </button>

        <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
          Schritt 1 von 4 · Zugangsauswahl
        </p>

        <h1 className="font-serif text-2xl sm:text-3xl text-olive-dark mb-2">
          Bitte wählen Sie den vorgesehenen Zugang
        </h1>
        <p className="text-sm text-anthracite/60 mb-10">
          Das Verfahren unterscheidet zwischen der regulären Berufung und der Nachwuchsforschung.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => onSelect('adult')}
            className="w-full text-left border border-line bg-paper hover:border-olive-dark hover:bg-paper-warm transition-all duration-200 p-6 sm:p-7 group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="font-serif text-xl text-anthracite mb-1 group-hover:text-olive-dark transition-colors">
                  Neuberufene Professur
                </h2>
                <p className="text-sm text-anthracite/60">
                  Assessment für Erwachsene
                </p>
                <p className="text-xs text-anthracite/45 mt-3">
                  14 Fragen · persönliche Zusatzfragen · institutionelle Zuordnung · akademischer Titel
                </p>
              </div>
              <span className="text-anthracite/30 group-hover:text-olive-dark group-hover:translate-x-1 transition-all text-lg mt-1">
                →
              </span>
            </div>
          </button>

          <button
            onClick={() => onSelect('child')}
            className="w-full text-left border border-line bg-paper hover:border-olive-dark hover:bg-paper-warm transition-all duration-200 p-6 sm:p-7 group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="font-serif text-xl text-anthracite mb-1 group-hover:text-olive-dark transition-colors">
                  Nachwuchsforschung
                </h2>
                <p className="text-sm text-anthracite/60">
                  Assessment für Kinder
                </p>
                <p className="text-xs text-anthracite/45 mt-3">
                  6 Fragen · altersgerechte Zuordnung · Junior-Rolle
                </p>
              </div>
              <span className="text-anthracite/30 group-hover:text-olive-dark group-hover:translate-x-1 transition-all text-lg mt-1">
                →
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
