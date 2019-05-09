const fizzBuzz = [];

// buffer the result in a variable
// cons: checks all conditionals every time
// pros: readable, only calls console.log once
fizzBuzz[0] = n => {
  const lines = [];
  let line = '';

  console.log('\n\nfizzBuzz[0]');
  
  for (let i = 1; i <= n; i++) {
    line = '';

    if (i % 3 === 0) {
      line += 'Fizz';
    }
    if (i % 5 === 0) {
      line += 'Buzz';
    }
    if (line.length === 0) {
      line += i;
    }

    console.log(line);
    lines[i-1] = line;
  }
  return lines;
};

// else if (rarest case first)
// console only
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
  const lines = [];
  let line = '';
  
  console.log('\n\nfizzBuzz[2]');

  for (let i = 1; i <= n; i++) {
    line = '';
    if (i % 15 === 0) {
      line += 'FizzBuzz';
    } else if (i % 3 === 0) {
      line += 'Fizz';
    } else if (i % 5 === 0) {
      line += 'Buzz';
    } else {
      line += i;
    }
    console.log(line);
    lines[i-1] = line;
  }
  return lines;
}

// best of both separate worlds
fizzBuzz[3] = n => {
  const lines = [];
  let line = '';
  
  console.log('\n\nfizzBuzz[3]');

  for (let i = 1; i <= n; i++) {
    line = '';
    if (i % 3 === 0 && i % 5 === 0) {
      line += 'FizzBuzz';
    } else if (i % 3 === 0) {
      line += 'Fizz';
    } else if (i % 5 === 0) {
      line += 'Buzz';
    } else {
      line += i;
    }
    console.log(line);
    lines[i-1] = line;
  }
  return lines;
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