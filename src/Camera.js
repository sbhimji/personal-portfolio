import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class Camera {
    //constructor(scene) {
    constructor(canvas) {
        this.canvas = canvas;
        this.createCamera();
        this.createControls();
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 );
        //this.camera.position.set( 60, 35, 100 );
        this.camera.position.set( -90, 55, -5 );
    }

    createControls() {
        this.controls = new OrbitControls( this.camera, this.canvas );
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = .2;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = .03;
        this.controls.maxPolarAngle = Math.PI/2.1;
        this.controls.minPolarAngle = Math.PI/3.3;
        this.controls.enableZoom = false;
        this.controls.zoomToCursor = false;
    }

    updateControls() {
        this.controls.update();
    }

    getCamera() {
        return this.camera;
    }
}

export {Camera};