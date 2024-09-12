function solve(input) {
  let sum = 0;
  let sameElements = true;

  let inputStr = input.toString();
  let type = typeof inputStr;
  let currElement = inputStr[0];

  for (let i = 0; i < inputStr.length; i++) {
    let digit = Number(inputStr[i]);
    sum += digit;
    if (sameElements === true) {
      if (inputStr[i] !== currElement) {
        sameElements = false;
      }
    }
  }

  console.log(sameElements);
  console.log(sum);
}

solve(2222222);
solve(1234);
