document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');

    const game = new Game(); 

    const gameTables = [];
    const gameQueue = [];
    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", () => game.start());

    function _generateTables() {
        game.terrace.forEach((table)=> {
            const tableHtml = document.getElementById(table); 
            gameTables.push(tableHtml);
        });
    }

    function _generateQueue() {
        game.queue.forEach((spot) => {
            const spotHtml = document.getElementById(spot);
            gameQueue.push(spotHtml);
        });
    }
    
    _generateTables();
    _generateQueue();



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