export interface Theme {
  name: string;
  className: string;
  fg: string;
  accent: string;
}

export const themes: Theme[] = [
  { name: "matrix", className: "theme-matrix", fg: "#00ff66", accent: "#00cc55" },
  { name: "amber", className: "theme-amber", fg: "#ffb000", accent: "#ff8c00" },
  { name: "white", className: "theme-white", fg: "#ffffff", accent: "#cccccc" },
  { name: "blue", className: "theme-blue", fg: "#58a6ff", accent: "#79c0ff" },
  { name: "green", className: "theme-green", fg: "#00cc55", accent: "#00aa44" },
];

export const themeNames = themes.map((t) => t.name);

export function applyTheme(name: string) {
  const theme = themes.find((t) => t.name === name);
  if (!theme) return false;

  document.documentElement.classList.remove(
    ...themes.map((t) => t.className),
  );
  if (theme.className !== "theme-matrix") {
    document.documentElement.classList.add(theme.className);
  }
  return true;
}
