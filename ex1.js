const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
});

const oldWay = str => {
  const code = (parseInt((str))+1);
  const car = String.fromCharCode(code);
  return car.toLowerCase();
};

const newWay = str => Box(str)
    .map(str => parseInt(str))
    .map(int => int + 1)
    .map(int => String.fromCharCode(int))
    .fold(car => car.toLocaleLowerCase());

console.log(newWay('   64'));