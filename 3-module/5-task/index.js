function getMinMax(str) {
    let arrayWithNum = [];
    let arrayFromStr = str.split(',').join('').split(' ');

    for (let item of arrayFromStr) {
        if (isFinite(item)) {
            arrayWithNum.push(+item);
        }
    }
    return {min: Math.min(...arrayWithNum), max: Math.max(...arrayWithNum)};
}
