/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list = new ListNode();
  let head = list;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      head.next = list2;
      list2 = list2.next;
    } else {
      head.next = list1;
      list1 = list1.next;
    }
    head = head.next;
  }

  if (list1 !== null) {
    head.next = list1;
  }

  if (list2 != null) {
    head.next = list2;
  }

  return list.next;
};

// @lc code=end
