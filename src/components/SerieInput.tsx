import { useState } from 'react';

interface SerieInputProps {
  onSubmit: (serie: string) => void;
  onBack: () => void;
  initialSerie?: string;
}

export function SerieInput({ onSubmit, onBack, initialSerie = '' }: SerieInputProps) {
  const [serie, setSerie] = useState(initialSerie);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(serie.trim());
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
          Schritt 3 von 4 · Persönliche Zusatzdaten
        </p>

        <h1 className="font-serif text-2xl sm:text-3xl text-olive-dark mb-2">
          Serientitel
        </h1>
        <p className="text-sm text-anthracite/60 mb-10">
          Welche Serie könnte Ihr aktuelles Leben derzeit tragen? Diese Angabe ist optional und kann in Ihren akademischen Titel einfließen.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="serie" className="block text-xs tracking-wide2 uppercase text-anthracite/50 mb-3">
              Serientitel (Freitext, optional)
            </label>
            <input
              id="serie"
              type="text"
              value={serie}
              onChange={(e) => setSerie(e.target.value)}
              placeholder="14 offene Tabs"
              className="w-full border-b border-line bg-transparent py-3 px-1 font-serif text-lg text-anthracite focus:outline-none focus:border-olive-dark transition-colors placeholder:text-anthracite/25"
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-olive-dark text-paper font-sans text-sm tracking-wide2 uppercase hover:bg-anthracite transition-colors duration-200 cursor-pointer"
          >
            Weiter
          </button>
        </form>
      </div>
    </div>
  );
}
