
exports.min = function min (array) {
  if (array == undefined || array === null || array.length == 0) {
    return 0;
  }
  else {
    let minResult = Math.min.apply(null, array);
    return minResult;
  }
}

exports.max = function max (array) {
  if (array == undefined || array === null || array.length == 0) {
    return 0;
  }
  else {
    let maxResult = Math.max.apply(null, array);
    return maxResult;
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array === null || array.length == 0) {
    return 0;
  }
  else {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length; 
  }
}
