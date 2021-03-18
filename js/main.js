document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');

    const game = new Game(); 

    const gameTables = [];
    const gameQueue = [];
    const startBtn = document.getElementById("startBtn");
    

    function _generateTables() {
        game.terrace.forEach((table)=> {
            console.log('terrace item created');
            const tableHtml = document.getElementById(table); 
            table.btn.push(tableHtml);
        });
    }

    function _generateQueue() {
        game.queue.forEach((spot) => {
            console.log('queue item created');
            const spotHtml = document.getElementById(spot);
            gameQueue.push(spotHtml);
        });
    }
    
    function _drawGame() {
        game.terrace.forEach((table)=>table._draw());
        game.queue.forEach((spot)=>spot._draw());
        game.customers.forEach((customer)=>customer._draw());
        _generateTables();
        _generateQueue();
    }
    
    startBtn.addEventListener("click", () => {
        _drawGame();
        game.start();
    });
    
    // const table0Btn = document.getElementById("table0");
    // const table1Btn = document.getElementById("table1");
    // const table2Btn = document.getElementById("table2");
    // const table3Btn = document.getElementById("table3");
    
    // table0Btn.addEventListener("click", () => {console.log('table0');console.log('click'); console.log(table1.status);});
    // table1Btn.addEventListener("click", () => {console.log('table1');console.log('click'); console.log(table2.status);});
    // table2Btn.addEventListener("click", () => {console.log('table2');console.log('click'); console.log(table3.status);});
    // table3Btn.addEventListener("click", () => {console.log('table3');console.log('click'); console.log(table4.status);});
        
    // const spot0 = document.getElementById("spot0");
    // const spot1 = document.getElementById("spot1");
    // const spot2 = document.getElementById("spot2");
    // const spot3 = document.getElementById("spot3");
    // const spot4 = document.getElementById("spot4");
    // const spot5 = document.getElementById("spot5");
    // const spot6 = document.getElementById("spot6");
    // const spot7 = document.getElementById("spot7"); 
});