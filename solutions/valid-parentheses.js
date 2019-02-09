/**
 * src: https://leetcode.com/problems/valid-parentheses/
 * difficulty: easy
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 * Input: "()"
 * Output: true
 *
 * Example 2:
 * Input: "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: "(]"
 * Output: false
 *
 * Example 4:
 * Input: "([)]"
 * Output: false

 * Example 5:
 * Input: "{[]}"
 * Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */

// Rushed version 40% faster 15% less memory
const isValid = s => {
  if (!s) return true
  const pmap = { ')': '(', ']': '[', '}': '{' }
  const stack = []
  try {
    s.split('').forEach(x => {
      const c = pmap[x]
      if (!c) {
        stack.push(x)
        return
      }
      if (stack[stack.length - 1] !== c) {
        throw new Error()
      }
      stack.pop()
    })
  } catch (_err) {
    return false
  }
  return stack.length === 0
}

test('valid parentheses', () => {
  expect(isValid('()')).toBe(true)
  expect(isValid('()[]{}')).toBe(true)
  expect(isValid('(]')).toBe(false)
  expect(isValid('([)]')).toBe(false)
  expect(isValid('{[]}')).toBe(true)
  expect(isValid('')).toBe(true)
  expect(isValid('{')).toBe(false)
})
