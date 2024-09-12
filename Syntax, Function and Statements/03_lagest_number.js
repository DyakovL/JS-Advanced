function largest(input1, input2, input3) {
  var biggest = input1;

  if (biggest < input2) {
    biggest = input2;
  }

  if (biggest < input3) {
    biggest = input3;
  }

  console.log(`The largest number is ${biggest}.`);
}

largest(5, -3, 16);
largest(-3, -5, -22.5);
