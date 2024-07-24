const findTheOldest = function(arr) {
  const sortedArr = arr
    .sort((curr, next) => {
      let currAge;
      if (curr.yearOfDeath === undefined) {
        currAge = (new Date).getFullYear() - curr.yearOfBirth;
      } else {
        currAge = curr.yearOfDeath - curr.yearOfBirth;
      }

      let nextAge;
      if (next.yearOfDeath === undefined) {
        nextAge = (new Date).getFullYear() - next.yearOfBirth;
      } else {
        nextAge = next.yearOfDeath - next.yearOfBirth;
      }
      
      return nextAge - currAge;
    });
  return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
