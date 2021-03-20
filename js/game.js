class Game {
    constructor() {
        this.terrace = terrace;
        this.queue = queue;
        this.head = queue[0];
    }

    _changeTableStatus(this.terrace[i]){
        switch (this.status) {
            case 'free':
                _assignCustomerToTable();
                this.status = 'countdown';
                break;
            case 'countdown':
                setTimeout(this._collect(), 10000);
                this.status = 'collect';
                console.log(this.status);
                break;
            case 'collect':
                this.status = 'free';
                console.log(this.status);
                break;
        }
    }

    _assignCustomerToTable() {
        setTimeout(_collect(), 100000);
        table.assignedCostumer = this.head;
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