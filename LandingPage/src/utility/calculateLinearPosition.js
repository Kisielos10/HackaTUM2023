export const calculateLinearPosition = (vec1, vec2, distance) => {
  const direction = {
    x: vec2.x - vec1.x,
    y: vec2.y - vec1.y,
    z: vec2.z - vec1.z,
  };

  const magnitude = Math.sqrt(
    direction.x ** 2 + direction.y ** 2 + direction.z ** 2
  );

  const normalizedDirection = {
    x: direction.x / magnitude,
    y: direction.y / magnitude,
    z: direction.z / magnitude,
  };

  const newVector = {
    x: vec2.x + normalizedDirection.x * distance,
    y: vec2.y + normalizedDirection.y * distance,
    z: vec2.z + normalizedDirection.z * distance,
  };
  return newVector;
};
