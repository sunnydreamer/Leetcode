//Time complexity: O(n)
// Space complexity: O(n)
var sortedSquares = function (nums) {
  let l = 0,
    r = nums.length - 1,
    res = [];
  while (l <= r) {
    if (nums[l] * nums[l] > nums[r] * nums[r]) {
      res.unshift(nums[l] * nums[l]);
      l += 1;
    } else {
      res.unshift(nums[r] * nums[r]);
      r -= 1;
    }
  }
  return res;
};
