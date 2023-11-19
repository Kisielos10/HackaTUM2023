// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = "ADD TOKEN HERE";
const map = new mapboxgl.Map({
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/light-v11",
  center: [11.576006, 48.137079],
  zoom: 15.5,
  pitch: 45,
  bearing: -17.6,
  container: "map",
  antialias: true,
});

map.on("style.load", () => {
  // Insert the layer beneath any symbol layer.
  const layers = map.getStyle().layers;
  const labelLayerId = layers.find(
    (layer) => layer.type === "symbol" && layer.layout["text-field"]
  ).id;

  // The 'building' layer in the Mapbox Streets
  // vector tileset contains building height data
  // from OpenStreetMap.
  map.addLayer(
    {
      id: "add-3d-buildings",
      source: "composite",
      "source-layer": "building",
      filter: ["==", "extrude", "true"],
      type: "fill-extrusion",
      minzoom: 15,
      paint: {
        "fill-extrusion-color": "#aaa",

        // Use an 'interpolate' expression to
        // add a smooth transition effect to
        // the buildings as the user zooms in.
        "fill-extrusion-height": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "height"],
        ],
        "fill-extrusion-base": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "min_height"],
        ],
        "fill-extrusion-opacity": 0.6,
      },
    },
    labelLayerId
  );
});

// parameters to ensure the model is georeferenced correctly on the map
const modelOrigin = [11.576006, 48.137079];
const modelAltitude = 0;
const modelRotate = [Math.PI / 2, 0, 0];

const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
  modelOrigin,
  modelAltitude
);

// transformation parameters to position, rotate and scale the 3D model onto the map
const modelTransform = {
  translateX: modelAsMercatorCoordinate.x,
  translateY: modelAsMercatorCoordinate.y,
  translateZ: modelAsMercatorCoordinate.z,
  rotateX: modelRotate[0],
  rotateY: modelRotate[1],
  rotateZ: modelRotate[2],
  /* Since the 3D model is in real world meters, a scale transform needs to be
   * applied since the CustomLayerInterface expects units in MercatorCoordinates.
   */
  scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
};

const THREE = window.THREE;

// configuration of the custom layer for a 3D model per the CustomLayerInterface
const customLayer = {
  id: "3d-model",
  type: "custom",
  renderingMode: "3d",
  onAdd: function (map, gl) {
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // create two three.js lights to illuminate the model
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.scene.add(directionalLight2);

    // use the three.js GLTF loader to add the 3D model to the three.js scene
    /* const loader = new THREE.GLTFLoader();
    loader.load(
      "https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf",
      (gltf) => {
        this.scene.add(gltf.scene);
      }
    ); */
    const geometry = new THREE.ConeGeometry(5, 50, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cone = new THREE.Mesh(geometry, material);
    cone.position;
    cone.rotation.x = Math.PI;
    this.scene.add(cone);

    this.map = map;

    // use the Mapbox GL JS map canvas for three.js
    this.renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true,
    });

    this.renderer.autoClear = false;
  },
  render: function (gl, matrix) {
    const rotationX = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(1, 0, 0),
      modelTransform.rotateX
    );
    const rotationY = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 1, 0),
      modelTransform.rotateY
    );
    const rotationZ = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 0, 1),
      modelTransform.rotateZ
    );

    const m = new THREE.Matrix4().fromArray(matrix);
    const l = new THREE.Matrix4()
      .makeTranslation(
        modelTransform.translateX,
        modelTransform.translateY,
        modelTransform.translateZ
      )
      .scale(
        new THREE.Vector3(
          modelTransform.scale,
          -modelTransform.scale,
          modelTransform.scale
        )
      )
      .multiply(rotationX)
      .multiply(rotationY)
      .multiply(rotationZ);

    this.camera.projectionMatrix = m.multiply(l);
    this.renderer.resetState();
    this.renderer.render(this.scene, this.camera);
    this.map.triggerRepaint();
  },
};

map.on("style.load", () => {
  map.addLayer(customLayer, "waterway-label");
});
