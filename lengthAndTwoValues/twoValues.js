function alternate(n, firstValue, secondValue) {
  const arr = [];
  if (n % 2 === 0) {
    while (arr.length < n) {
      arr.push(firstValue);
      arr.push(secondValue);
    }
  } else if (n % 2 === 1) {
    while (arr.length < n) {
      arr.push(firstValue);
      arr.push(secondValue);
    }
    arr.pop();
  }
  return arr;
}

alternate(5, true, false);
