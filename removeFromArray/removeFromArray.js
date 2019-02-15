const removeFromArray = function(inputArray) {
    
    for (let i = 1; i < arguments.length; i++) {
        let ndx = inputArray.indexOf(arguments[i]);

        if (ndx >= 0) inputArray.splice(ndx, 1);

    }

    return inputArray;

}

module.exports = removeFromArray
