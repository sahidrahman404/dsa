import { Node } from "./linkedlist";

function longestStreak<T extends number | string>(
    head: Node<T> | null,
): number {
    let maxStreak = 0;
    let currStreak = 0;
    let prevVal: T | null = null;
    let curr: Node<T> | null = head;
    while (curr !== null) {
        if (prevVal === curr.val) {
            currStreak++;
        } else {
            currStreak = 1;
        }

        if (currStreak > maxStreak) {
            maxStreak = currStreak;
        }
        prevVal = curr.val;
        curr = curr.next;
    }

    return maxStreak;
}

function longestStreakRecurse<T>(
    head: Node<T> | null,
    prev: Node<T> | null = null,
    currStreak: number = 0,
    maxStreak: number = 0,
): number {
    if (head === null) return maxStreak;
    if (prev === null) {
        return longestStreakRecurse(head.next, head, 1, 1);
    }
    if (head.val === prev.val) {
        currStreak++;
        const max = Math.max(currStreak, maxStreak);
        return longestStreakRecurse(head.next, head, currStreak, max);
    } else {
        const max = Math.max(currStreak, maxStreak);
        return longestStreakRecurse(head.next, head, 1, max);
    }
}

export { longestStreak, longestStreakRecurse };
