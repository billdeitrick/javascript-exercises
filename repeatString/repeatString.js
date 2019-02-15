const repeatString = function(text, count) {
    if (count < 0) return "ERROR";
    
    let stringArray = [];

    for(let i = 0; i < count; i++) {
        stringArray.push(text);
    }

    return stringArray.join('');
}

module.exports = repeatString
