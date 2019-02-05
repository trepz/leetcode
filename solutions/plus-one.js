/**
 * src: https://leetcode.com/problems/plus-one/
 * difficulty: easy
 *
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Example 2:
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 30% faster - 5% less memory
const plusOne = digits =>
  (BigInt(digits.reduce((a, c) => a + c, '')) + BigInt('1'))
    .toString()
    .split('')
    .map(Number)

// Also 30% faster
const plusOne_iter = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(0)
        i++
      }
    } else {
      digits[i]++
      return digits
    }
  }
  return digits
}

test('plus one', () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
  expect(plusOne([4, 3, 9, 9])).toEqual([4, 4, 0, 0])
  expect(plusOne([9])).toEqual([1, 0])
  expect(plusOne([0])).toEqual([1])
  expect(
    plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
  ).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])
})
