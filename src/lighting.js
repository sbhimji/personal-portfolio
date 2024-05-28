import { PointLight, PointLightHelper, RectAreaLight } from 'three';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
//import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
function light(scene) {
    function createLight() {
        const rectLightJumbotron = new RectAreaLight( 0xffffff, 3,  70, 70 );
	    rectLightJumbotron.position.set( 0, 25, 0 );
	    rectLightJumbotron.lookAt( 0, 100, 0 );
	    scene.add( rectLightJumbotron );

        const rectLightCourt = new RectAreaLight( 0xffffff, .75,  80, 200 );
	    rectLightCourt.position.set( 0, 25, 0 );
	    rectLightCourt.lookAt( 0, 0, 0 );
	    scene.add( rectLightCourt );
        // const helper = new RectAreaLightHelper( rectLightCourt );
        // rectLightCourt.add( helper );

        const pointLightHoop1 = new PointLight( 0xFFFFFF, 70, 100 );
        pointLightHoop1.position.set( 0, 22, 63 );
        scene.add( pointLightHoop1 );
        // const pointLightHelper = new PointLightHelper( pointLightHoop1, sphereSize );
        // scene.add( pointLightHelper );

        const pointLightHoop2 = new PointLight( 0xFFFFFF, 70, 100 );
        pointLightHoop2.position.set( 0, 22, -63 );
        scene.add( pointLightHoop2 );
    }
    createLight();
}

// Export the light function
export { light };