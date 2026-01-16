/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  while (nums[i] && nums[i + 1]) {
    if (nums[i] + nums[i + 1] === target) return [i, i + 1];
    i++;
  }
  return [];
};
