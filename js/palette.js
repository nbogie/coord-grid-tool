const lightPalette = {
    background: 255,
    label: 0,
    gridLineStrong: 190,
    gridLineWeak: 190,
};
const darkPalette = {
    background: 30,
    label: 255,
    gridLineStrong: 190,
    gridLineWeak: 190,
};
let palette = lightPalette;

function toggleDarkMode() {
    //dark mode not yet implemented

    if (palette === lightPalette) {
        palette = darkPalette;
    } else {
        palette = lightPalette;
    }
}
