function checkSpam(str) {
    'use strict';

    str = str.toLowerCase();

    if (str.indexOf('1xbet') >= 0 || str.indexOf('xxx') >= 0) {
        return true;
    }

    return false;
}
