import { latLonToCart } from "./latLngToCartSystem";

describe("latLngToCartSystem.js", () => {
  test("check coordinates", () => {
    const result = latLonToCart(53, 10.01534, 1000, 100);
    expect(result).toEqual([
      10.467918449077107, 79.87608648597316, 59.273712234080705,
    ]);
  });
});
