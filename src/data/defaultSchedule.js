// Categorias com cores
export const CATEGORIES = {
  'tecnica-cirurgica': { label: 'Téc. Cirúrgica', color: '#2e7d32', textColor: '#c8e6c9' },
  'pediatria': { label: 'Pediatria', color: '#1565c0', textColor: '#bbdefb' },
  'epidemiologia': { label: 'Epidemiologia', color: '#6a1b9a', textColor: '#e1bee7' },
  'clinica-medica': { label: 'Clínica Médica I', color: '#c62828', textColor: '#ffcdd2' },
  'bioetica': { label: 'Bioética Aplicada', color: '#e65100', textColor: '#ffe0b2' },
  'genetica': { label: 'Genética Médica', color: '#00838f', textColor: '#b2ebf2' },
  'estudo': { label: 'Estudo', color: '#283593', textColor: '#c5cae9' },
  'osler': { label: 'Osler (Revisão)', color: '#f9a825', textColor: '#1a1a2e' },
  'negocios': { label: 'Negócios', color: '#ad1457', textColor: '#f8bbd0' },
  'academia': { label: 'Academia', color: '#33691e', textColor: '#dcedc8' },
  'liga': { label: 'Liga Acadêmica', color: '#ff6f00', textColor: '#fff3e0' },
  'corrida': { label: 'Corrida', color: '#2e7d32', textColor: '#c8e6c9' },
  'almoco': { label: 'Almoço', color: '#4e342e', textColor: '#bcaaa4' },
  'livre': { label: 'Livre', color: '#37474f', textColor: '#78909c' },
  'vazio': { label: '', color: 'transparent', textColor: '#555' },
};

export const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export const TIME_SLOTS = [
  { time: '07:45 – 08:35', period: 'manha' },
  { time: '08:35 – 09:25', period: 'manha' },
  { time: '09:45 – 10:35', period: 'manha' },
  { time: '10:35 – 11:25', period: 'manha' },
  { time: '11:25 – 12:15', period: 'manha' },
  { time: '12:15 – 13:15', period: 'almoco' },
  { time: '13:30 – 14:20', period: 'tarde' },
  { time: '14:20 – 15:10', period: 'tarde' },
  { time: '15:10 – 16:00', period: 'tarde' },
  { time: '16:20 – 17:10', period: 'tarde' },
  { time: '17:10 – 18:00', period: 'tarde' },
  { time: '18:00 – 18:50', period: 'tarde' },
  { time: '19:15 – 20:15', period: 'noite' },
  { time: '20:15 – 21:15', period: 'noite' },
  { time: '21:15 – 22:00', period: 'noite' },
  { time: '22:00 – 22:45', period: 'noite' },
];

// schedule[slotIndex][dayIndex] = { category, detail }
export const DEFAULT_SCHEDULE = [
  // 07:45
  [
    { category: 'tecnica-cirurgica', detail: 'HUnovo 311' },
    { category: 'pediatria', detail: '' },
    { category: 'osler', detail: 'Revisão' },
    { category: 'pediatria', detail: '' },
    { category: 'pediatria', detail: '' },
    { category: 'corrida', detail: '8:00' },
  ],
  // 08:35
  [
    { category: 'tecnica-cirurgica', detail: 'HUnovo 311' },
    { category: 'pediatria', detail: '' },
    { category: 'osler', detail: 'Revisão' },
    { category: 'pediatria', detail: '' },
    { category: 'pediatria', detail: '' },
    { category: 'corrida', detail: '' },
  ],
  // 09:45
  [
    { category: 'tecnica-cirurgica', detail: 'HUnovo 311' },
    { category: 'pediatria', detail: '' },
    { category: 'negocios', detail: '' },
    { category: 'pediatria', detail: '' },
    { category: 'pediatria', detail: '' },
    { category: 'negocios', detail: '' },
  ],
  // 10:35
  [
    { category: 'epidemiologia', detail: 'HUnovo 310' },
    { category: 'pediatria', detail: 'HUnovo 309' },
    { category: 'negocios', detail: '' },
    { category: 'pediatria', detail: 'HUnovo 309' },
    { category: 'pediatria', detail: 'HUnovo 309' },
    { category: 'negocios', detail: '' },
  ],
  // 11:25
  [
    { category: 'epidemiologia', detail: 'HUnovo 310' },
    { category: 'estudo', detail: 'Pediatria' },
    { category: 'estudo', detail: 'Bioética / Epid.' },
    { category: 'estudo', detail: 'Pediatria' },
    { category: 'estudo', detail: 'Genética' },
    { category: 'livre', detail: '' },
  ],
  // 12:15 – Almoço
  [
    { category: 'almoco', detail: 'Descanso' },
    { category: 'almoco', detail: 'Descanso' },
    { category: 'almoco', detail: 'Descanso' },
    { category: 'almoco', detail: 'Descanso' },
    { category: 'almoco', detail: 'Descanso' },
    { category: 'livre', detail: '' },
  ],
  // 13:30
  [
    { category: 'clinica-medica', detail: '' },
    { category: 'clinica-medica', detail: '' },
    { category: 'clinica-medica', detail: '' },
    { category: 'clinica-medica', detail: '' },
    { category: 'genetica', detail: 'HUnovo 401' },
    { category: 'livre', detail: '' },
  ],
  // 14:20
  [
    { category: 'clinica-medica', detail: '' },
    { category: 'clinica-medica', detail: '' },
    { category: 'clinica-medica', detail: '' },
    { category: 'clinica-medica', detail: '' },
    { category: 'genetica', detail: 'HUnovo 401' },
    { category: 'livre', detail: '' },
  ],
  // 15:10
  [
    { category: 'genetica', detail: 'HUnovo 409' },
    { category: 'clinica-medica', detail: '' },
    { category: 'osler', detail: 'Revisão' },
    { category: 'clinica-medica', detail: '' },
    { category: 'clinica-medica', detail: '' },
    { category: 'livre', detail: '' },
  ],
  // 16:20
  [
    { category: 'genetica', detail: 'HUnovo 409' },
    { category: 'estudo', detail: 'Clínica Médica' },
    { category: 'epidemiologia', detail: 'HUnovo 410' },
    { category: 'estudo', detail: 'Clínica Médica' },
    { category: 'estudo', detail: 'Téc. Cirúrgica' },
    { category: 'livre', detail: '' },
  ],
  // 17:10
  [
    { category: 'osler', detail: 'Revisão' },
    { category: 'estudo', detail: 'Clínica Médica' },
    { category: 'estudo', detail: 'Epidemiologia' },
    { category: 'estudo', detail: 'Clínica Médica' },
    { category: 'osler', detail: 'Revisão' },
    { category: 'livre', detail: '' },
  ],
  // 18:00
  [
    { category: 'clinica-medica', detail: 'HUnovo 410' },
    { category: 'negocios', detail: '' },
    { category: 'clinica-medica', detail: 'HUnovo 410' },
    { category: 'negocios', detail: '' },
    { category: 'clinica-medica', detail: 'HUnovo 410' },
    { category: 'livre', detail: '' },
  ],
  // 19:15
  [
    { category: 'liga', detail: 'LIC' },
    { category: 'liga', detail: 'LAME' },
    { category: 'academia', detail: '' },
    { category: 'academia', detail: '' },
    { category: 'academia', detail: '' },
    { category: 'livre', detail: '' },
  ],
  // 20:15
  [
    { category: 'liga', detail: 'LIC' },
    { category: 'liga', detail: 'LAME' },
    { category: 'academia', detail: '' },
    { category: 'academia', detail: '' },
    { category: 'academia', detail: '' },
    { category: 'livre', detail: '' },
  ],
  // 21:15
  [
    { category: 'academia', detail: '' },
    { category: 'academia', detail: '' },
    { category: 'livre', detail: '' },
    { category: 'livre', detail: '' },
    { category: 'livre', detail: '' },
    { category: 'livre', detail: '' },
  ],
  // 22:00
  [
    { category: 'academia', detail: '' },
    { category: 'academia', detail: '' },
    { category: 'livre', detail: '' },
    { category: 'livre', detail: '' },
    { category: 'livre', detail: '' },
    { category: 'livre', detail: '' },
  ],
];
