/**
 * @param {number} num
 * @return {number}
 */
// Time O(N) | Space O(1)
var maximum69Number = function (num) {
  let arr = num.toString().split("");

  for (let i in string) {
    if (arr[i] === "6") {
      arr[i] = "9";
      return arr.join("");
    }
  }

  return num;
};
