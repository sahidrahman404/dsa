export default function intersection(
    nums1: number[],
    nums2: number[],
): number[] {
    const set: Set<number> = new Set(nums1);
    const result: number[] = [];
    for (let i = 0; i <= nums2.length; i++) {
        const curr = nums2[i];
        if (set.has(curr)) {
            result.push(curr);
        }
    }
    return result;
}
