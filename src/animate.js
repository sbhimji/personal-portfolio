function animate(renderer, scene, camera, controls) {
    function animateFrame() {
        requestAnimationFrame(animateFrame);
        controls.update();
        renderer.render(scene, camera);
    }
    animateFrame();
}

// Export the animate function
export { animate };