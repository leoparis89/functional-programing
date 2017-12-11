const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
});

const oldWay = (str) => {
  const code = (parseInt((str))+1);
  const car = String.fromCharCode(code);
  return car.toLowerCase();
};

console.log(oldWay('   64'));