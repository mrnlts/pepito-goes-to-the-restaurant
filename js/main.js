document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');

    const game = new Game();     

    function _drawGame() {
        title.classList.remove("hide"); title.classList.add("show");
        tablesHtmlArr.forEach((table)=> {table.classList.remove("hide"); table.classList.add("show");});
        spotsHtmlArr.forEach((spot)=> {spot.classList.remove("hide"); spot.classList.add("show");});
    }
    
    startBtn.addEventListener("click", () => {
        _drawGame();
        game.start();
    });
});