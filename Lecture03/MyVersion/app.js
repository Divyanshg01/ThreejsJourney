import * as THREE from "three";
const canvas = document.querySelector("canvas");
const scene = new THREE.Scene();

const boxGeo = new THREE.BoxGeometry(1, 1, 1);

const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(boxGeo, boxMaterial);

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
