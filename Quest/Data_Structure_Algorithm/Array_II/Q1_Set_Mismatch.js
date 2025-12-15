/**
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error,
 * one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss
 * of another number.
 * 
 * You are given an integer array nums representing the data status of this set after the error.
 * 
 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let s = nums.reduce((total, num) => total + num, 0)
  let n = nums.length;

  let s2 = [... new Set(nums)].reduce((total, num) => total + num, 0)

  let dup = s - s2;
  let loss = Math.floor( n * (n + 1) / 2 ) - s2

  return [dup, loss]
};
