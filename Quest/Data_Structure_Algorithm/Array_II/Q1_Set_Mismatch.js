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
  let loss;
  let rep;
  let numCount = {}
  for (let num of nums) {
    numCount[num] = numCount[num] ? numCount[num] + 1 : 1;
    rep = (!rep && numCount[num] >= 2) ? num: rep
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!numCount[i]) {
        loss = i;
        break;
    }
  }
  return [rep, loss]
};