export function farsiFontNoColor(isFarsi) {
    return { fontFamily: "Vazir", fontSize: isFarsi ? 16 : 12 };
}

export function farsiFont(isFarsi) {
    return { fontFamily: "Vazir", fontSize: isFarsi ? 16 : 12, color: "#3C4858" };
}

export function farsiFontWithoutSize(isFarsi) {
    return { fontFamily: "Vazir", color: "#3C4858" };
}
