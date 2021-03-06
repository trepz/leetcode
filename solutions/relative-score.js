/**
 * src: https://leetcode.com/problems/relative-ranks/
 * difficulty: easy
 *
 * Given scores of N athletes, find their relative ranks and the people with the top
 * three highest scores, who will be awarded medals:
 * "Gold Medal", "Silver Medal" and "Bronze Medal".
 *
 * Example 1:
 * Input: [5, 4, 3, 2, 1]
 * Output:
 *
 * Explanation: The first three athletes got the top three highest scores,
 * so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
 *
 * For the left two athletes, you just need to output their relative ranks
 * according to their scores.
 *
 * Note:
 * N is a positive integer and won't exceed 10,000.
 * All the scores of athletes are guaranteed to be unique.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */

// 100% faster and 100% less memory
const findRelativeRanks = nums => {
  nums
    .map((value, original_index) => ({
      value,
      original_index,
    }))
    .sort((a, b) => (a.value > b.value ? -1 : 1))
    .forEach((x, i) => {
      const rank =
        i < 3 ? ['Gold Medal', 'Silver Medal', 'Bronze Medal'][i] : i + 1
      nums[x.original_index] = rank + ''
    })
  return nums
}

test('relative score', () => {
  expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual([
    'Gold Medal',
    'Silver Medal',
    'Bronze Medal',
    '4',
    '5',
  ])
})
