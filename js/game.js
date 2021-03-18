class Game {
    constructor() {
        this.terrace = terrace;
        this.queue = queue;
        this.head = queue[0];
    }

    _assignCustomerToTable(table) {
        setTimeout(_collect(), 100000);
        table.assignedCostumer = this.head;
    }

    _gameCountdown() {
        _countdown(300, timer);
    }

    start(){
        console.log("The game has started");
        this._gameCountdown();
    }
}