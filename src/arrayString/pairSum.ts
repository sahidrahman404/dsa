export default function pairSum(nums: number[], target: number): number[] {
    const previous: Record<number, number> = {};
    for (const [i, num] of nums.entries()) {
        const complement = target - num;
        if (complement in previous) {
            return [previous[complement], i];
        }
        previous[num] = i;
    }
    return [];
}
