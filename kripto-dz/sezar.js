function caesar2(text, shift) {
    shift = (shift % 26 + 26) % 26;

    return text.replace(/[a-z]/gi, function(char) {
        let start = char <= "Z" ? 65 : 97;
        return String.fromCharCode(
            (char.charCodeAt(0) - start + shift) % 26 + start
        );
    });
}
console.log(caesar2("Aydan", 3));
console.log(caesar2("Dbgdq", -3));