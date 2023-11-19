import { calculateLinearPosition } from "./calculateLinearPosition";

describe("calculateLinearPosition.js", () => {
  test("check position", () => {
    const vec1 = { x: 324, y: 23, z: -400 };
    const vec2 = { x: -324, y: 987, z: 234 };
    const result = calculateLinearPosition(vec1, vec2, 100);
    expect(result).toEqual({
      x: -372.96802493294985,
      y: 1059.847493881734,
      z: 281.91007377699106,
    });
  });
});
