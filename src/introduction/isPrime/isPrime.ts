export default function isPrime(num: number): boolean {
    if (num === 1) {
        return false;
    }
    const hi = Math.sqrt(num);
    for (let i = 2; i <= hi; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
