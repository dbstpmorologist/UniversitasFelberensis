import type { Dimension, ScoreResult, AssessmentState } from './types';
import { departments } from './data';

interface TitleInput {
  result: ScoreResult;
  state: AssessmentState;
}

const fieldAdjectives: Record<Dimension, string[]> = {
  T: ['praktische Tatkraft', 'akute Problemlösung', 'institutionelle Krisenbewältigung', 'Umsetzungsforschung'],
  S: ['angewandte Lebensfreude', 'soziale Erlebnisforschung', 'Feierkultur', 'unstrukturierte Forschung'],
  N: ['interdisziplinäre Neugierforschung', 'experimentelle Nebenprojektarchitektur', 'spontane Interessenwechsel', 'Wissenserwerb jenseits etablierter Fachgrenzen'],
  B: ['soziale Kohäsionsforschung', 'Beziehungsförderung', 'gemeinsame Krisenbewältigung', 'Gruppendynamik'],
  I: ['experimentelle Improvisationswissenschaft', 'improvisierte Eigenkonstruktion', 'Ressourcenminimierung', 'Heimwerkerforschung'],
  G: ['angewandte Grübelei', 'hochdifferenzierte Theoriebildung', 'Mustererkennung', 'Überanalyse'],
};

const markerTerms: Record<string, string> = {
  'Präzision': 'Präzisionsforschung',
  'Interdisziplinarität': 'interdisziplinäre Querschnittsforschung',
  'Beobachtung': 'Beobachtungsforschung',
  'Experiment': 'experimentelle Versuchsforschung',
  'Menschen': 'Verhaltensforschung',
  'Natur': 'Naturforschung',
  'Erfindungen': 'Erfindungsforschung',
  'Kultur': 'Kulturforschung',
  'Eichhörnchen': 'flinke Nebenbeobachtung',
  'Eule': 'nächtliche Beobachtungsforschung',
  'Biber': 'konstruktive Bauwirtschaft',
  'Delfin': 'kommunikative Sozialforschung',
  'Schokolade': 'Snackforschung',
  'Chips': 'knusprige Nebenuntersuchung',
  'Nüsse': 'nährstoffoptimierte Sitzungsforschung',
  'Obst': 'vitaminreiche Langzeitforschung',
};

function pickByIndex(arr: string[], seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  return arr[Math.abs(hash) % arr.length];
}

function pickPrefix(name: string): string {
  const prefixes = ['Univ.-Prof. Dr.', 'Prof. Dr.', 'Univ.-Doz. Dr.', 'Mag. Dr.', 'Univ.-Prof. Dr. Dr.'];
  return pickByIndex(prefixes, name || 'default');
}

function pickConnector(seed: string): string {
  const connectors = ['und', 'sowie'];
  return pickByIndex(connectors, seed);
}

export function generateTitle({ result, state }: TitleInput): string {
  const primary = departments[result.primary];
  const secondary = departments[result.secondary];
  const name = state.name || 'Unbekannt';

  const seed = name + result.ranking.join('') + result.markers.join('');

  const primaryField = pickByIndex(fieldAdjectives[result.primary], seed + 'p');
  const secondaryField = pickByIndex(fieldAdjectives[result.secondary], seed + 's');
  const connector = pickConnector(seed);

  const markerTerm = result.markers.length > 0
    ? `, ${pickConnector(seed + 'm')} ${pickByIndex(result.markers.map(m => markerTerms[m] || m), seed + 'marker')}`
    : '';

  const serieTerm = state.serie.trim()
    ? `, ${pickConnector(seed + 'ser')} ${state.serie.trim().toLowerCase()}-bezogene Nebenforschung`
    : '';

  return `${pickPrefix(name)} für ${primaryField}, ${secondaryField}${markerTerm}${serieTerm}`;
}

export function generateResearchFocus(result: ScoreResult, state: AssessmentState): string {
  const primary = departments[result.primary];
  const secondary = departments[result.secondary];
  const markers = result.markers;

  const parts: string[] = [primary.field];
  if (markers.length > 0) {
    parts.push(`mit besonderem Bezug auf ${markers.slice(0, 2).join(' und ')}`);
  }
  parts.push(`sowie ${secondary.field}`);
  return parts.join(' ');
}

export function generateWorkProfile(result: ScoreResult): string {
  const primary = departments[result.primary];
  const secondary = departments[result.secondary];

  const profiles: Record<Dimension, string> = {
    T: 'Sie zeichnen sich durch eine ausgeprägte Neigung zur sofortigen Umsetzung aus. Abstrakte Erwägungen werden zügig in konkrete Schritte überführt. Die Bearbeitung akuter Problemstellungen hat Priorität vor vollständiger Theoriebildung.',
    S: 'Ihre Arbeitsweise ist von hoher sozialer Dynamik geprägt. Gemeinsame Erlebnisse und kollektive Aktivitäten bilden den Ausgangspunkt Ihrer Forschungspraxis. Die Bereitschaft zu spontanen Entscheidungen ist überdurchschnittlich hoch.',
    N: 'Sie zeigen ein starkes Interesse an Themen jenseits etablierter Fachgrenzen. Häufiger Interessenwechsel und Nebenprojekte sind charakteristisch. Die Breite der Interessen übersteigt die Tiefe der einzelnen Verankerung.',
    B: 'Ihr Profil ist durch eine hohe Sensibilität für soziale Dynamiken gekennzeichnet. Kooperation und Gruppenkohäsion stehen im Zentrum Ihrer Arbeitsweise. Die Einbindung anderer Personen in Forschungsprozesse ist Ihnen ein wichtiges Anliegen.',
    I: 'Sie verfügen über eine ausgeprägte Neigung zur improvisierten Problemlösung unter begrenzten Ressourcen. Eigenkonstruktion und Reparatur haben Vorrang vor Standardlösungen. Die Frage, ob ein Anschaffung tatsächlich notwendig ist, wird regelmäßig verneint.',
    G: 'Ihre Arbeitsweise ist durch tiefgehende Analyse und Mustererkennung gekennzeichnet. Komplexe Denkprozesse und Szenarienbildung haben Vorrang vor sofortigem Handeln. Die Überanalyse einfacher Sachverhalte ist dokumentiert.',
  };

  return `${profiles[result.primary]} Im sekundären Bereich zeigt sich zudem: ${profiles[result.secondary].toLowerCase()}`;
}
