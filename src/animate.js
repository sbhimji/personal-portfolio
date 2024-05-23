function animate(renderer, scene, camera) {
    function animateFrame() {
        requestAnimationFrame(animateFrame);
        camera.controls.update();
        renderer.render(scene, camera.getCamera());
    }
    animateFrame();
}

// Export the animate function
export { animate };