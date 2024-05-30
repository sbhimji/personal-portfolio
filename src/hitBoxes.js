import { PlaneGeometry, Mesh, MeshStandardMaterial, Raycaster, Vector2, FrontSide, BackSide } from 'three';
function addHitBoxes(window, camera, scene, width, height) {
    function createBoxes() {
        const jumbotronHitBox = new PlaneGeometry(width, height);

        const playerAttrHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000, side:BackSide} )
        );
        playerAttrHitMesh.position.set(0 - width / 2, height * 2, 0);
        playerAttrHitMesh.rotation.y = Math.PI/2;
        playerAttrHitMesh.name = "PlayerAttrHitBoxPlane";

        const abtMeHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000, side:FrontSide} )
        );
        abtMeHitMesh.position.set(0 + width / 2, height * 2, 0);
        abtMeHitMesh.rotation.y = Math.PI/2;
        abtMeHitMesh.name = "AbtMeHitBoxPlane";

        const expHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000, side:BackSide} )
        );
        expHitMesh.position.set(0, height * 2, 0 - width / 2);
        expHitMesh.name = "ExpHitBoxPlane";

        const persProjHitMesh = new Mesh(
            jumbotronHitBox, 
            new MeshStandardMaterial( {color:0x009000, side:FrontSide} )
        );
        persProjHitMesh.position.set(0, height * 2, 0 + width / 2);
        persProjHitMesh.name = "PersProjHitBoxPlane";

        playerAttrHitMesh.visible = false;
        persProjHitMesh.visible = false;
        expHitMesh.visible = false;
        abtMeHitMesh.visible = false;

        scene.add(abtMeHitMesh);
        scene.add(persProjHitMesh);
        scene.add(playerAttrHitMesh);
        scene.add(expHitMesh);
    }

    function createEventListeners() {
        const raycaster = new Raycaster();
        let pointer = new Vector2();
        window.addEventListener('pointerdown', (event) => {
            if (camera.verticalLayout && camera.isJumbotronInstance) {
                pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	            pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
                raycaster.setFromCamera( pointer, camera.getCamera() );
                const intersects = raycaster.intersectObjects( scene.children );
                let notRotating = true;
                for ( let i = 0; i < intersects.length; i ++ ) {
                    
                    if (intersects[ i ].object.name.includes('HitBoxPlane')) {
                        notRotating = false;
                        //for some reason if two hit boxes are detected
                        break;
                    }
                }
                if (notRotating == true) {
                    camera.defaultCamera();
                    camera.defaultControls();
                }
            }
            
        })
        window.addEventListener('pointerup', (event) => {
            console.log("click event occurred");
            console.log(event.clientX);
            console.log(event.clientY);

            //get objects intersecting with click
            pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	        pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera( pointer, camera.getCamera() );
            const intersects = raycaster.intersectObjects( scene.children );
            if (!camera.isJumbotronInstance) {
                for ( let i = 0; i < intersects.length; i ++ ) {
                    //console.log(intersects[ i ].object);
                    if (intersects[ i ].object.name.includes('HitBoxPlane')) {
                        console.log(intersects[ i ].object);
                        handleClick(intersects[i].object.name);
                        //for some reason if two hit boxes are detected
                        break;
                    }
                }
            } else {
                let notRotating = false;
                for ( let i = 0; i < intersects.length; i ++ ) {
                    console.log(intersects[ i ].object);
                    if (intersects[ i ].object.name.includes('HitBoxPlane')) {
                        notRotating = true;
                    }
                }
                console.log("NOTROTATING:", notRotating);
                if (notRotating == false) {
                    camera.defaultCamera();
                    camera.defaultControls();
                }
            }
        })

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' || event.key === 'Esc') {
                camera.defaultCamera();
                camera.defaultControls();
            }
        })
    }

    function handleClick(objName) {
        switch(objName) {
            case 'PlayerAttrHitBoxPlane':
                camera.playerAttrCamera();
                break;
            case 'ExpHitBoxPlane':
                camera.expCamera();
                break;
            case 'AbtMeHitBoxPlane':
                camera.abtMeCamera();
                break;
            case 'PersProjHitBoxPlane':
                camera.personalProjCamera();
                break;
        }
    }

    createBoxes();
    createEventListeners();
}

// Export function
export { addHitBoxes };