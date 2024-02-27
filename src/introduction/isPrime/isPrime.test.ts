import { expect, test } from "vitest";
import isPrime from "./isPrime";

test("is prime", () => {
    expect(isPrime(2)).toBe(true); // ->
    expect(isPrime(3)).toBe(true); // ->
    expect(isPrime(4)).toBe(false); // ->
    expect(isPrime(5)).toBe(true); // ->
    expect(isPrime(6)).toBe(false); // ->
    expect(isPrime(7)).toBe(true); // ->
    expect(isPrime(8)).toBe(false); // ->
    expect(isPrime(25)).toBe(false); // ->
    expect(isPrime(31)).toBe(true); // ->
    expect(isPrime(2017)).toBe(true); // ->
    expect(isPrime(2048)).toBe(false); // ->
    expect(isPrime(1)).toBe(false); // ->
    expect(isPrime(713)).toBe(false); // ->
});
