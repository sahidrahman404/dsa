import { Node } from "./node";

function middleValue(head: Node<string>): string {
    let slow: Node<string> | null = head;
    let fast: Node<string> | null = head;
    while (!(fast === null || fast.next === null || slow.next === null)) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.val;
}

export { middleValue };
