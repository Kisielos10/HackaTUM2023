import * as THREE from "three";
import { randomInRange } from "../utility/randomInRange";

export default class Enviroment extends THREE.Group {
  constructor() {
    super();

    this.addParts();
  }

  addParts() {
    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 0.25;
    this.add(ambientLight);
  }
}
