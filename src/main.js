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
	
	//color of all court lines
	gltf.scene.getObjectByName('basketball_court').children[0].children[0].material.color.setHex(0x000000);


	const textureLoader = new THREE.TextureLoader();
	textureLoader.setPath('../public/textures/');
	const texture = textureLoader.load('test/space_jam.png');
	const blankTexture = textureLoader.load('test/black.png');
	const materialArray = [
		new THREE.MeshStandardMaterial( {color:0xffffff, map:texture} ), 
		new THREE.MeshStandardMaterial( {color:0xffffff, map:texture} ), 
		new THREE.MeshStandardMaterial( {color:0xffffff, map:blankTexture} ), 
		new THREE.MeshStandardMaterial( {color:0xffffff, map:texture} ),
		new THREE.MeshStandardMaterial( {color:0xffffff, map:texture} ),
		new THREE.MeshStandardMaterial( {color:0xffffff, map:texture} )
	];
	
	let cubeGeometry = new THREE.BoxGeometry(27,27,27);	
	
	let cubeMesh = new THREE.Mesh( cubeGeometry, materialArray );
	cubeMesh.position.set(0, 40, 0);
	scene.add(cubeMesh);


	scene.add( gltf.scene );

	console.log(scene);
	animate(renderer, scene, camera);
}, undefined, function ( error ) {
	console.error( error );
} );

//animate(renderer, scene, camera);






