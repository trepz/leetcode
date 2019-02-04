/**
 * src: https://leetcode.com/problems/jewels-and-stones/
 * difficulty: easy
 *
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
 * Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 *
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive,
 * so "a" is considered a different type of stone from "A".
 *
 * Example 1:
 *
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 * Example 2:
 *
 * Input: J = "z", S = "ZZ"
 * Output: 0
 * Note:
 *
 * 1.) S and J will consist of letters and have length at most 50.
 * 2.) The characters in J are distinct.
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// Map version 50% faster, 16% memory
const numJewelsInStones_map = (J = '', S = '') => {
  const map = {}
  let count = 0

  if (!S.length || !J.length) return count
  const sr = S.split('')
  const jr = J.split('')

  for (let i = 0; i < sr.length; i++) {
    map[sr[i]] = typeof map[sr[i]] === 'undefined' ? 1 : +map[sr[i]] + 1
  }
  for (let j = 0; j < jr.length; j++) {
    if (typeof map[jr[j]] !== 'undefined') count += map[jr[j]]
  }

  return count
}

// Split version 100% faster, 50% memory
const numJewelsInStones = (J = '', S = '') => {
  return J.split('').reduce((a, c) => a + (S.split(c).length - 1), 0)
}

// Cases
test('jewels and stones', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3)
  expect(numJewelsInStones('z', 'ZZ')).toBe(0)
  expect(numJewelsInStones('', '')).toBe(0)
})
