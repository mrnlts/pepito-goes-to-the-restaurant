class Game {
    constructor() {
        this.terrace = terrace; // Array de tables
        this.queue = queue; // Array of customers
        this.head = queue[0];
    }

    _assignCustomerToTable(i) {
        this.terrace[i].status = "countdown";
        setTimeout((this.terrace[i]._changeTableStatus()), 100000);
        this.terrace[i].assignedCostumer = 'I’m the first customer';
        this.terrace[i].btn.disabled = true;
        setTimeout(()=> {this.terrace[i].btn.disabled = false; this.terrace[i].status = "collect"; console.log(this.terrace[i].status + ` table ${[i]}`);}, 5000);
    }

    _buildQueue() {
        let counter = 0;
        for (i = 0; i < 8; i++) {
            spotsHtmlArr[counter].innerText = `cust${counter}.look`;
            counter++;
        }
    }

    _gameCountdown() {
        _countdown(300, timer);
    }

    start(){
        console.log("The game has started");
        this._gameCountdown();
        let queueInterval = setInterval(()=> {this._buildQueue(); console.log("new costumer!");}, 3000);
        setTimeout(clearInterval(queueInterval), 300000);
        if (this._gameCountdown() === 0) {
        _GameOver();
        }
    }
}