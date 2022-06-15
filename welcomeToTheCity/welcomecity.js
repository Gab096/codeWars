function sayHello(name, city, state) {
  const names = name.join(" ");
  return `Hello, ${names}! Welcome to ${city}, ${state}!`;
}
sayHello(["John", "Smith"], "Phoenix", "Arizona");
