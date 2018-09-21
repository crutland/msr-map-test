const themeKey = "THEME_TYPE";

export function getSavedTheme() {
    const result = localStorage.getItem(themeKey);
    if (result == null) return 'light';
    return result;
}

export function saveTheme(theme) {
    localStorage.setItem(themeKey, theme);
    console.log(`stored theme as ${theme}`);
}