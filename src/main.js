import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Camera } from './Camera.js';
import { animate } from './animate.js';
import { light } from './lighting.js';
import { addHitBoxes } from './hitBoxes.js';


//create scene
const scene = new THREE.Scene()

//create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//create camera and orbiting
const camera = new Camera(renderer.domElement);

//loader for 3d model
const loader = new GLTFLoader();

//load model, add to scene
loader.load( '../public/models/court.glb', function ( gltf ) {
	console.log(gltf.scene);
	
	//color of all court lines
	gltf.scene.getObjectByName('basketball_court').children[0].children[0].material.color.setHex(0x000000);
	gltf.scene.getObjectByName('Cylinder').material.color.setHex(0xcfd6dc);


	const textureLoader = new THREE.TextureLoader();
	textureLoader.setPath('../public/textures/');
	const attrTexture = textureLoader.load('portfolio/player_attr.png');
	const abtTexture = textureLoader.load('portfolio/abt_me.png');
	const projTexture = textureLoader.load('portfolio/personal_proj.png');
	const expTexture = textureLoader.load('portfolio/experience.png');
	const blankTexture = textureLoader.load('test/black.png');
	const materialArray = [
		new THREE.MeshStandardMaterial( {color:0xffffff, map:abtTexture} ),
		new THREE.MeshStandardMaterial( {color:0xffffff, map:attrTexture} ),
		new THREE.MeshStandardMaterial( {color:0xffffff, map:blankTexture} ),
		new THREE.MeshStandardMaterial( {color:0xffffff, map:blankTexture} ),
		new THREE.MeshStandardMaterial( {color:0xffffff, map:projTexture} ),
		new THREE.MeshStandardMaterial( {color:0xffffff, map:expTexture} )
	];
	const picWidth = 1600;
	const picHeight = 822;
	const yMultiplier = picWidth / picHeight;
	const height = 20;
	const width = height * yMultiplier;
	let cubeGeometry = new THREE.BoxGeometry(width, height, width);	
	
	let cubeMesh = new THREE.Mesh( cubeGeometry, materialArray );
	cubeMesh.position.set(0, 40, 0);
	scene.add(cubeMesh);

	addHitBoxes(window, camera, scene, width, height);

	//add light
	light(scene);

	scene.add( gltf.scene );
	console.log(scene);

	animate(renderer, scene, camera);
}, undefined, function ( error ) {
	console.error( error );
} );

//animate(renderer, scene, camera);






