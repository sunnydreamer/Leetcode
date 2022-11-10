// time O(N) space O(N)

var removeDuplicates = function (s) {
  let res = [];
  for (const c of s) {
    if (c === res[res.length - 1]) {
      res.pop();
    } else {
      res.push(c);
    }
  }
  return res.join("");
};
