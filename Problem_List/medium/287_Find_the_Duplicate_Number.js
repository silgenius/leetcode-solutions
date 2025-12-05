/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * 
 * There is only one repeated number in nums, return this repeated number.
 * 
 * You must solve the problem without modifying the array nums and using only constant extra space.
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
    let slow = nums[0]
    let fast = nums[nums[0]]

    // Phase One: Find the point of intersection
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    // Phase Two: Find the entrance point
    slow = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};
