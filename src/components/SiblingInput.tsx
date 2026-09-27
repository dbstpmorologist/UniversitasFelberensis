import { useState } from 'react';
import { siblingOptions } from '../data';
import type { SiblingPosition } from '../types';

interface SiblingInputProps {
  onSubmit: (sibling: SiblingPosition) => void;
  onBack: () => void;
  initialSibling?: SiblingPosition | '';
}

export function SiblingInput({ onSubmit, onBack, initialSibling = '' }: SiblingInputProps) {
  const [selected, setSelected] = useState<SiblingPosition | ''>(initialSibling);

  const handleSubmit = () => {
    if (!selected) {
      onSubmit('Nicht angegeben');
    } else {
      onSubmit(selected as SiblingPosition);
    }
  };

  return (
    <div className="flex-1 flex flex-col px-5 sm:px-6 py-8 sm:py-12 animate-fade-in-up">
      <div className="max-w-xl w-full mx-auto">
        <button
          onClick={onBack}
          className="text-xs text-anthracite/50 hover:text-olive-dark transition-colors mb-8 flex items-center gap-1.5"
        >
          <span>←</span> Zurück
        </button>

        <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-3">
          Schritt 4 von 4 · Demografische Erfassung
        </p>

        <h1 className="font-serif text-2xl sm:text-3xl text-olive-dark mb-2">
          Geschwisterstruktur
        </h1>
        <p className="text-sm text-anthracite/60 mb-10">
          Welche Position haben Sie innerhalb Ihrer Geschwisterstruktur? Diese Angabe hat keine Auswirkung auf die Bewertung.
        </p>

        <div className="space-y-2 mb-8">
          {siblingOptions.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setSelected(opt.value as SiblingPosition)}
                className={`w-full text-left border transition-all duration-200 p-4 cursor-pointer ${
                  isSelected
                    ? 'border-olive-dark bg-sage-pale/40'
                    : 'border-line bg-paper hover:border-olive-mid hover:bg-paper-warm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-4 h-4 rounded-full border transition-all flex-shrink-0 ${
                      isSelected ? 'border-olive-dark bg-olive-dark' : 'border-line'
                    }`}
                  >
                    {isSelected && <span className="block w-2 h-2 bg-paper rounded-full m-auto mt-1" />}
                  </span>
                  <span className={`text-sm ${isSelected ? 'text-anthracite' : 'text-anthracite/80'}`}>
                    {opt.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleSubmit}
          className="inline-flex items-center gap-2 px-8 py-3 bg-olive-dark text-paper font-sans text-sm tracking-wide2 uppercase hover:bg-anthracite transition-colors duration-200 cursor-pointer"
        >
          Zuordnung berechnen
        </button>
      </div>
    </div>
  );
}
