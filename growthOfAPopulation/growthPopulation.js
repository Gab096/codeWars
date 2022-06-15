function nbYear(p0, percent, aug, p) {
  let hpy = p0,
    i = 0;
  while (hpy < p) {
    hpy += Math.floor(hpy * (percent / 100) + aug);
    i++;
  }
  return i;
}
nbYear(1500, 5, 100, 5000);
