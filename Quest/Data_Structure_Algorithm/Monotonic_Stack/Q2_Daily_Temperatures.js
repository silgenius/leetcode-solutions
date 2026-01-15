/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const res = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevDay = stack.pop();
      res[prevDay] = i - prevDay;
    }
    stack.push(i);
  }

  return res;
};
console.log(dailyTemperatures([90, 73, 74, 69, 60, 50]));
