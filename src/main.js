import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Camera } from './Camera.js';
import { animate } from './animate.js';
import { light } from './lighting.js';

//create scene
const scene = new THREE.Scene()

//create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//create camera and orbiting
const camera = new Camera(renderer.domElement);

//add light
light(scene);

//loader for 3d model
const loader = new GLTFLoader();

//load model, add to scene
loader.load( '../public/models/court.glb', function ( gltf ) {
	console.log(gltf.scene);
	scene.add( gltf.scene );

	//color of all court lines
	gltf.scene.getObjectByName('basketball_court').children[0].children[0].material.color.setHex(0xFFFFFF);
	//color of jumbotrons
	gltf.scene.children[3].material.color.setHex(0xFFFFFF);
	gltf.scene.getObjectByName('Cylinder').material.color.setHex(0xFFFFFF);
	
}, undefined, function ( error ) {
	console.error( error );
} );

//animate(renderer, scene, camera, controls);
animate(renderer, scene, camera);




