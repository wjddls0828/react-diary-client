export const THEME_COLOR = {
  BROWN: '#7b6d6c',
  LIGHT_BROWN: '#C1B7B7',
  PINK: '#de6287',
  BEIGE: '#F1F0EF',
};

export type MoodIcon = { id: number; src: string; color: string; className: string };
export const MOOD_ICONS: MoodIcon[] = [
  { id: 1, src: 'good.png', color: '#FEABA6', className: 'goodMood' },
  { id: 2, src: 'soso.png', color: '#FDD65E', className: 'sosoMood' },
  { id: 3, src: 'sad.png', color: '#89ABCA', className: 'sadMood' },
];
