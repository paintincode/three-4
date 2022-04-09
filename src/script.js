import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
/**
 * Axes Helper
 */

var dir = new THREE.Vector3(0, 1, 0);
dir.normalize();
var origin = new THREE.Vector3(0, 0, 0);
var length = 1;
var hex = 0x00ff00;

var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
scene.add(arrowHelper);
/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
mesh.scale.x = 0.5;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;

scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 850,
  height: 920,
};

/**
 * Rotation
 */
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 6;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
