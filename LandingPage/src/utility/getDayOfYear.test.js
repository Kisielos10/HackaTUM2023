import { getDayOfYear } from "./getDayOfYear";

describe("getDayOfYear.js", () => {
  test("check color", () => {
    const result = getDayOfYear(new Date("December 17, 1995 03:24:00"));
    expect(result).toBe(351);
  });
});
