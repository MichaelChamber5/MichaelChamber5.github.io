import { color, rotate } from 'three/tsl';
import './style.css'

import * as THREE from 'three';//try this
import { Color } from 'three/webgpu';

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
// const torusGeo = new THREE.IcosahedronGeometry(10, 2);
// const material = new THREE.MeshBasicMaterial({color: 0x333333, wireframe: true});
// const torusMesh = new THREE.Mesh(torusGeo, material);

//scene.add(torusMesh);

//add a bunch of Isos
const isoGeo = new THREE.IcosahedronGeometry(1, 0);
const colors = [0x36002a, 0x090034, 0x003627, 0x263400, 0x2d1500];
function addIcosa()
{
  const myColor = Math.floor(Math.random() * 5);
  const isoMat = new THREE.MeshBasicMaterial({color: colors[myColor], wireframe: true});
  const ball = new THREE.Mesh(isoGeo, isoMat);

  const[x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  ball.position.set(x, y, z);
  scene.add(ball);

  return ball;
}

const balls = Array(200).fill().map(() => addIcosa());

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

  // torusMesh.position.set(camera.position.x, camera.position.y, camera.position.z);

  // torusMesh.rotation.y -= 0.006;
  // torusMesh.rotation.x += 0.005;

  for(let i = 0; i < balls.length; i++)
  {
    balls[i].rotation.x += 0.002;
    balls[i].rotation.y += 0.005;
  }

  //ends here ^

  renderer.render(scene, camera);
}

function moveCamera()
{
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = 10 - t * 0.03;
}

document.body.onscroll = moveCamera;

//TODO: uncomment when you want to do threejs stuff
animate();