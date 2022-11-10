var rotate = function (nums, k) {
  //solution1
  // time O(N) space O(1)
  k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k, nums.length));
  return nums;
};
