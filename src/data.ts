import type { Department, Question, ChildQuestion } from './types';

export const departments: Record<string, Department> = {
  T: {
    id: 'T',
    name: 'Umsetzungsforschung und praktische Tatkraft',
    shortName: 'Tatkraft',
    field: 'pragmatische Umsetzungsforschung',
    description:
      'Erforschung effizienter Strategien zur Überführung von Problemen, Ideen und akuten Notlagen in konkrete Handlungen.',
    function: 'Leitung des Zentrums für akute Problemlösung',
    iconKey: 'arrow',
    color: '#7E866F',
  },
  S: {
    id: 'S',
    name: 'Spaßwissenschaften und angewandte Lebensfreude',
    shortName: 'Spaß',
    field: 'angewandte Lebensfreudeforschung',
    description:
      'Erforschung positiver sozialer Erlebnisse, gemeinschaftlicher Aktivitäten, Musik, Feierkultur und des Einflusses von YOLO auf das Zusammenleben.',
    function: 'Direktion für angewandte Lebensfreude',
    iconKey: 'sun',
    color: '#C9A89F',
  },
  N: {
    id: 'N',
    name: 'Interdisziplinäre Neugier',
    shortName: 'Neugier',
    field: 'interdisziplinäre Neugierforschung',
    description:
      'Erforschung von Wissenserwerb jenseits etablierter Fachgrenzen, spontanen Interessenwechseln, Nebenprojekten und Themen, für die eigentlich keine Zeit vorhanden wäre.',
    function: 'Koordination interdisziplinärer Nebenprojekte',
    iconKey: 'lens-star',
    color: '#B5BBA8',
  },
  B: {
    id: 'B',
    name: 'Angewandte Beziehungsförderung',
    shortName: 'Beziehung',
    field: 'soziale Kohäsionsforschung',
    description:
      'Forschung zu Kooperation, sozialem Zusammenhalt, Gruppendynamik und gemeinsamer Krisenbewältigung.',
    function: 'Beauftragte:r für soziale Kohäsion und institutionellen Zusammenhalt',
    iconKey: 'circles',
    color: '#D9BFB8',
  },
  I: {
    id: 'I',
    name: 'Improvisation und Heimwerkerforschung',
    shortName: 'Improvisation',
    field: 'experimentelle Improvisationswissenschaft',
    description:
      'Erforschung kreativer Lösungen bei begrenzten Ressourcen. Schwerpunkt: Reparatur, Eigenkonstruktion und die Frage, ob man das wirklich kaufen muss.',
    function: 'Leitung der experimentellen Eigenkonstruktionsstelle',
    iconKey: 'tool-star',
    color: '#B89B4E',
  },
  G: {
    id: 'G',
    name: 'Angewandte Grübelei und Analytik',
    shortName: 'Analytik',
    field: 'angewandte Grübelei und Analytik',
    description:
      'Untersuchung komplexer Denkprozesse, Mustererkennung, Szenarienbildung, Überanalyse und hochdifferenzierter Theorien zu einfachen Sachverhalten.',
    function: 'Direktion für hochdifferenzierte Theoriebildung',
    iconKey: 'labyrinth',
    color: '#4A4D3C',
  },
};

export const dimensionNames: Record<string, string> = {
  T: 'Tatkraft',
  S: 'Spaß',
  N: 'Neugier',
  B: 'Beziehung',
  I: 'Improvisation',
  G: 'Analytik',
};

export const questions: Question[] = [
  {
    id: 1,
    prompt: 'Sie haben unerwartet einen ganzen Nachmittag frei. Was tun Sie?',
    options: [
      { label: 'Ich treffe jemanden oder unternehme etwas gemeinsam.', scores: [{ dim: 'S', points: 2 }, { dim: 'B', points: 1 }] },
      { label: 'Ich probiere etwas Neues aus.', scores: [{ dim: 'N', points: 2 }, { dim: 'I', points: 1 }] },
      { label: 'Ich erledige etwas, das schon länger ansteht.', scores: [{ dim: 'T', points: 2 }, { dim: 'G', points: 1 }] },
      { label: 'Ich mache es mir gemütlich und beschäftige mich mit meinen eigenen Dingen.', scores: [{ dim: 'G', points: 2 }, { dim: 'S', points: 1 }] },
    ],
  },
  {
    id: 2,
    prompt: 'Sie erhalten ein spannendes neues Forschungsprojekt. Wie arbeiten Sie am liebsten?',
    options: [
      { label: 'Im Team – gemeinsam denken, reden und loslegen.', scores: [{ dim: 'B', points: 2 }, { dim: 'S', points: 1 }] },
      { label: 'Alleine – ich arbeite am besten in meinem eigenen Rhythmus.', scores: [{ dim: 'G', points: 2 }, { dim: 'I', points: 1 }] },
      { label: 'Gemischt – gemeinsam starten, dann selbstständig weitermachen.', scores: [{ dim: 'T', points: 2 }, { dim: 'N', points: 1 }] },
      { label: 'Kommt darauf an – Hauptsache, die richtigen Leute sind dabei.', scores: [{ dim: 'B', points: 2 }, { dim: 'S', points: 1 }] },
    ],
  },
  {
    id: 3,
    prompt: 'Ein Forschungsgerät funktioniert plötzlich nicht mehr. Ihr erster Impuls?',
    options: [
      { label: 'Aufmachen und ausprobieren – irgendwie kriegen wir das hin.', scores: [{ dim: 'I', points: 2 }, { dim: 'T', points: 1 }] },
      { label: 'Ich will wissen, warum es nicht funktioniert.', scores: [{ dim: 'G', points: 2 }, { dim: 'N', points: 1 }] },
      { label: 'Ich überlege, wer sich damit auskennt.', scores: [{ dim: 'B', points: 2 }, { dim: 'S', points: 1 }] },
      { label: 'Ich mache einen Plan und löse es.', scores: [{ dim: 'T', points: 2 }, { dim: 'G', points: 1 }] },
    ],
  },
  {
    id: 4,
    prompt: 'Ihre Forschungsgruppe ist unterwegs und niemand weiß, was als Nächstes passiert.',
    options: [
      { label: 'Ich mache einfach einen Vorschlag.', scores: [{ dim: 'T', points: 2 }, { dim: 'S', points: 1 }] },
      { label: 'Ich frage, was die anderen wollen.', scores: [{ dim: 'B', points: 2 }, { dim: 'G', points: 1 }] },
      { label: 'Ich suche schnell eine praktische Lösung.', scores: [{ dim: 'T', points: 2 }, { dim: 'I', points: 1 }] },
      { label: 'Ich warte erst einmal ab, was passiert.', scores: [{ dim: 'S', points: 2 }, { dim: 'N', points: 1 }] },
    ],
  },
  {
    id: 5,
    prompt: 'Sie entdecken ein Forschungsthema, das Sie wirklich interessiert.',
    options: [
      { label: 'Ich will plötzlich alles darüber wissen.', scores: [{ dim: 'G', points: 2 }, { dim: 'N', points: 1 }] },
      { label: 'Ich möchte es sofort ausprobieren.', scores: [{ dim: 'I', points: 2 }, { dim: 'N', points: 1 }] },
      { label: 'Ich überlege, was man damit noch alles machen könnte.', scores: [{ dim: 'N', points: 2 }, { dim: 'T', points: 1 }] },
      { label: 'Ich erzähle jemandem davon.', scores: [{ dim: 'S', points: 2 }, { dim: 'B', points: 1 }] },
    ],
  },
  {
    id: 6,
    prompt: 'Sie haben gleichzeitig fünf Dinge zu erledigen.',
    options: [
      { label: 'Ich mache eine Liste.', scores: [{ dim: 'G', points: 2 }, { dim: 'T', points: 1 }] },
      { label: 'Ich entscheide, was davon am wichtigsten ist.', scores: [{ dim: 'T', points: 2 }, { dim: 'G', points: 1 }] },
      { label: 'Ich springe zwischen allen fünf hin und her.', scores: [{ dim: 'N', points: 2 }, { dim: 'I', points: 1 }] },
      { label: 'Ich mache erst einmal etwas anderes und komme später zurück.', scores: [{ dim: 'I', points: 2 }, { dim: 'N', points: 1 }] },
    ],
  },
  {
    id: 7,
    prompt: 'Nach einem langen Tag mit vielen Menschen …',
    options: [
      { label: '… könnte ich eigentlich noch weitermachen.', scores: [{ dim: 'S', points: 2 }, { dim: 'B', points: 1 }] },
      { label: '… bin ich froh, wenn ich endlich meine Ruhe habe.', scores: [{ dim: 'G', points: 2 }, { dim: 'I', points: 1 }] },
      { label: '… kommt es sehr darauf an, mit wem ich zusammen war.', scores: [{ dim: 'B', points: 2 }, { dim: 'S', points: 1 }] },
      { label: '… habe ich plötzlich tausend neue Ideen.', scores: [{ dim: 'N', points: 2 }, { dim: 'S', points: 1 }] },
    ],
  },
  {
    id: 8,
    prompt: 'Eine Kollegin oder ein Familienmitglied kommt mit einem Problem zu Ihnen.',
    options: [
      { label: 'Ich höre erst einmal zu.', scores: [{ dim: 'B', points: 2 }, { dim: 'G', points: 1 }] },
      { label: 'Ich versuche sofort, es zu lösen.', scores: [{ dim: 'T', points: 2 }, { dim: 'I', points: 1 }] },
      { label: 'Ich möchte verstehen, was eigentlich dahintersteckt.', scores: [{ dim: 'G', points: 2 }, { dim: 'B', points: 1 }] },
      { label: 'Ich überlege, wer sonst helfen könnte.', scores: [{ dim: 'B', points: 2 }, { dim: 'T', points: 1 }] },
    ],
  },
  {
    id: 9,
    prompt: 'Sie erhalten eine wissenschaftlich nutzbare Superkraft. Welche wählen Sie?',
    options: [
      { label: 'Alles reparieren können.', scores: [{ dim: 'I', points: 2 }, { dim: 'T', points: 1 }] },
      { label: 'Jede Frage beantworten können.', scores: [{ dim: 'G', points: 2 }, { dim: 'N', points: 1 }] },
      { label: 'Überall auf der Welt hinreisen können.', scores: [{ dim: 'N', points: 2 }, { dim: 'S', points: 1 }] },
      { label: 'Immer wissen, was andere Menschen brauchen.', scores: [{ dim: 'B', points: 2 }, { dim: 'G', points: 1 }] },
    ],
  },
  {
    id: 10,
    prompt: 'Sie dürfen einen Tag lang mit einer berühmten Forscherpersönlichkeit arbeiten. Mit wem?',
    options: [
      { label: 'Marie Curie – beharrlich und präzise.', scores: [{ dim: 'G', points: 1 }, { dim: 'T', points: 1 }], marker: 'Präzision' },
      { label: 'Leonardo da Vinci – neugierig und vielseitig.', scores: [{ dim: 'N', points: 1 }, { dim: 'I', points: 1 }], marker: 'Interdisziplinarität' },
      { label: 'Jane Goodall – beobachtend und geduldig.', scores: [{ dim: 'N', points: 1 }, { dim: 'B', points: 1 }], marker: 'Beobachtung' },
      { label: 'Nikola Tesla – visionär und experimentierfreudig.', scores: [{ dim: 'I', points: 1 }, { dim: 'N', points: 1 }], marker: 'Experiment' },
    ],
  },
  {
    id: 11,
    prompt: 'Eine Gruppe droht auseinanderzufallen. Was tun Sie?',
    options: [
      { label: 'Ich bringe alle wieder an einen Tisch.', scores: [{ dim: 'B', points: 2 }, { dim: 'S', points: 1 }] },
      { label: 'Ich versuche herauszufinden, was schiefgelaufen ist.', scores: [{ dim: 'G', points: 2 }, { dim: 'B', points: 1 }] },
      { label: 'Ich organisiere etwas, das alle wieder zusammenbringt.', scores: [{ dim: 'S', points: 2 }, { dim: 'T', points: 1 }] },
      { label: 'Ich schaue, wer gerade Unterstützung braucht.', scores: [{ dim: 'B', points: 2 }, { dim: 'T', points: 1 }] },
    ],
  },
  {
    id: 12,
    prompt: 'Sie erhalten ein unbegrenztes Forschungsbudget. Was möchten Sie wirklich erforschen?',
    options: [
      { label: 'Menschen – Beziehungen, Verhalten, Gesellschaft und warum Menschen so sind, wie sie sind.', scores: [{ dim: 'G', points: 2 }, { dim: 'N', points: 1 }], marker: 'Menschen' },
      { label: 'Die Welt – Tiere, Natur, Umwelt, Weltraum und alles, was es zu entdecken gibt.', scores: [{ dim: 'N', points: 2 }, { dim: 'B', points: 1 }], marker: 'Natur' },
      { label: 'Dinge – Technik, Erfindungen, Maschinen und wie man Dinge besser machen kann.', scores: [{ dim: 'I', points: 2 }, { dim: 'N', points: 1 }], marker: 'Erfindungen' },
      { label: 'Ideen – Kunst, Geschichte, Geschichten, Kultur und die großen Fragen des Lebens.', scores: [{ dim: 'G', points: 2 }, { dim: 'N', points: 1 }], marker: 'Kultur' },
    ],
  },
  {
    id: 13,
    prompt: 'Sie dürfen ein Tier als offizielle Forschungsassistenz einstellen. Welches wählen Sie?',
    options: [
      { label: 'Eichhörnchen – flink und neugierig.', scores: [{ dim: 'N', points: 1 }, { dim: 'S', points: 1 }], marker: 'Eichhörnchen' },
      { label: 'Eule – ruhig und aufmerksam.', scores: [{ dim: 'G', points: 1 }, { dim: 'B', points: 1 }], marker: 'Eule' },
      { label: 'Biber – baut und repariert.', scores: [{ dim: 'I', points: 1 }, { dim: 'T', points: 1 }], marker: 'Biber' },
      { label: 'Delfin – kommunikativ und spielerisch.', scores: [{ dim: 'B', points: 1 }, { dim: 'S', points: 1 }], marker: 'Delfin' },
    ],
  },
  {
    id: 14,
    prompt: 'Lange Forschungssitzung – welcher Snack darf nicht fehlen?',
    options: [
      { label: 'Schokolade', scores: [{ dim: 'S', points: 1 }, { dim: 'G', points: 1 }], marker: 'Schokolade' },
      { label: 'Chips', scores: [{ dim: 'S', points: 1 }, { dim: 'I', points: 1 }], marker: 'Chips' },
      { label: 'Nüsse', scores: [{ dim: 'I', points: 1 }, { dim: 'T', points: 1 }], marker: 'Nüsse' },
      { label: 'Obst', scores: [{ dim: 'N', points: 1 }, { dim: 'B', points: 1 }], marker: 'Obst' },
    ],
  },
];

export const childQuestions: ChildQuestion[] = [
  {
    id: 1,
    prompt: 'Was machst du am liebsten, wenn du Zeit hast?',
    options: [
      { label: 'Etwas Neues entdecken', role: 'Junior Exploration Fellow' },
      { label: 'Etwas bauen oder reparieren', role: 'Junior Repair Researcher' },
      { label: 'Mit anderen zusammen sein', role: 'Junior Social Researcher' },
      { label: 'Einfach mal gucken, was passiert', role: 'Junior Chaos Research Assistant' },
    ],
  },
  {
    id: 2,
    prompt: 'Etwas ist kaputt. Was machst du?',
    options: [
      { label: 'Ich probiere es zu reparieren', role: 'Junior Repair Researcher' },
      { label: 'Ich frage jemanden um Hilfe', role: 'Junior Social Researcher' },
      { label: 'Ich schaue mir genau an, warum es kaputt ist', role: 'Junior Research Assistant for Curious Things' },
      { label: 'Ich baue etwas ganz Neues daraus', role: 'Junior Imagination Researcher' },
    ],
  },
  {
    id: 3,
    prompt: 'Was findest du am spannendsten?',
    options: [
      { label: 'Tiere und Natur', role: 'Junior Exploration Fellow' },
      { label: 'Wie Dinge funktionieren', role: 'Junior Research Assistant for Curious Things' },
      { label: 'Geschichten erfinden', role: 'Junior Imagination Researcher' },
      { label: 'Mit Freunden etwas machen', role: 'Junior Social Researcher' },
    ],
  },
  {
    id: 4,
    prompt: 'Welche Superkraft würdest du wählen?',
    options: [
      { label: 'Alles reparieren können', role: 'Junior Repair Researcher' },
      { label: 'Alles wissen können', role: 'Junior Research Assistant for Curious Things' },
      { label: 'Überall hinfliegen können', role: 'Junior Exploration Fellow' },
      { label: 'Unsichtbar sein', role: 'Junior Chaos Research Assistant' },
    ],
  },
  {
    id: 5,
    prompt: 'Welches Tier würdest du als Forschungsassistenz nehmen?',
    options: [
      { label: 'Eichhörnchen', role: 'Junior Exploration Fellow' },
      { label: 'Biber', role: 'Junior Repair Researcher' },
      { label: 'Delfin', role: 'Junior Social Researcher' },
      { label: 'Eule', role: 'Junior Research Assistant for Curious Things' },
    ],
  },
  {
    id: 6,
    prompt: 'Was würdest du mit einem geheimen Forschungslabor machen?',
    options: [
      { label: 'Verrückte Experimente machen', role: 'Junior Imagination Researcher' },
      { label: 'Alles untersuchen und herausfinden', role: 'Junior Research Assistant for Curious Things' },
      { label: 'Freunde einladen und gemeinsam forschen', role: 'Junior Social Researcher' },
      { label: 'Einfach mal alles ausprobieren', role: 'Junior Chaos Research Assistant' },
    ],
  },
];

export const siblingOptions: { value: string; label: string }[] = [
  { value: 'Erstgeborene:r', label: 'Erstgeborene:r' },
  { value: 'Mittelgeborene:r', label: 'Mittelgeborene:r' },
  { value: 'Jüngste:r', label: 'Jüngste:r' },
  { value: 'Einzelkind', label: 'Einzelkind' },
  { value: 'Zwillingsgeschwister', label: 'Zwillingsgeschwister' },
  { value: 'Adoptiv- oder Stiefgeschwister', label: 'Adoptiv- oder Stiefgeschwister' },
  { value: 'Nicht angegeben', label: 'Nicht angegeben' },
];
