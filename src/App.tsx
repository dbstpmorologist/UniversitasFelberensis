import { useState, useEffect, useCallback } from 'react';
import type { AccessType, AssessmentState, Screen, SiblingPosition } from './types';
import { questions, childQuestions } from './data';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Access } from './components/Access';
import { NameInput } from './components/NameInput';
import { QuestionView } from './components/QuestionView';
import { SerieInput } from './components/SerieInput';
import { SiblingInput } from './components/SiblingInput';
import { ResultView } from './components/ResultView';
import { ChildQuestionView } from './components/ChildQuestionView';
import { ChildResultView } from './components/ChildResultView';

const STORAGE_KEY = 'uf-assessment-state';

function createInitialState(): AssessmentState {
  return {
    accessType: 'adult',
    name: '',
    answers: {},
    serie: '',
    sibling: '',
    childAnswers: {},
  };
}

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [state, setState] = useState<AssessmentState>(createInitialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as AssessmentState;
        setState({ ...createInitialState(), ...parsed });
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage on state change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const handleStart = useCallback(() => {
    setScreen('access');
  }, []);

  const handleAccessSelect = useCallback((type: AccessType) => {
    setState((prev) => ({ ...prev, accessType: type }));
    if (type === 'adult') {
      setScreen('name');
    } else {
      setQuestionIndex(0);
      setScreen('childQuestion');
    }
  }, []);

  const handleNameSubmit = useCallback((name: string) => {
    setState((prev) => ({ ...prev, name }));
    setQuestionIndex(0);
    setScreen('question');
  }, []);

  const handleQuestionAnswer = useCallback((optionIndex: number) => {
    const question = questions[questionIndex];
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [question.id]: optionIndex },
    }));

    // Auto-advance after a short delay
    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setScreen('serie');
      }
    }, 280);
  }, [questionIndex]);

  const handleQuestionBack = useCallback(() => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      setScreen('name');
    }
  }, [questionIndex]);

  const handleSerieSubmit = useCallback((serie: string) => {
    setState((prev) => ({ ...prev, serie }));
    setScreen('sibling');
  }, []);

  const handleSerieBack = useCallback(() => {
    setQuestionIndex(questions.length - 1);
    setScreen('question');
  }, []);

  const handleSiblingSubmit = useCallback((sibling: SiblingPosition) => {
    setState((prev) => ({ ...prev, sibling }));
    setScreen('result');
  }, []);

  const handleSiblingBack = useCallback(() => {
    setScreen('serie');
  }, []);

  // Child flow
  const handleChildAnswer = useCallback((optionIndex: number) => {
    const question = childQuestions[questionIndex];
    setState((prev) => ({
      ...prev,
      childAnswers: { ...prev.childAnswers, [question.id]: optionIndex },
    }));

    setTimeout(() => {
      if (questionIndex < childQuestions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setScreen('childResult');
      }
    }, 280);
  }, [questionIndex]);

  const handleChildBack = useCallback(() => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      setScreen('access');
    }
  }, [questionIndex]);

  const handleRestart = useCallback(() => {
    const fresh = createInitialState();
    setState(fresh);
    setQuestionIndex(0);
    setScreen('home');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const handleHomeBack = useCallback(() => {
    setScreen('home');
  }, []);

  // Render
  switch (screen) {
    case 'home':
      return (
        <Layout showFooter>
          <Home onStart={handleStart} />
        </Layout>
      );

    case 'access':
      return (
        <Layout>
          <Access onSelect={handleAccessSelect} onBack={handleHomeBack} />
        </Layout>
      );

    case 'name':
      return (
        <Layout>
          <NameInput
            onSubmit={handleNameSubmit}
            onBack={() => setScreen('access')}
            initialName={state.name}
          />
        </Layout>
      );

    case 'question': {
      const question = questions[questionIndex];
      return (
        <Layout>
          <QuestionView
            question={question}
            questionIndex={questionIndex}
            totalQuestions={questions.length}
            selectedAnswer={state.answers[question.id]}
            onSelect={handleQuestionAnswer}
            onBack={handleQuestionBack}
          />
        </Layout>
      );
    }

    case 'serie':
      return (
        <Layout>
          <SerieInput
            onSubmit={handleSerieSubmit}
            onBack={handleSerieBack}
            initialSerie={state.serie}
          />
        </Layout>
      );

    case 'sibling':
      return (
        <Layout>
          <SiblingInput
            onSubmit={handleSiblingSubmit}
            onBack={handleSiblingBack}
            initialSibling={state.sibling}
          />
        </Layout>
      );

    case 'result':
      return (
        <Layout showFooter={false}>
          <ResultView state={state} onRestart={handleRestart} />
        </Layout>
      );

    case 'childQuestion': {
      const question = childQuestions[questionIndex];
      return (
        <Layout>
          <ChildQuestionView
            question={question}
            questionIndex={questionIndex}
            totalQuestions={childQuestions.length}
            selectedAnswer={state.childAnswers[question.id]}
            onSelect={handleChildAnswer}
            onBack={handleChildBack}
          />
        </Layout>
      );
    }

    case 'childResult':
      return (
        <Layout showFooter={false}>
          <ChildResultView state={state} onRestart={handleRestart} />
        </Layout>
      );

    default:
      return (
        <Layout showFooter>
          <Home onStart={handleStart} />
        </Layout>
      );
  }
}

export default App;
