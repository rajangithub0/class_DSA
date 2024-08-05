class TreeNode {
    val: number;
    rightNode: TreeNode | null;
    leftNode: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.rightNode = null;
        this.leftNode = null;
    }
}
let arr = [50, 20, 10, -1, -1, 50, -1, -1, 30, 11, -1, -1, -1]
let idx = 0;

function constructBinaryTree(): TreeNode | null {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }
    //node
    let me = new TreeNode(arr[idx])
    idx++;
    //left
    me.leftNode = constructBinaryTree();
    //right
    me.rightNode = constructBinaryTree();
    return me;
}
function displayTree(node: TreeNode | null) {
    if (node == null) return;
    let s = "";
    s += node.val + ":" + node.leftNode?.val + "," + node.rightNode?.val
    console.log(s);
    displayTree(node.leftNode)
    displayTree(node.rightNode)
}

let root = constructBinaryTree();
displayTree(root);