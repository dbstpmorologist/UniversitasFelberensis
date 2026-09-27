import type { ChildQuestion } from '../types';

interface ChildQuestionViewProps {
  question: ChildQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onSelect: (optionIndex: number) => void;
  onBack: () => void;
}

export function ChildQuestionView({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelect,
  onBack,
}: ChildQuestionViewProps) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="flex-1 flex flex-col px-5 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <div className="max-w-2xl w-full mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="text-xs text-anthracite/50 hover:text-olive-dark transition-colors flex items-center gap-1.5"
          >
            <span>←</span> Zurück
          </button>
          <span className="text-[11px] tracking-wide2 uppercase text-anthracite/50">
            Frage {questionIndex + 1} von {totalQuestions}
          </span>
        </div>

        <div className="mb-8">
          <div className="h-px bg-line relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-px bg-olive-dark transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] tracking-wide2 uppercase text-anthracite/40">Fortschritt</span>
            <span className="text-[10px] tracking-wide2 uppercase text-anthracite/40">{Math.round(progress)}%</span>
          </div>
        </div>

        <h1 className="font-serif text-xl sm:text-2xl text-anthracite mb-8 leading-snug text-balance animate-fade-in-up">
          {question.prompt}
        </h1>

        <div className="space-y-3">
          {question.options.map((option, i) => {
            const isSelected = selectedAnswer === i;
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
                className={`w-full text-left border transition-all duration-200 p-4 sm:p-5 group cursor-pointer animate-fade-in-up ${
                  isSelected
                    ? 'border-olive-dark bg-sage-pale/40'
                    : 'border-line bg-paper hover:border-olive-mid hover:bg-paper-warm'
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span
                  className={`text-sm sm:text-base leading-relaxed transition-colors ${
                    isSelected ? 'text-anthracite' : 'text-anthracite/80 group-hover:text-anthracite'
                  }`}
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
