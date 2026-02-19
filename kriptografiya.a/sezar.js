function caesarCipher(text, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    shift = shift % 26;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let lowerChar = char.toLowerCase();
        let index = alphabet.indexOf(lowerChar);

        if (index === -1) {
            result += char;
        } else {
            let newIndex = (index + shift + 26) % 26;
            let newChar = alphabet[newIndex];

            if (char === char.toUpperCase()) {
                result += newChar.toUpperCase();
            } else {
                result += newChar;
            }
        }
    }

    return result;
}

console.log(caesarCipher("Adelya", 3));
console.log(caesarCipher("Dhobd", -3));
