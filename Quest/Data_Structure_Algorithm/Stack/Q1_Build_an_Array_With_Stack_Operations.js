/**
 * Builds a target array using stack operations ("Push" and "Pop")
 * while reading integers sequentially from a stream [1, n].
 *
 * The function simulates pushing numbers from the stream onto a stack.
 * If the pushed number is not needed to match the target array,
 * it is immediately popped. Once the stack matches the target array
 * (from bottom to top), the process stops.
 *
 * @param {number[]} target - The desired final stack configuration.
 * @param {number} n - The upper bound of the integer stream [1, n].
 * @returns {string[]} An array of operations ("Push" and "Pop")
 * needed to build the target array.
 *
 * @example
 * // target = [1,3], n = 3
 * // Output: ["Push", "Push", "Pop", "Push"]
 */

var buildArray = function (target, n) {
  const stream = new Array(n).fill(0);
  const result = [];
  for (let i = 0; i < stream.length; i++) stream[target[i] - 1]++;
  for (let i = 0; i < target[target.length - 1]; i++) {
    if (stream[i]) result.push("Push");
    else result.push("Push", "Pop");
  }
  return result;
};
