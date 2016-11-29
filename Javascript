function smallestNumber(arr) {
  return arr.sort(function(a,b) {
    return a - b;
  })[0];
}

smallestNumber([1, 42, 69); // output is 1
