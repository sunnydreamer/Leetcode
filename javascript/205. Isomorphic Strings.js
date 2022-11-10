// time O(N) space O(N)
var isIsomorphic = function (s, t) {
  const hash = {};
  const hashReverse = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = t[i];
    } else {
      if (hash[s[i]] !== t[i]) {
        return false;
      }
    }

    if (hashReverse[t[i]] === undefined) {
      hashReverse[t[i]] = s[i];
    } else {
      if (hashReverse[t[i]] !== s[i]) {
        return false;
      }
    }
  }
  return true;
};
