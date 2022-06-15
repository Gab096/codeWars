function smaller(nums) {
  return nums.map((n, i) => {
    return nums.slice(i).filter((v) => v < n).length;
  });
}
console.log(smaller([5, 4, 3, 2, 1]));

/* const arr = [];
nums.map((item, index, array) => {
  array.map((i) => {
    if (i  item) {
      arr.push(item);
    }
  });
});
return console.log(arr); */
