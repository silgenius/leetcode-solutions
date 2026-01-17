/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    if (typeof map[rem] === "number") return [map[rem], i];
    map[nums[i]] = i;
  }
};
