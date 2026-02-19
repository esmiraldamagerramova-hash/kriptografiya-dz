function vigenere(text, key) {
    key = key.toLowerCase();
    let j = 0;

    return text.replace(/[a-z]/gi, function(char) {
        let start = char <= "Z" ? 65 : 97;
        let shift = key.charCodeAt(j++ % key.length) - 97;

        return String.fromCharCode(
            (char.charCodeAt(0) - start + shift) % 26 + start
        );
    });
}
console.log(vigenere("Aydan", "key"));