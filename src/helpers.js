export function farsiFont(isFarsi) {
    return { fontFamily: "Vazir", fontSize: isFarsi ? 16 : 12 };
}

export function farsiFontWithoutSize(isFarsi) {
    return { fontFamily: "Vazir" };
}
