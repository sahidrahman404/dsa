export default function maxValue(arrNum: number[]): number {
    let maxValue = -Infinity;
    for (let i = 0; i <= arrNum.length; i++) {
        if (arrNum[i] > maxValue) {
            maxValue = arrNum[i];
        }
    }

    return maxValue;
}
