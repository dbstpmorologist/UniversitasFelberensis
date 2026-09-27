import { WillowLogo } from './Icons';

interface HomeProps {
  onStart: () => void;
}

export function Home({ onStart }: HomeProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-5 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl w-full text-center animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <WillowLogo className="w-20 h-20 text-olive-dark" />
        </div>

        <div className="mb-2">
          <p className="text-[11px] tracking-wide3 uppercase text-anthracite/50 mb-4">
            Akedamisches Verorschungsinstitut
          </p>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-olive-dark mb-3 leading-tight">
          Universitas Felberensis
        </h1>

        <p className="font-serif italic text-base sm:text-lg text-anthracite-soft mb-10 leading-relaxed max-w-xl mx-auto">
          Die global führende Bundes- und Forschungsanstalt für kontrollierte Chaosforschung,
          angewandte Lebenswissenschaften und interdisziplinäre Zukunftsfragen.
        </p>

        <div className="border-t border-b border-line py-8 my-8">
          <h2 className="font-serif text-xl text-anthracite mb-1">
            Onboarding für wissenschaftliche Mitarbeiter:innen
          </h2>
          <p className="text-sm text-anthracite/60 mb-6">
            Standardisiertes Aufnahme- und Zuordnungsverfahren
          </p>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-anthracite/60 max-w-sm mx-auto mb-8 text-left">
            <dt className="text-anthracite/45">Verfahrensdauer</dt>
            <dd>ca. 3 Minuten</dd>
            <dt className="text-anthracite/45">Datengrundlage</dt>
            <dd>Selbstauskunft</dd>
            <dt className="text-anthracite/45">Peer Review</dt>
            <dd>ausständig</dd>
            <dt className="text-anthracite/45">Interessenkonflikte</dt>
            <dd>familiär bedingt</dd>
          </dl>

          <button
            onClick={onStart}
            className="inline-flex items-center gap-2 px-8 py-3 bg-olive-dark text-paper font-sans text-sm tracking-wide2 uppercase hover:bg-anthracite transition-colors duration-200 cursor-pointer"
          >
            Assessment beginnen
          </button>
        </div>

        <p className="text-[10px] tracking-wide2 uppercase text-anthracite/40">
          Mit der Teilnahme akzeptieren Sie die imaginäre Verfahrensordnung der Universitas Felberensis
        </p>
      </div>
    </div>
  );
}
