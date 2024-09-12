function solve(num1, num2) {
  let gcd = 0;

  let smaller = 0;
  if (num1 < num2) {
    smaller = num1;
  } else {
    smaller = num2;
  }

  for (let i = 0; i <= smaller; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }

  console.log(gcd);
}

solve(15, 5);
solve(2154, 458);
