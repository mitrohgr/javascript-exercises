const removeFromArray = function(arr, ...numbers) {
  let newArr;
  for (let i = 0; i < numbers.length; i++) {
    newArr = arr.filter((num) => !numbers.includes(num));
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
