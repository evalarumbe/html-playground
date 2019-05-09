const rotate = (input, shift) => {
  result = '';
  let outIndex, outChar = '';
  
  n = input.length;

  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < n; i++) {
    inIndex = alpha.indexOf(input[i]);
    
    if (inIndex + shift >= 26) {
      outIndex = (inIndex+shift)-26;
    } else {
      outIndex = inIndex+shift;
    }
    outChar = alpha[outIndex];
    result += outChar;
  }

  return result;
}

console.log(rotate('umqra', 13));
