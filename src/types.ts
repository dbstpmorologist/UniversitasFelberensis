export type Dimension = 'T' | 'S' | 'N' | 'B' | 'I' | 'G';

export type AccessType = 'adult' | 'child';

export type Screen =
  | 'home'
  | 'access'
  | 'name'
  | 'question'
  | 'serie'
  | 'sibling'
  | 'result'
  | 'childQuestion'
  | 'childResult';

export interface AnswerScore {
  dim: Dimension;
  points: number;
}

export interface QuestionOption {
  label: string;
  scores: AnswerScore[];
  marker?: string;
}

export interface Question {
  id: number;
  prompt: string;
  options: QuestionOption[];
}

export interface Department {
  id: Dimension;
  name: string;
  shortName: string;
  field: string;
  description: string;
  function: string;
  iconKey: string;
  color: string;
}

export type SiblingPosition =
  | 'Erstgeborene:r'
  | 'Mittelgeborene:r'
  | 'Jüngste:r'
  | 'Einzelkind'
  | 'Zwillingsgeschwister'
  | 'Adoptiv- oder Stiefgeschwister'
  | 'Nicht angegeben';

export interface AssessmentState {
  accessType: AccessType;
  name: string;
  answers: Record<number, number>; // questionId -> optionIndex
  serie: string;
  sibling: SiblingPosition | '';
  childAnswers: Record<number, number>;
}

export interface ScoreResult {
  scores: Record<Dimension, number>;
  primary: Dimension;
  secondary: Dimension;
  ranking: Dimension[];
  markers: string[];
}

export interface ChildQuestion {
  id: number;
  prompt: string;
  options: { label: string; role: string }[];
}

export type ChildRole =
  | 'Junior Research Assistant for Curious Things'
  | 'Junior Repair Researcher'
  | 'Junior Social Researcher'
  | 'Junior Exploration Fellow'
  | 'Junior Imagination Researcher'
  | 'Junior Chaos Research Assistant';
