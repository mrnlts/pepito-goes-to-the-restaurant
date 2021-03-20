class Game {
    constructor() {
        this.terrace = terrace; // Array de tables
        this.queue = queue; // Array of customers
        this.head = queue[0];
    }

    _assignCustomerToTable(i) {
        this.terrace[i]._changeTableStatus();
        setTimeout(_collect(), 100000);
        this.terrace[i].assignedCostumer = this.head;
    }

    _gameCountdown() {
        _countdown(300, timer);
    }

    start(){
        console.log("The game has started");
        this._gameCountdown();
        if (this._gameCountdown() === 0) {
        _GameOver();
        }
    }
}