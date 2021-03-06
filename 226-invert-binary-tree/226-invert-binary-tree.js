/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    /*  
    Edge cases: 
    - no root, return null
    - the only node is the root, return root (!root.left, !root.right)
    
    For every node that we are at, we want to swap current.left with current.right (v/v)
    
    Breadth-first traversal
    
    const queue = [root]
    
    while (queue.length) {
        const current = queue.shift();
        
        const temp = current.left;
        current.left = current.right;
        current.right = temp;
        
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    
    return root;
    
    
    Prediction:
        Time: O(n)
        Space: O(n)
    */
    if (!root) return null;
    
    const stack = [root]
    
    while (stack.length) {
        const current = stack.pop();
        
        [current.left, current.right] = [current.right, current.left]
        // const temp = current.left;
        // current.left = current.right;
        // current.right = temp;
        
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
    
    return root;
};