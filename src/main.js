import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { animate } from './animate.js';
import { light } from './lighting.js';

//create scene, camera, and render
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 60, 35, 100 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add light
light(scene);

//add support for orbiting
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

//loader for 3d model
const loader = new GLTFLoader();

//load model, add to scene
loader.load( '../public/models/court.glb', function ( gltf ) {
	scene.add( gltf.scene );
	//color of all court lines
	gltf.scene.getObjectByName('basketball_court').children[0].children[0].material.color.setHex(0xFFFFFF);
	//color of hoop base
	gltf.scene.getObjectByName('basketball_court').children[0].children[2].material.color.setHex(0xF9F000);
	//color of center circle
	gltf.scene.getObjectByName('basketball_court').children[0].children[1].material.color.setHex(0xF9F000);
	//gltf.scene.children[3].material.colorWrite = false; 
	gltf.scene.children[3].material.color.setHex(0xFFFFFF);
	console.log(gltf.scene);
}, undefined, function ( error ) {
    console.log("wrong");
	console.error( error );

} );

animate(renderer, scene, camera, controls);




