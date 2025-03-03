import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer
({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 30;

renderer.render(scene, camera);

//create shapes
const torusGeo = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
const torusMesh = new THREE.Mesh(torusGeo, material);

scene.add(torusMesh);

const spaceTexture = new THREE.TextureLoader().load('spacePlanet.png');
scene.background = spaceTexture;

function animate()
{
  requestAnimationFrame(animate);

  //animation logic goes in here v

  torusMesh.rotation.y += 0.005;
  torusMesh.rotation.x += 0.01;

  //ends here ^

  renderer.render(scene, camera);
}

animate();