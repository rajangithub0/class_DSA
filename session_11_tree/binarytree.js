var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.rightNode = null;
        this.leftNode = null;
    }
    return TreeNode;
}());
var arr = [50, 20, 10, -1, -1, 50, -1, -1, 30, 11, -1, -1, -1];
var idx = 0;
function constructBinaryTree() {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }
    //node
    var me = new TreeNode(arr[idx]);
    idx++;
    //left
    me.leftNode = constructBinaryTree();
    //right
    me.rightNode = constructBinaryTree();
    return me;
}
function displayTree(node) {
    var _a, _b;
    if (node == null)
        return;
    var s = "";
    s += node.val + ":" + ((_a = node.leftNode) === null || _a === void 0 ? void 0 : _a.val) + "," + ((_b = node.rightNode) === null || _b === void 0 ? void 0 : _b.val);
    console.log(s);
    displayTree(node.leftNode);
    displayTree(node.rightNode);
}
var root = constructBinaryTree();
displayTree(root);
