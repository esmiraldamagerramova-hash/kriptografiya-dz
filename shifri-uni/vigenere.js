function vigenere(text, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    key = key.toLowerCase();
    let j = 0;

    return [...text].map(char => {
        let lower = char.toLowerCase();
        let i = alphabet.indexOf(lower);

        if (i === -1) return char;

        let shift = alphabet.indexOf(key[j++ % key.length]);
        let newChar = alphabet[(i + shift) % 26];

        return char === char.toUpperCase()
            ? newChar.toUpperCase()
            : newChar;
    }).join("");
}
console.log(vigenere("Esmiralda", "key"));
