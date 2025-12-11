/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * 
 * Return the answer in an array
 * 
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
    let count = [];
    let result = [];

    for (let num of nums) {
        count[num] = count[num] ? count[num] + 1 : 1 
    }

    for (let i = 1; i < 101; i++) {
        count[i] = count[i] || 0;
        count[i - 1] = count[i -1] || 0
        count[i] += count[i -1]
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) result[i] = 0
        else result[i] = count[nums[i] -1]
    }

    return result
}

console.log(smallerNumbersThanCurrent([5,0,10,0,10,6]))