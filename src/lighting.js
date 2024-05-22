import { PointLight, PointLightHelper } from 'three';
function light(scene) {
    function createLight() {
        const sphereSize = 1;
        const y = 40;
        for (let x = -20; x < 21; x += 20) {
            for (let z = -80; z < 81; z += 20) {
                const pointLight = new PointLight( 0xFFFFFF, 100, 100 );
                pointLight.position.set( x, y, z );
                scene.add( pointLight );
                // const pointLightHelper = new PointLightHelper( pointLight, sphereSize );
                // scene.add( pointLightHelper );
            }
        }
        const pointLight = new PointLight( 0xFFFFFF, 100, 100 );
        pointLight.position.set( 0, 80, 0 );
        scene.add( pointLight );
        // const pointLightHelper = new PointLightHelper( pointLight, sphereSize );
        // scene.add( pointLightHelper );
        //return scene;
    }
    createLight();
}

// Export the animate function
export { light };