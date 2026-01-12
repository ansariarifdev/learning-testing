import { describe, expect, it, test } from "@jest/globals";
import { add, multiply } from ".";

describe("sum module", () => {
    it("adds 2 to 3 equals to 5", () => {
        const answer = add(2, 3);
        expect(answer).toBe(5);
    })

    it("should add two zeros", () => {
        const answer = add(0, 0);
        expect(answer).toBe(0);
    })

    it("should add two negative numbers", () => {
        const answer = add(-2, -3);
      expect(answer).toBe(-5);
    });
})

describe("multiply", () => {
    it("should multiply two positive numbers", () => {
        const answer = multiply(2, 3);
        expect(answer).toBe(6);
    })

    it("should multiply two negative numbers", () => {
        const answer = multiply(-2, -4);
        expect(answer).toBe(8);
    })

    it("should multiply one positive and one negative number", () => {
        const answer = multiply(2, -4);
        expect(answer).toBe(-8);
    })

    it("should multiply zero and a number", () => {
        const answer = multiply(0, 4);
        expect(answer).toBe(0);
    })
})