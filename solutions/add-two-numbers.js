/**
 * src: https://leetcode.com/problems/add-two-numbers/
 * difficulty: medium
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val
  this.next = null
}

// Utility function to make linked lists from arrays
function make(arr) {
  let prev
  let cur
  for (let i = arr.length - 1; i >= 0; i--) {
    cur = new ListNode(arr[i])
    if (prev) cur.next = prev
    prev = cur
  }
  return cur
}

// And the reverse
function unmake(node) {
  let arr = []
  let cur = node
  while (cur.next) {
    arr.push(cur.val)
    cur = cur.next
  }
  arr.push(cur.val)
  return arr
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Using helpers version
// 22% faster 10% less memory
const addTwoNumbers = (l1, l2) => {
  let a1 = BigInt(
    unmake(l1)
      .reverse()
      .join(''),
  )
  let a2 = BigInt(
    unmake(l2)
      .reverse()
      .join(''),
  )
  let res = (a1 + a2)
    .toString()
    .split('')
    .reverse()
    .map(x => +x)
  return make(res)
}

test('add two numbers', () => {
  let result
  let expected

  result = addTwoNumbers(make([2, 4, 3]), make([5, 6, 4]))
  expected = make([7, 0, 8])
  expect(result).toEqual(expected)

  result = addTwoNumbers(
    make('1000000000000000000000000000001'.split('').map(x => +x)),
    make([5, 6, 4]),
  )
  expected = make('6640000000000000000000000000001'.split('').map(x => +x))
  expect(result).toEqual(expected)
})
