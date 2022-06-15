function evenNumbers(array, number) {
  const arr = [];
  array.map((i) => {
    if (i % 2 === 0) {
      arr.push(i);
    }
  });
  while (arr.length > number) {
    arr.shift();
  }
  return arr;
}
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8];
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26];
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6];
