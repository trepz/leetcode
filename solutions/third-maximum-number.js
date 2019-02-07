/**
 * src: https://leetcode.com/problems/third-maximum-number/
 * difficulty: easy
 *
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
 *
 * Example 1:
 * Input: [3, 2, 1]
 *
 * Output: 1
 *
 * Explanation: The third maximum is 1.
 * Example 2:
 * Input: [1, 2]
 *
 * Output: 2
 *
 * Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 * Example 3:
 * Input: [2, 2, 3, 1]
 *
 * Output: 1
 *
 * Explanation: Note that the third maximum here means the third maximum distinct number.
 * Both numbers with value 2 are both considered as second maximum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 62% faster 50% less memory
const thirdMax = nums => {
  const big = []
  for (let i = 0; i < nums.length; i++) {
    if (big.length < 3 && big.indexOf(nums[i]) === -1) {
      big.push(nums[i])
      continue
    }
    const min = Math.min(...big)
    if (nums[i] > min && big.indexOf(nums[i]) === -1) {
      big[big.indexOf(min)] = nums[i]
    }
  }
  return big.length >= 3 ? Math.min(...big) : Math.max(...big)
}

test('third maximum number', () => {
  expect(thirdMax([3, 2, 1])).toBe(1)
  expect(thirdMax([1, 2])).toBe(2)
  expect(thirdMax([0])).toBe(0)
  expect(thirdMax([2, 2, 3, 1])).toBe(1)
  expect(thirdMax([7, 7, 7, 7, 7, 7, 7])).toBe(7)
  expect(thirdMax([-1, -3, -1])).toBe(-1)
})
