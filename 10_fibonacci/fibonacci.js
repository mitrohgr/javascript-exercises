const fibonacci = function(num) {
  num = +num;
  
  if (num < 0) {
    return "OOPS";
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let fib;
  let prev = 0;
  let curr = 1;
  for (let i = 1; i < num; i++) {
    fib = prev + curr;
    prev = curr;
    curr = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
