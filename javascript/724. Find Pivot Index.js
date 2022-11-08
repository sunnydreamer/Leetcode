/**
 * @param {number[]} nums
 * @return {number[]}
 */

// time O(N) space O(1)
var pivotIndex = function (nums) {
  // calculate the total sum
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  // look for the leftmost pivot
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = sum - nums[i] - leftSum;
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
