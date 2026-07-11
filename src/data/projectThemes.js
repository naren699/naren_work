export const PROJECT_THEMES = {
  purple: { hex: '#8B5CF6', rgb: '139,92,246' },
  blue: { hex: '#3B82F6', rgb: '59,130,246' },
  emerald: { hex: '#10B981', rgb: '16,185,129' },
  silver: { hex: '#E5E7EB', rgb: '229,231,235' },
  orange: { hex: '#F59E0B', rgb: '245,158,11' },
}

export function getProjectTheme(accent) {
  return PROJECT_THEMES[accent] ?? PROJECT_THEMES.purple
}
