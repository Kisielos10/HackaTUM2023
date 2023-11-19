import { setColorScale } from "./hue";

describe("hue.js", () => {
  test("check color", () => {
    const result = setColorScale(100, 0, 1000);
    expect(result).toEqual({
      isColor: true,
      r: 0.5517647058823529,
      g: 0.45176470588235296,
      b: 0.45176470588235296,
    });
  });
});
