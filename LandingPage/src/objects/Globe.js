import * as THREE from "three";

import AtmosphereVertexShader from "../shaders/AtmosphereVertexShader.glsl";
import AtmosphereFragmentShader from "../shaders/AtmosphereFragmentShader.glsl";

export default class Globe extends THREE.Group {
  constructor() {
    super();
    this.name = "globe";
    this.addParts();
  }

  addParts() {
    const globeRadius = 100;
    const globeGeometry = new THREE.SphereGeometry(globeRadius);
    const globeMaterial = new THREE.MeshLambertMaterial({
      color: 0xbbbbbb,
      emissive: 0xffffff,
      emissiveIntensity: 0,
      toneMapped: false,
      map: new THREE.TextureLoader().load(
        "./src/images/8081_earthmap10k.jpg",
        (texture) => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.x = 1.5708 / (2 * Math.PI);
        }
      ),
      bumpMap: new THREE.TextureLoader().load(
        "./src/images/8081_earthbump10k.jpg",
        (texture) => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.x = 1.5708 / (2 * Math.PI);
        }
      ),
      bumpScale: 0.005,
      /* specularMap: new THREE.TextureLoader().load(
        "./src/images/Water_SpecularMap_Earth.png"
      ),
      specular: new THREE.Color("grey"), */
    });
    const earth = new THREE.Mesh(globeGeometry, globeMaterial);
    this.add(earth);

    /* const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius + 0.01),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(
          "./src/images/Clouds_Map_Earth.png",
          (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.x = 1.5708 / (2 * Math.PI);
          }
        ),

        transparent: true,
      })
    );
    this.add(clouds); */

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: AtmosphereVertexShader,
        fragmentShader: AtmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    atmosphere.scale.set(1.05, 1.05, 1.05);
    this.add(atmosphere);
  }
}
