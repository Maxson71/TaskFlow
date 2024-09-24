
const colorVars = [
    { color: "var(--color-yellow)", bgColor: "var(--color-yellow-bg)" },
    { color: "var(--color-light-blue)", bgColor: "var(--color-light-blue-bg)" },
    { color: "var(--color-pink)", bgColor: "var(--color-pink-bg)" },
    { color: "var(--color-purple)", bgColor: "var(--color-purple-bg)" },
    { color: "var(--color-blue)", bgColor: "var(--color-blue-bg)" },
    { color: "var(--color-green)", bgColor: "var(--color-green-bg)" }
];


export function getColorForTag(text: string) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    const { color, bgColor } = colorVars[Math.abs(hash) % colorVars.length]; // Отримуємо об'єкт кольорів

    return { color, bgColor };
}