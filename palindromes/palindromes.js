const palindromes = function(checkStr) {
    checkStr = checkStr.toLowerCase();
    checkStr = Array.from(checkStr.match(/[a-z0-9]/g))

    for(let i = 0; i < checkStr.length / 2; i++) {
        if (checkStr[i] != checkStr[checkStr.length - 1 - i]) return false;
    }

    return true;
}

module.exports = palindromes
