function vigenere(text, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    key = key.toLowerCase();
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        let letter = text[i].toLowerCase();
        let index = alphabet.indexOf(letter);

        if (index === -1) {
            result += text[i];
        } else {
            let shift = alphabet.indexOf(key[j % key.length]);
            let newIndex = (index + shift) % 26;
            result += alphabet[newIndex];
            j++;
        }
    }

    return result;
}

console.log(vigenere("Adelya", "key"));
