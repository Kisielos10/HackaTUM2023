import * as THREE from "three";
import { randomInRange } from "../utility/randomInRange";

export default class Stars extends THREE.Group {
  constructor() {
    super();

    this.addParts();
  }

  addParts() {
    const particlesCount = 400;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPosition = new Float32Array(particlesCount * 3);

    //stars generation
    const radius = 150;
    const rangeStart = -300;
    const rangeEnd = 300;
    for (
      let x = 0, y = 1, z = 2;
      x < particlesCount * 3;
      x += 3, y += 3, z += 3
    ) {
      let [x1, y1, z1] = Array(3)
        .fill()
        .map(() => randomInRange(rangeStart, rangeEnd));
      while (Math.sqrt(x1 ** 2 + y1 ** 2 + z1 ** 2) < radius) {
        [x1, y1, z1] = Array(3)
          .fill()
          .map(() => randomInRange(rangeStart, rangeEnd));
      }

      particlesPosition[x] = x1;
      particlesPosition[y] = y1;
      particlesPosition[z] = z1;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(particlesPosition), 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.add(particles);
  }
}
