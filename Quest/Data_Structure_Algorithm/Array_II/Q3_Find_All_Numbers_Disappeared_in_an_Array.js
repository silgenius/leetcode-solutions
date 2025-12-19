/**
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear
 * in nums.
 *
 * Example 1:
 *
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 * Example 2:
 *
 * Input: nums = [1,1]
 * Output: [2]
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums = []) {
  let result = [];
  let arr = new Array(nums.length).fill(0);
  for (let num of nums) arr[num - 1]++;
  for (let i = 0; i < arr.length; i++) if (arr[i] === 0) result.push(i + 1);
  return result;
};
