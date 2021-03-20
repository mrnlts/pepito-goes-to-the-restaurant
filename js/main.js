document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');

    const game = new Game();     
    
    startBtn.addEventListener("click", () => {
        _drawGame();
        game.start();
    });

});