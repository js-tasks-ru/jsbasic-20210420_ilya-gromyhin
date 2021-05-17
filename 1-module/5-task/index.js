function truncate(str, maxlength) {
    'user strict';
    if (str.length > maxlength) {
        return str = str.slice(0, maxlength - 1) + "…";
    }

    return str;
}
