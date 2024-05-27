import { PointLight, PointLightHelper, RectAreaLight } from 'three';
//import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
function light(scene) {
    function createLight() {
        const sphereSize = 1;
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
        // const pointLight = new PointLight( 0xFFFFFF, 100, 100 );
        // pointLight.position.set( 20, 70, 20 );
        // scene.add( pointLight );
        // const pointLightHelper = new PointLightHelper( pointLight, sphereSize );
        // scene.add( pointLightHelper );
        // const pointLight2 = new PointLight( 0xFFFFFF, 100, 100 );
        // pointLight2.position.set( -20, 70, -20 );
        // scene.add( pointLight2 );
        // const pointLightHelper2 = new PointLightHelper( pointLight2, sphereSize );
        // scene.add( pointLightHelper2 );
        // const pointLight3 = new PointLight( 0xFFFFFF, 100, 100 );
        // pointLight3.position.set( -20, 70, 20 );
        // scene.add( pointLight3 );
        // const pointLightHelper3 = new PointLightHelper( pointLight3, sphereSize );
        // scene.add( pointLightHelper3 );
        // const pointLight4 = new PointLight( 0xFFFFFF, 100, 100 );
        // pointLight4.position.set( 20, 70, -20 );
        // scene.add( pointLight4 );
        // const pointLightHelper4 = new PointLightHelper( pointLight4, sphereSize );
        // scene.add( pointLightHelper4 );
        // const pointLight5 = new PointLight( 0xFFFFFF, 100, 100 );
        // pointLight5.position.set( -10, 30, -10 );
        // scene.add( pointLight5 );
        // const pointLightHelper5 = new PointLightHelper( pointLight5, sphereSize );
        // scene.add( pointLightHelper5 );
    }
    createLight();
}

// Export the light function
export { light };