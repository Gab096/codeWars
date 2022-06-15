function minUmbrellas(weather) {
  let uhome = 0;
  let uwork = 0;

  for (let i = 0; i < weather.length; i++) {
    if (weather[i] === "rainy" || weather[i] === "thunderstorms") {
      if (i % 2 === 0) {
        if (!uhome) {
          uwork++;
        } else {
          uhome--;
          uwork++;
        }
      }
      if (i % 2 === 1) {
        if (!uwork) {
          uhome++;
        } else {
          uwork--;
          uhome++;
        }
      }
    }
  }
  return uhome + uwork;
}
minUmbrellas(["sunny", "windy", "sunny", "clear"]);
minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]);
