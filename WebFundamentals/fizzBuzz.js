const fizzBuzz = (range) => {
  for (let i = 1; i <= range; i++) {
    // practicing switch statement (very unnecessary implementation)
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log('FizzBuzz');
        break;
      case i % 3 === 0:
        console.log('Fizz');
        break;
      case i % 5 === 0:
        console.log('Buzz');
        break;
      default:
        console.log(i);
        break;
    }
  }
};

let range = 100;
fizzBuzz(range);
