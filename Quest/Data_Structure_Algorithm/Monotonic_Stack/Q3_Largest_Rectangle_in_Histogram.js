/**
 *
 * Given an array of integers heights representing the
 * histogram's bar height where the width of each bar is 1,
 * return the area of the largest rectangle in the histogram.
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function (heights) {
  heights.push(-1); // allow all height to be traversed
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(h * w, maxArea);
    }
    stack.push(i);
  }
  return maxArea;
};
