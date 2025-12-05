/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let idx = 0;
    let ans = nums.reduce((acc, curr) => {
        if (curr === 1) acc[idx] = acc[idx] ? acc[idx] + curr : 1;
        else idx = acc[idx] ? idx + 1 : idx;
        return acc
    }, [])
    return (ans.length >= 1 ? Math.max(...ans) : 0)
};