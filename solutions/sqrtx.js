/**
 * src: https://leetcode.com/problems/sqrtx/
 * difficulty: easy
 *
 * Implement int sqrt(int x).
 *
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 *
 * Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
 *
 * Example 1:
 *
 * Input: 4
 * Output: 2
 * Example 2:
 *
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since
 * the decimal part is truncated, 2 is returned.
 */

/**
 * @param {number} x
 * @return {number}
 */

// 40% faster 12% less memory
const mySqrt = x => {
  if (x <= 1) return x
  let h = x,
    l = 1,
    m

  while (l + 1 < h) {
    m = Math.floor((h + l) / 2)
    if (m * m > x) {
      h = m
    } else if (m * m < x) {
      l = m
    } else {
      return m
    }
  }
  return l
}

test('sqrt x', () => {
  expect(mySqrt(4)).toBe(2)
  expect(mySqrt(8)).toBe(2)
})
