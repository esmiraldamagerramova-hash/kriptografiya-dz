function atbash(text) {
    return text.replace(/[a-z]/gi, function(char) {
        let start = char <= "Z" ? 65 : 97;
        return String.fromCharCode(
            start + (25 - (char.charCodeAt(0) - start))
        );
    });
}
console.log(atbash("Aydan"));