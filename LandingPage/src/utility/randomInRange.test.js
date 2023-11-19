import { randomInRange } from "./randomInRange";

describe("randomInRange.js", () => {
  test("check if in range", () => {
    const result = randomInRange(1, 100);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(101);
  });

  test("check if in range and excluded", () => {
    const result = randomInRange(1, 5);
    expect(result).toBeLessThanOrEqual(6);
  });
});
