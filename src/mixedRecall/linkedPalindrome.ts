import { Node } from "./node";

function linkedPalindrome(node: Node<number>): boolean {
    const array = createArrayFromLinkedList(node);
    return checkPalindrome(array);
}

function checkPalindrome<T>(array: T[], i: number = 0): boolean {
    if (i >= array.length) {
        return true;
    } else {
        if (array[i] === array[array.length - i - 1]) {
            return checkPalindrome(array, i + 1);
        } else {
            return false;
        }
    }
}

console.log(checkPalindrome(["a", "b", "a"]));

function createArrayFromLinkedList(head: Node<number> | null): number[] {
    if (head === null) return [];
    const next = createArrayFromLinkedList(head.next);
    return [head.val, ...next];
}
export { linkedPalindrome };
