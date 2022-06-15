function narcisit(value) {
  const strValue = value.toString();
  const exponent = strValue.length;
  const arrayValue = strValue.split("");
  const powredArrayValue = arrayValue.map((item) => {
    return (item **= exponent);
  });
  const reduceArrayValue = powredArrayValue.reduce((acc, item) => {
    return acc + item;
  }, 0);
  if (reduceArrayValue === value) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

narcisit(153);
