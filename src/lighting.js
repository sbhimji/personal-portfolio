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
        pointLight.position.set( 20, 70, 20 );
        scene.add( pointLight );
        const pointLight2 = new PointLight( 0xFFFFFF, 100, 100 );
        pointLight2.position.set( -20, 70, -20 );
        scene.add( pointLight2 );
        const pointLight3 = new PointLight( 0xFFFFFF, 100, 100 );
        pointLight3.position.set( -20, 70, 20 );
        scene.add( pointLight3 );
        const pointLight4 = new PointLight( 0xFFFFFF, 100, 100 );
        pointLight4.position.set( -20, 70, 20 );
        scene.add( pointLight4 );
        const pointLight5 = new PointLight( 0xFFFFFF, 100, 100 );
        pointLight5.position.set( -10, 30, -10 );
        scene.add( pointLight5 );
        // const pointLightHelper5 = new PointLightHelper( pointLight5, sphereSize );
        // scene.add( pointLightHelper5 );
    }
    createLight();
}

// Export the light function
export { light };