// [3, 2, 5, 4, 1] , 8
//  2, 4, 1, 2, 8
export default function pairProduct(nums: number[], target: number): number[] {
    const previous: Record<number, number> = {};
    for (let i = 0; i <= nums.length; i++) {
        const num = nums[i];
        const complement = Math.floor(target / num);
        if (complement in previous) {
            return [previous[complement], i];
        }
        previous[num] = i;
    }
    return [];
}
