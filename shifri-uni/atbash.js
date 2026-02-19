function atbash(text) {
    const normal = "abcdefghijklmnopqrstuvwxyz";
    const reversed = "zyxwvutsrqponmlkjihgfedcba";

    return [...text].map(char => {
        let lower = char.toLowerCase();
        let index = normal.indexOf(lower);

        if (index === -1) return char;

        let newChar = reversed[index];
        return char === char.toUpperCase()
            ? newChar.toUpperCase()
            : newChar;
    }).join("");
}
console.log(atbash("Esmiralda"));
