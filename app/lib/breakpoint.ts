export function checkIsMobile(): boolean {
    const md = getComputedStyle(document.documentElement)
        .getPropertyValue("--breakpoint-md")
        .trim();
    return window.matchMedia(`(width < ${md})`).matches;
}