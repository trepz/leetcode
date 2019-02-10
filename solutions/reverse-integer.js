/**
 * src: https://leetcode.com/problems/reverse-integer/
 * difficulty: easy
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 * Input: 123
 * Output: 321
 *
 * Example 2:
 * Input: -123
 * Output: -321
 *
 * Example 3:
 * Input: 120
 * Output: 21
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range:
 * [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */

// 40% faster 20% less memory
const reverse = x => {
  let rev = x
    .toString()
    .split('')
    .reverse()
  if (rev[rev.length - 1] === '-') {
    rev.pop()
    rev.unshift('-')
  }
  const res = +rev.join('')
  if (res < -(2 ** 31) || res > 2 ** 31 + 1) return 0
  return res
}

test('reverse integer', () => {
  expect(reverse(123)).toBe(321)
  expect(reverse(-123)).toBe(-321)
  expect(reverse(120)).toBe(21)
  expect(reverse(2147483647)).toBe(0)
})
