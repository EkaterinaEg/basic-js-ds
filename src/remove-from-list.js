const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(/*l, k*/) {
  throw new NotImplementedError("Not implemented");
}
// remove line with error and write your code here
//   let current = l;
//   console.log(l.length);
//   let prev = null;
//   while (current) {
//     if (current.value === k) {
//       if (prev === null) {
//         // let prev = null;
//         current = current.next;
//       } else {
//         prev = current;
//         current = current.next;
//         // prev.next = current.next;
//         // current = current.next;
//       }
//       l.length--;
//     }
//     prev = current;
//     current = current.next;
//   }
//   return l;
// }

// module.exports = {
//   removeKFromList,
// };
// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// const list = [3, 1, 2, 3, 4, 5];
// let l = convertArrayToList(list);
// console.log(l);
// console.log(removeKFromList(l, 3));
