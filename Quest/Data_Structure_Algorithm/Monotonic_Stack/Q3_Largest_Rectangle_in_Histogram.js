/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  const result = new Array(heights.length).fill(0);
  for (let i = 0; i <= heights.length; i++) {
    let n = null;
    while (
      stack.length &&
      (heights[i] < heights[stack[stack.length - 1]] ||
        heights[i] === undefined) // undefined mean the redeem what ever we have on the stack
    ) {
      const n = stack.pop();
      result[n] = heights[n] * (i - n);
    }
    stack.push(i);
  }
  return Math.max(...result);
};

console.log(largestRectangleArea([2, 1, 2]));
