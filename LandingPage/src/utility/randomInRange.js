export const randomInRange = (
  min,
  max,
  excludeRangeMin = undefined,
  excludeRangeMax = undefined
) => {
  const num = Math.random() * (max - min + 1) + min;
  return num > excludeRangeMin && num < excludeRangeMax
    ? randomInRange(min, max, excludeRangeMin, excludeRangeMax)
    : num;
};
