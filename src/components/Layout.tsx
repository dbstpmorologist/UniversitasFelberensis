import type { ReactNode } from 'react';
import { WillowLogo } from './Icons';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function Layout({ children, showHeader = true, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      {showHeader && (
        <header className="border-b border-line bg-paper/95 backdrop-blur-sm sticky top-0 z-10 no-print">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 py-3 flex items-center gap-3">
            <WillowLogo className="w-7 h-7 text-olive-dark" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-base text-olive-dark tracking-wide">Universitas Felberensis</span>
              <span className="text-[10px] text-anthracite/50 tracking-wide2 uppercase mt-0.5">Onboarding-Portal</span>
            </div>
          </div>
        </header>
      )}

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {showFooter && (
        <footer className="border-t border-line bg-paper-warm no-print">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 py-6">
            <div className="flex items-center gap-3 mb-3">
              <WillowLogo className="w-5 h-5 text-olive-dark/60" />
              <span className="font-serif text-sm text-olive-dark">Universitas Felberensis</span>
            </div>
            <p className="text-xs text-anthracite/50 leading-relaxed max-w-md">
              Die global führende Bundes- und Forschungsanstalt für kontrollierte Chaosforschung,
              angewandte Lebenswissenschaften und interdisziplinäre Zukunftsfragen.
            </p>
            <p className="text-[10px] text-anthracite/40 mt-3 tracking-wide2 uppercase">
              Standardisiertes Zuordnungsassessment · Peer Review ausständig
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
