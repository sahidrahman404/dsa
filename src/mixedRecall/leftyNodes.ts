import { Node } from "../binaryTree/node";

function leftyNodes(root: Node<string> | null, lvl: number = 0): string[] {
    if (root === null) return [];
    const left = leftyNodes(root.left, lvl + 1);
    if (left !== null) {
        return [root.val, ...left];
    }
    leftyNodes(root.right, lvl + 1);
    return [];
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

const res = leftyNodes(a); // [ 'a', 'b', 'd', 'g' ]
console.log({ res });
