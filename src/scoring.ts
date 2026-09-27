import type { Dimension, ScoreResult, AssessmentState } from './types';
import { questions } from './data';

const TIE_BREAK_ORDER: Dimension[] = ['T', 'G', 'N', 'I', 'B', 'S'];

export function calculateScores(state: AssessmentState): ScoreResult {
  const scores: Record<Dimension, number> = { T: 0, S: 0, N: 0, B: 0, I: 0, G: 0 };
  const markers: string[] = [];

  for (const question of questions) {
    const optionIndex = state.answers[question.id];
    if (optionIndex === undefined) continue;
    const option = question.options[optionIndex];
    if (!option) continue;
    for (const score of option.scores) {
      scores[score.dim] += score.points;
    }
    if (option.marker) {
      markers.push(option.marker);
    }
  }

  const ranking = [...TIE_BREAK_ORDER].sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a];
    return TIE_BREAK_ORDER.indexOf(a) - TIE_BREAK_ORDER.indexOf(b);
  });

  return {
    scores,
    primary: ranking[0],
    secondary: ranking[1],
    ranking,
    markers,
  };
}

export function getMaxScore(scores: Record<Dimension, number>): number {
  return Math.max(...Object.values(scores), 1);
}
