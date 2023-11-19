import * as THREE from "three";

export function hueForDensity(density) {
  // 0 <= density <= 1
  const scaler = 2;
  return (105 - 105 * density * scaler) / 360;
}

export function hueForSpeed(speed) {
  // 0 <= speed <= 1400
  const scaler = 4;
  return (360 - speed * scaler) / 360;
}

export function setHSV(mesh, hue, saturation = 1, value = 1) {
  // Ensure hue is within [0, 1]
  hue = hue % 1;
  if (hue < 0) {
    hue += 1;
  }

  // Ensure saturation and value are within [0, 1]
  saturation = Math.max(0, Math.min(1, saturation));
  value = Math.max(0, Math.min(1, value));

  // Convert HSV to RGB
  let rgb = new THREE.Color().setHSL(hue, saturation, value);

  // Update the material color of the mesh
  mesh.material.color = rgb;
}

// Create a color scale function
export function setColorScale(velocity, minVelocity, maxVelocity) {
  const minColor = new THREE.Color(0x808080);
  const maxColor = new THREE.Color(0xff0000); // Red color
  // Map the velocity to a range between 0 and 1
  const t = (velocity - minVelocity) / (maxVelocity - minVelocity);
  // Interpolate between the minColor and maxColor based on the velocity
  return minColor.clone().lerp(maxColor, t);
}
