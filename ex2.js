const Box = x =>
    ({
      map: f => Box(f(x)),
      fold: f => f(x),
      inspect: () => `Box(${x})`
    })

const moneyToFloat = str =>
    Box(str)
        .map(s => s.replace(/\$/g, ''))
        .map(r => parseFloat(r));


const percentToFloat = str =>
    Box(str.replace(/\%/g, ''))
        .map(replaced => parseFloat(replaced))
        .map(number => number * 0.01);

const applyDiscount = (price, discount) =>
    moneyToFloat(price)
        .fold(p =>
            percentToFloat(discount)
                .fold(d =>
                    p - p * d));







console.log(applyDiscount('80$', '20%'));
