const Sum = x => ({
  x,
  concat: o =>
      Sum(x + o.x),
  inspect: () =>
      `Sum(${x})`,
});

const res = Sum(1).concat(Sum(3)).concat(Sum(2));

console.log(res);