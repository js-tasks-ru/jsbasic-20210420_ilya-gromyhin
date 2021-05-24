function getMinMax(str) {
    let arrayWithNum = [];
    let arrayFromStr = str.split(',').join('').split(' ');
    
    arrayFromStr.filter(item => isFinite(item)).map(item => arrayWithNum.push(+item));
  
    return {min: Math.min(...arrayWithNum), max: Math.max(...arrayWithNum)};
}