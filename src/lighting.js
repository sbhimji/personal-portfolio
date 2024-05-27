import { PointLight, PointLightHelper, RectAreaLight } from 'three';
//import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
function light(scene) {
    function createLight() {
        //const sphereSize = 1;
        const y = 20;
        for (let x = -20; x < 21; x += 20) {
            for (let z = -80; z < 81; z += 20) {
                const pointLight = new PointLight( 0xFFFFFF, 80, 100 );
                pointLight.position.set( x, y, z );
                scene.add( pointLight );
                // const pointLightHelper = new PointLightHelper( pointLight, sphereSize );
                // scene.add( pointLightHelper );
            }
        }
        const rectLight = new RectAreaLight( 0xffffff, 3,  70, 70 );
	    rectLight.position.set( 0, 20, 0 );
	    rectLight.lookAt( 0, 100, 0 );
	    scene.add( rectLight )
    }
    createLight();
}

// Export the light function
export { light };