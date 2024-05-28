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
loader.load( '../Models/court.glb', function ( gltf ) {
	console.log(gltf.scene);
	
	//color of all court lines
	gltf.scene.getObjectByName('basketball_court').children[0].children[0].material.color.setHex(0x000000);
	gltf.scene.getObjectByName('Cylinder').material.color.setHex(0xcfd6dc);


	const textureLoader = new THREE.TextureLoader();
	textureLoader.setPath('../Textures/');
	const attrTexture = textureLoader.load('player_attr.png');
	const abtTexture = textureLoader.load('abt_me.png');
	const projTexture = textureLoader.load('personal_proj.png');
	const expTexture = textureLoader.load('experience.png');
	const blankTexture = textureLoader.load('black.png');
	const materialArray = [
		new THREE.MeshStandardMaterial( {color:0xFFFFFF, map:abtTexture} ),
		new THREE.MeshStandardMaterial( {color:0xFFFFFF, map:attrTexture} ),
		new THREE.MeshStandardMaterial( {color:0xFFFFFF, map:blankTexture} ),
		new THREE.MeshStandardMaterial( {color:0xFFFFFF, map:blankTexture} ),
		new THREE.MeshStandardMaterial( {color:0xFFFFFF, map:projTexture} ),
		new THREE.MeshStandardMaterial( {color:0xFFFFFF, map:expTexture} )
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

	const infoTexture = textureLoader.load('info_text.png');
	const infoBoxGeo = new THREE.PlaneGeometry(878/21.5, 284/21.5);

    const infoBoxMesh = new THREE.Mesh(
        infoBoxGeo, 
        new THREE.MeshStandardMaterial( {color:0xFFFFFF, map:infoTexture, transparent:true, opacity:1.0, side:THREE.DoubleSide} )
    );
    infoBoxMesh.position.set(-30, .05, 21.3);
	infoBoxMesh.rotation.x = - Math.PI/2;
	infoBoxMesh.rotation.z = - Math.PI/2;
	scene.add(infoBoxMesh);

	animate(renderer, scene, camera);
}, undefined, function ( error ) {
	console.error( error );
} );

//animate(renderer, scene, camera);






