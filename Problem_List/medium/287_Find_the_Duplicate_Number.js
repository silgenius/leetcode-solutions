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
    let numCount = {}
    let rep;
    for (let num of nums) {
        numCount[num] = numCount[num] ? numCount[num] + 1 : 1;
        if (numCount[num] >= 2) {
            rep = num;
            break;
        }
    }
    return rep;
};