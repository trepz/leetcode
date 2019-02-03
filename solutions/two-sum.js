/**
 * src: https://leetcode.com/problems/two-sum/
 * difficulty: easy
 *
 * Given an array of integers, return indices of the two numbers such
 * that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 52.32% faster
const twoSum_1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let v = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === v) return [i, j]
    }
  }
}

// 100% faster
const twoSum = (nums, target) => {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const f = target - nums[i]
    if (typeof map[f] !== 'undefined') return [map[f], i]
    map[nums[i]] = i
  }
}

// Cases
console.time('two-sum')
console.log(
  twoSum([2, 7, 11, 15], 9), // 0, 1
  twoSum([1, 8, 9, 10, 5], 15), // 3, 4
  twoSum([-1, -2, -3, -4, -5], -8), // 2, 4
  twoSum([-1, 100, -5, -40, 66], 61), // 2, 4
)
console.timeEnd('two-sum')
