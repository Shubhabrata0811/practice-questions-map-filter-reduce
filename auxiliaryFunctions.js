const getReverseStr = (str) => Array.from(str).reduce((c1, c2) => c2 + c1, "");

const range = function (firstTerm = 1, maxTerm = Infinity, commonDiff = 1) {
  const arr = [];

  for (let term = firstTerm; term <= maxTerm; term += commonDiff) {
    arr.push(term);
  }

  return arr;
};

const sum = (num1, num2) => num1 + num2;

export default {
  getReverseStr,
  range,
  sum
};