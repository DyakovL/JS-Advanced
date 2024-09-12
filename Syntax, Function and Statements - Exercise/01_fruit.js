function solve(fruit, grams, price) {
  let kg = grams / 1000;
  let moneyNeeded = price * kg;

  console.log(
    `I need $${moneyNeeded.toFixed(2)} to buy ${kg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);
