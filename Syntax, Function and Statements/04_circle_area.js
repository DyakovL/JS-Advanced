function solve(input) {
  let typeOfInput = typeof input;

  if (typeOfInput === "number") {
    let result = Math.PI * Math.pow(input, 2);

    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeOfInput}.`
    );
  }
}

solve(5);
solve("name");
