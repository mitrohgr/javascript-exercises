const getTheTitles = function(array) {
  return array
    .reduce((acc, curr) => {
      acc.push(curr.title);
      return acc;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
