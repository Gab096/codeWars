function anagrams(word, words) {
  const isAnagram = (w, ws) => {
    const wSorted = w.split("").sort().join("");
    const wsSorted = ws.split("").sort().join("");
    return wSorted === wsSorted;
  };
  const wordsFilter = words.filter((i) => isAnagram(word, i));
  return console.log(wordsFilter);
}
anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
