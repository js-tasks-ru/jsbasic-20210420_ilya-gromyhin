function factorial(n) {
    // ваш код...
    'use strict';
    let f = n;
    while (n > 1) {
        f *= (n - 1);
        n--;
    }

    return f >= 1 ? f : (f + 1);
}
