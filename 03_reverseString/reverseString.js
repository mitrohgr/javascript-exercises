const reverseString = function(string) {
  const arr = string.split("");
  let reversed = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed += arr[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
