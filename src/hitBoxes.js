import { PlaneGeometry, Mesh, MeshStandardMaterial } from 'three';
function addHitBoxes(window, scene, width, height) {
    function createBoxes() {
        const jumbotronHitBox = new PlaneGeometry(width, height);

        const playerAttrHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000} )
        );
        playerAttrHitMesh.position.set(0 - width / 2, height * 2, 0);
        playerAttrHitMesh.rotation.y = Math.PI/2;

        const abtMeHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000} )
        );
        abtMeHitMesh.position.set(0 + width / 2, height * 2, 0);
        abtMeHitMesh.rotation.y = Math.PI/2;

        const expHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000} )
        );
        expHitMesh.position.set(0, height * 2, 0 - width / 2);

        const persProjHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000} )
        );
        persProjHitMesh.position.set(0, height * 2, 0 + width / 2);

        playerAttrHitMesh.visible = false;
        persProjHitMesh.visible = false;
        expHitMesh.visible = false;
        abtMeHitMesh.visible = false;
        
        scene.add(abtMeHitMesh);
        scene.add(persProjHitMesh);
        scene.add(playerAttrHitMesh);
        scene.add(expHitMesh);
    }
    function createEventListener() {
        window.addEventListener('pointerup', (event) => {
            console.log("click event occurred");
            console.log(event.clientX);
            console.log(event.clientY);
        })

    }

    createBoxes();
    createEventListener();
}

// Export function
export { addHitBoxes };