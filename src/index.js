module.exports = function towelSort(matrix) {

  let result = matrix;
  if (result === undefined) {
    return [];
  } else {
    for (i = 0; i < result.length; i++) {
      if ((i !== 0) && (i % 2 !== 0)) {
        result[i] = result[i].reverse();
      }
    }
    return result.flat();
  }
}