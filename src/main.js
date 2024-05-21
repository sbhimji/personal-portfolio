import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { animate } from './animate.js';

//create scene, camera, and render
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 20, 100 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add light
var light = new THREE.AmbientLight(0xFFFFFF);
scene.add(light);

//add support for orbiting
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

//loader for 3d model
const loader = new GLTFLoader();

//load model, add to scene
loader.load( '../public/models/court.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
    console.log("wrong");
	console.error( error );

} );

animate(renderer, scene, camera, controls);
//renderer.render( scene, camera );
// //perform animation
// animate();


// function animate() {
// 	requestAnimationFrame( animate );

// 	renderer.render( scene, camera );
// }



