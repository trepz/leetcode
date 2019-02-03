/**
 * Given an n-ary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 *
 * For example, given a 3-ary tree:
 *
 * We should return its level order traversal:
 *
 * [
 *   [1],
 *   [3,2,4],
 *   [5,6]
 * ]
 *
 *
 * Note:
 *
 * The depth of the tree is at most 1000.
 * The total number of nodes is at most 5000.
 */

/**
 * Definition for a Node:
 */
function Node(val, children) {
  this.val = val
  this.children = children
}

/**
 * @param {Node} root
 * @return {number[][]}
 */

// Recursive (slow) faster than 6%
const levelOrder_slow = root => {
  const levels = {}
  const traverse = (node, depth) => {
    if (!node) return
    levels[depth] =
      typeof levels[depth] === 'undefined'
        ? [node.val]
        : [...levels[depth], node.val]

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i], depth + 1)
    }
  }
  traverse(root, 1)
  return Object.values(levels)
}

// Faster than 22% - still bad
const levelOrder = root => {
  if (!root) return []
  let levels = [[root]]
  let depth = 0
  while (depth > -1) {
    let nextLevel = []
    for (let i = 0; i < levels[depth].length; i++) {
      if (!levels[depth][i]) continue
      if (levels[depth][i].children.length) {
        nextLevel = [...nextLevel, ...levels[depth][i].children]
      }
    }
    if (nextLevel.length) {
      levels.push(nextLevel)
      depth++
    } else {
      depth = -1
    }
  }
  return levels.map(x => x.map(y => (y ? y.val : y)))
}

// Cases
console.log(
  levelOrder({
    $id: '1',
    children: [
      {
        $id: '2',
        children: [
          { $id: '5', children: [], val: 5 },
          { $id: '6', children: [], val: 6 },
        ],
        val: 3,
      },
      { $id: '3', children: [], val: 2 },
      { $id: '4', children: [], val: 4 },
    ],
    val: 1,
  }),
)
