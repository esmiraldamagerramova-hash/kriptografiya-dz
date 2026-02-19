function caesar(text, shift) {
    const a = "abcdefghijklmnopqrstuvwxyz";
    shift = (shift % 26 + 26) % 26;

    return [...text].map(char => {
        let lower = char.toLowerCase();
        let i = a.indexOf(lower);

        if (i === -1) return char;

        let newChar = a[(i + shift) % 26];
        return char === char.toUpperCase() 
            ? newChar.toUpperCase() 
            : newChar;
    }).join("");
}
console.log(caesar("Esmiralda", 3)); 
console.log(caesar("Hvpludogd", -3));  