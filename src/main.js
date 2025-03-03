import './style.css'

import * as THREE from 'three';//try this

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
const material = new THREE.MeshBasicMaterial({color: 0x333333, wireframe: true});
const torusMesh = new THREE.Mesh(torusGeo, material);

scene.add(torusMesh);

// const spaceTexture = new THREE.TextureLoader().load('spacePlanet.png');
// scene.background = spaceTexture;

let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (event) => {
  // Get the current mouse position
  const currentX = event.clientX;
  const currentY = event.clientY;

  // Calculate the delta (difference) from the last position
  const deltaX = currentX - lastX;
  const deltaY = currentY - lastY;

  // Update the last mouse position
  lastX = currentX;
  lastY = currentY;

  // Log the delta values
  console.log(`Delta X: ${deltaX}, Delta Y: ${deltaY}`);
});

function animate()
{
  requestAnimationFrame(animate);

  //animation logic goes in here v

  torusMesh.rotation.y -= 0.006;
  torusMesh.rotation.x += 0.005;

  //ends here ^

  renderer.render(scene, camera);
}

//TODO: uncomment when you want to do threejs stuff
animate();