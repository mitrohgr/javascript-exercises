const palindromes = function (string) {
  const punctuation = "`~!@#$%^&*()-_=+\|]}[{':;/?.>,<";
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (!punctuation.includes(string[i]))
    newString += string[i];
  }
  newString = newString.toLowerCase().replaceAll(" ", "");
  for (let i = 0; i < Math.floor(newString.length / 2); i++) {
    if (newString[i] !== newString[newString.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
