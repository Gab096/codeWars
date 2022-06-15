function isValidWalk(walk) {
  const location = walk.reduce(
    (acc, direction) => {
      switch (direction.toLowerCase()) {
        case "w":
          return { ...acc, x: acc.x - 1 };
        case "e":
          return { ...acc, x: acc.x + 1 };
        case "n":
          return { ...acc, y: acc.y + 1 };
        case "s":
          return { ...acc, y: acc.y - 1 };
        default:
          return acc;
      }
    },
    { x: 0, y: 0 }
  );
  if (walk.length === 10 && location.x === 0 && location.y === 0) {
    return true;
  }
  {
    return false;
  }
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

function anagrams(word, words) {
  const ordenatedWord = word.split("").map((i) => i);
  const wordsArray = words.map((i) => i.split("").map((i) => i));
  const response = wordsArray.filter((item) => {
    return item.filter((it) => {
      return console.log(it);
    });
  });
}
anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
