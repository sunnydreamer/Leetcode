/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

// solution1 convert to string
// Time O(N) | Space O(1)
var isPalindrome = function (x) {
  if (x < 0) return false;

  const string = x.toString();
  for (
    let left = 0, right = string.length - 1;
    left <= right;
    left++, right--
  ) {
    if (string[left] !== string[right]) {
      return false;
    }
  }

  return true;
};

// solution2 without converting to string
// Time O(N) | Space O(N)

var isPalindrome = function (x) {
  let number = x;
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return x == reverse;
};

// @lc code=end
