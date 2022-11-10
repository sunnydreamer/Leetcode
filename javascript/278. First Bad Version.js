// time O(LogN) space O(1)
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let l = 1,
      r = n,
      first = 0;

    while (l <= r) {
      let m = Math.floor(l + (r - l) / 2);
      if (isBadVersion(m)) {
        first = m;
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return first;
  };
};
