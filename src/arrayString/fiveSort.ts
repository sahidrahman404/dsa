export default function fiveSort(nums: number[]): number[] {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[j] === 5) {
            j--;
        } else if (nums[i] === 5) {
            const tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
            i++;
        } else {
            i++;
        }
    }
    return nums;
}

fiveSort([12, 5, 1, 5, 12, 7]);
