import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class Camera {
    //constructor(scene) {
    constructor(canvas) {
        this.canvas = canvas;
        //this.isJumbotronInstance = false;
        this.defaultCamera();
        this.defaultControls();
    }

    defaultCamera() {
        this.camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 );
        //this.camera.position.set( 60, 35, 100 );
        this.camera.position.set( -80, 58, 30 );
        this.isJumbotronInstance = false;
    }

    defaultControls() {
        this.controls = new OrbitControls( this.camera, this.canvas );
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = .45;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = .03;
        this.controls.maxPolarAngle = Math.PI/2.1;
        this.controls.minPolarAngle = Math.PI/3.3;
        this.controls.enableZoom = false;
        this.controls.zoomToCursor = false;
    }

    updateControls() {
        //this.controls.update();
    }

    getCamera() {
        return this.camera;
    }

    jumbotronCamera() {
        this.isJumbotronInstance = true;
        this.controls.autoRotate = false;
        this.camera.fov = 20;
        //this.controls.dampingFactor = 0.0;
        //this.camera.lookAt(0, 100, 0);
        this.controls.target.set(0, 36, 0);
        //this.camera.lookAt(0, 100, 0);
        this.camera.focus = 28;
        this.controls.minPolarAngle = Math.PI *0.45;
        this.controls.maxPolarAngle = Math.PI * 0.45;
        //this.camera.zoom = 2;
        this.camera.updateProjectionMatrix();
    }

    playerAttrCamera() {
        this.camera.position.set( -80, 80, 0 );
        this.jumbotronCamera();
    }

    abtMeCamera() {
        this.camera.position.set( 80, 80, 0 );
        this.jumbotronCamera();
    }

    personalProjCamera() {
        this.camera.position.set( 0, 80, 80 );
        this.jumbotronCamera();
    }

    expCamera() {
        this.camera.position.set( 0, 80, -80 );
        this.jumbotronCamera();
    }
}

export {Camera};