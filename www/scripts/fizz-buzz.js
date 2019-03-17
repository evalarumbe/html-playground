const fizzBuzz = [];

// buffer the result in a variable
// cons: checks all conditionals every time
// pros: readable, only calls console.log once
fizzBuzz[0] = n => {
  let result = '';
  console.log('\n\nfizzBuzz[0]');
  for (let i = 1; i <= n; i++) {
    result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }
    if (i % 5 === 0) {
      result += 'Buzz';
    }
    if (result.length === 0) {
      result += i;
    }

    console.log(result);
  }
};

// else if (rarest case first)
// pros: only calls console.log once without needing to store a buffer in memory
// conditions are checked less often

fizzBuzz[1] = n => {
  console.log('\n\nfizzBuzz[1]');
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
};

// best of both worlds
fizzBuzz[2] = n => {
  console.log('\n\nfizzBuzz[2]');
  let result = '';

  for (let i = 1; i <= n; i++) {
    result = '';
    if (i % 15 === 0) {
      result += 'FizzBuzz';
    } else if (i % 3 === 0) {
      result += 'Fizz';
    } else if (i % 5 === 0) {
      result += 'Buzz';
    } else {
      result += i;
    }
    console.log(result);
  }
}

const compareTimes = (funcs, arg) => {
  let start, duration, report;
  const durations = [];
  for (let i = 0; i < funcs.length; i++) {
    start = Date.now();
    funcs[i](arg);
    end = Date.now();
    duration = end - start;
    report += `\n\nRunning time of [${i}]: ${duration}ms`;
    durations[i] = duration;
  }
  console.log(report);
  return durations;
}

// try {
//   const comparisons = [];
//   for (let i = 0; i < 3; i++) {
//     comparisons[i] = compareTimes(fizzBuzz, 1600);
//   }
//   console.log(comparisons);
// } catch (err) {
//   console.log(err.message);
// }

export default fizzBuzz;