const fibonacci = function(i) {
    i = parseInt(i);

    if (i < 0) return "OOPS";

    if (i == 0) return 0;
    if (i == 1) return 1;

    return fibonacci(i - 1) + fibonacci(i - 2);
}

module.exports = fibonacci
