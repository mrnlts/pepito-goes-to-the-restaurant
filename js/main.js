document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');

    const game = new Game();   
    
    /*Event Listeners*/
    //Table 0 event
    table0.btn.addEventListener('click', () => {
        console.log("table0 clicked, status = " + table0.status);
        game._assignCustomerToTable(terrace.indexOf(table0));
        console.log("status = "+ table0.status, table0.assignedCostumer + "of table0");});
    //Table 1 event
    table1.btn.addEventListener('click', () => {
        console.log("table1 clicked, status = " + table1.status);
        game._assignCustomerToTable(terrace.indexOf(table1));
        console.log("status = "+ table1.status, table1.assignedCostumer + "of table1");});
    //Table 2 event
    table2.btn.addEventListener('click', () => {
        console.log("table2 clicked, status = " + table2.status);
        game._assignCustomerToTable(terrace.indexOf(table2));
        console.log("status = "+ table2.status, table2.assignedCostumer + "of table2");});
    //Table 3 event
    table3.btn.addEventListener('click', () => {
        console.log("table3 clicked, status = " + table3.status);
        game._assignCustomerToTable(terrace.indexOf(table3));
        console.log("status = "+ table3.status, table3.assignedCostumer + "of table3");});
    //Start event
    startBtn.addEventListener("click", () => {
        _drawGame();
        game.start();
    });

});

