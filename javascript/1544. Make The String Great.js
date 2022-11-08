// time O(N) space O(N)
var makeGood = function (s) {
  let res = [""];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] !== res[res.length - 1] &&
      s[i].toUpperCase() === res[res.length - 1].toUpperCase()
    ) {
      res.pop();
    } else {
      res.push(s[i]);
    }
  }
  return res.join("");
};
