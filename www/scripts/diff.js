import fizzBuzz from './fizz-buzz.js';

const fifteen = fizzBuzz[2](4000);
const threeAndFive = fizzBuzz[3](4000);

console.dir(fifteen);
console.dir(threeAndFive);

const compare = (arrA, arrB) => {
  if (arrA.length !== arrB.length) {
    return `Different lengths: ${arrA.length} and ${arrB.length}`;
  } else {
    const n = arrA.length;
    for (let i = 0; i < n; i++) {
      if (arrA[i] !== arrB[i]) {
        return `Stopped at ${i}`;
      }
    }
  }
  return `Huzzah`;
}

console.dir(`\n\n${compare(fifteen, threeAndFive)}`);