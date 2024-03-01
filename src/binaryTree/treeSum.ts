import { Node } from "./node";

function treeSum(root: Node<number>): number {
    if (root === null) return 0;
    let sum = 0;
    const stack = [root];
    while (stack.length > 0) {
        const curr = stack.pop();
        if (curr) sum += curr.val;
        if (curr?.right) stack.push(curr.right);
        if (curr?.left) stack.push(curr.left);
    }

    return sum;
}

export function treeSumRecurse(root: Node<number> | null): number {
    if (root === null) return 0;
    return root.val + treeSumRecurse(root.right) + treeSumRecurse(root.left);
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

const res = treeSumRecurse(a); // -> 21
console.log({ res });
