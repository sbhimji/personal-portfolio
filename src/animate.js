function animate(renderer, scene, camera) {
    function animateFrame() {
        requestAnimationFrame(animateFrame);
        camera.controls.update();
        scene.children[0].rotation.y += 0.001;
        //console.log(scene);
        renderer.render(scene, camera.getCamera());
        
    }
    animateFrame();
}

// Export the animate function
export { animate };