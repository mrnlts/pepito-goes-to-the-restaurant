document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');

    const game = new Game();   
    
    /*Event Listeners*/
    
    //Start event
    startBtn.addEventListener("click", () => {
        game.start();});
    //How to play event
    howToBtn.addEventListener("click", () => {
        game.howToPlay();});
    //Start from How-to screen
    startFromHowToBtn.addEventListener("click", ()=> {
        game.startFromInstructions();});

    //Table 0 event
    table0.btn.addEventListener('click', () => {
        game._assignCustomerToTable(terrace.indexOf(table0));});
    //Table 1 event
    table1.btn.addEventListener('click', () => {
        game._assignCustomerToTable(terrace.indexOf(table1));});
    //Table 2 event
    table2.btn.addEventListener('click', () => {
        game._assignCustomerToTable(terrace.indexOf(table2));});
    //Table 3 event
    table3.btn.addEventListener('click', () => {
        game._assignCustomerToTable(terrace.indexOf(table3));});


    playAgainWinBtn.addEventListener("click", () => {
        _hideWinScreen();
        game._reset();
        game.start();
        game._buildQueue();
        setTimeout (()=> {game._gameOver("lose");}, 10000);
    });
    playAgainLoseBtn.addEventListener("click", () => {
        _hideLoseScreen();
        game._reset();
        game.start();
    });

    });