const sumAll = function(bound1, bound2) {

    if (typeof bound1 != "number" || typeof bound2 != "number") {
        return "ERROR"
    }

    min = Math.min(bound1, bound2);
    max = Math.max(bound1, bound2);

    if (min < 0) return "ERROR";

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;

}

module.exports = sumAll
