import { useState } from 'react';

interface NameInputProps {
  onSubmit: (name: string) => void;
  onBack: () => void;
  initialName?: string;
}

export function NameInput({ onSubmit, onBack, initialName = '' }: NameInputProps) {
  const [name, setName] = useState(initialName);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Bitte geben Sie Ihren Namen an. Das Verfahren ist personenbezogen.');
      return;
    }
    onSubmit(trimmed);
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
          Schritt 2 von 4 · Personenbezogene Erfassung
        </p>

        <h1 className="font-serif text-2xl sm:text-3xl text-olive-dark mb-2">
          Name der zu berufenden Person
        </h1>
        <p className="text-sm text-anthracite/60 mb-10">
          Ihr Name wird für die institutionelle Zuordnung sowie für die Generierung des akademischen Titels herangezogen.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs tracking-wide2 uppercase text-anthracite/50 mb-3">
              Vollständiger Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Dr. Erika Mustermann"
              className="w-full border-b border-line bg-transparent py-3 px-1 font-serif text-lg text-anthracite focus:outline-none focus:border-olive-dark transition-colors placeholder:text-anthracite/25"
              autoFocus
            />
            {error && (
              <p className="text-xs text-rose-dusty mt-2">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-olive-dark text-paper font-sans text-sm tracking-wide2 uppercase hover:bg-anthracite transition-colors duration-200 cursor-pointer"
          >
            Weiter zum Assessment
          </button>
        </form>
      </div>
    </div>
  );
}
