function solve(input) {
  let sum = 0;
  let inverseSum = 0;
  let concat = "";
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    inverseSum += 1 / input[i];
    concat += String(input[i]);
  }

  console.log(sum);
  console.log(inverseSum);
  console.log(concat);
}

solve([1, 2, 3]);
