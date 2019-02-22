//gets array of all characters between two chars, inclusive
const charRange = function(x, y) {
    let rangeArray = [];

    for (let i = x.charCodeAt(0); i <= y.charCodeAt(0); i++) {
        rangeArray.push(String.fromCharCode(i));
    }

    return rangeArray;
}

//build a translation dict to easily do the translation
const getTranslationDict = function(shift) {

    let caps = charRange('A', 'Z');
    let lowers = charRange('a', 'z');

    let transDict = {};

    if (shift < 0) {
        shift = Math.abs(caps.length + (shift % caps.length));
    }

    for(i = 0; i < caps.length; i++) {
        cipherIndex = (i + shift) % caps.length;
        transDict[caps[i]] = caps[cipherIndex];
        transDict[lowers[i]] = lowers[cipherIndex];
    }

    return transDict;

}

const caesar = function(plaintext, index) {
    let translationDict = getTranslationDict(index);

    let ciphertext = [];

    for (let i = 0; i < plaintext.length; i++) {
        let plainChar = plaintext.charAt(i);

        if (plainChar.match(/[A-Za-z]/)) {
            ciphertext.push(translationDict[plainChar]);
        } else {
            ciphertext.push(plainChar);
        }
    }

    return ciphertext.join("");

}

module.exports = caesar
