function pigIt(str) {
  return str
    .split(" ")
    .map((i) => {
      const firstLetter = i.substr(0, 1);
      if (i.substring(1, str.lenght - 1) === "!") {
        return i;
      } else if (i.substring(1, str.lenght - 1) === "?") return i;
      else {
        return i.substring(1, str.length - 1).concat(firstLetter, "ay");
      }
    })
    .join(" ");
}
pigIt("Pig latin is cool");
