function atbash(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);

        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(122 - (code - 97));
        } else if (code >= 65 && code <= 90) {
            result += String.fromCharCode(90 - (code - 65));
        } else {
            result += text[i];
        }
    }

    return result;
}

console.log(atbash("Adelya"));
