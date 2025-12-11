/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let sum = 0
    for (let num of nums) {
        if (num === 1) {
            sum += 1
            max = sum > max ? sum : max
        } else sum = 0
    }

    return max
}
