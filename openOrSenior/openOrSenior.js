function openOrSenior(data) {
  const eachPerson = data.map((i) => {
    if (i[0] >= 55 && i[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
  return console.log(eachPerson);
}

openOrSenior([
  [45, 12], //open
  [55, 21], //senior
  [19, -2], //open
  [104, 20], //senior
]);
for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
Test case saying the result is supposed to return 4 years is, in fact, 3 years. The input is (1000, 2, 50, 1214). If you do the math "by hand", in the third year you would have 1214,222 people. Even if you round down to 1214, 1214 is still equal to 1214. So, there's a problem with the kata's writing. It should say that the expected years is greater than 1214(p) instead of greater OR equal to... That or the expected result for this test should be 3 instead of 4.
