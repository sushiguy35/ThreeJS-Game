import * as THREE from 'three/src/Three.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/
const planeGeo = new THREE.BoxGeometry(10, 1, 10);
const planeMat = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const plane = new THREE.Mesh( planeGeo, planeMat );
scene.add( plane );

camera.position.z = 10;
camera.position.y = 10;
camera.rotation.x = -0.5;
function animate() {
	requestAnimationFrame( animate );

	/*cube.rotation.x += 0.01;
	cube.rotation.y += 0.11;*/

	renderer.render( scene, camera );
}

animate();