const reverseString = function(toReverse) {

    reversed = [];

    for (let i = toReverse.length; i >= 0; --i) {
        reversed.push(toReverse.charAt(i));
    }

    return reversed.join('');

}

module.exports = reverseString
