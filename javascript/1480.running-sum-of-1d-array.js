/**
 * @param {number[]} nums
 * @return {number[]}
 */

// time O(N) space O(N)
var runningSum = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      res[i] = nums[i];
    } else {
      res[i] = res[i - 1] + nums[i];
    }
  }
  return res;
};
