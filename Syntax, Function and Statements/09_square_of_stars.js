function solve(input) {
  let result = "";

  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      result += "* ";
    }
    result += "\n";
  }

  console.log(result.trim());
}

solve(5);
