const snakeCase = function(inStr) {
    //Replace all non word chars (and sequences) with a single space
    let workingStr = inStr.replace(/[\W]+/g, ' ');

    //if whitespace is present in string, assume whitespace delimited
    if (workingStr.indexOf(' ') > -1) {
        workingStr = workingStr.replace(/ /g, '_')
                        .replace(/_$/, '');
    } else {
        //if no whitespace present in string, assume capital letter delimited (camelCase)
        workingStr = workingStr.replace(/[A-Z]/g, '_$&');
    }

    return workingStr.toLowerCase();
}

module.exports = snakeCase
