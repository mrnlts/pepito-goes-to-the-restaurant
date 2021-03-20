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
        setTimeout(()=> {
            this.terrace[i].btn.disabled = false; 
            this.terrace[i].status = "collect"; 
            console.log(this.terrace[i].status + ` table ${[i]}`);}, 5000);
    }

    _buildQueue() {
        console.log("start queue building");
        let spotsCounter = 0;
        let customsCounter = 0;
        let queueInterval = setInterval(()=> {
            if (customsCounter <= 3) {
                const currentSpot = spotsHtmlArr[spotsCounter];
                const currentCustom = people[Math.round(Math.random()*4)];
                currentSpot.innerHTML = currentCustom.look;
            } else {
                customsCounter = 0;
            }
            console.log("new costumer" + spotsCounter);
            if (spotsCounter <= 7) {
                spotsCounter++;
            } else {
                spotsCounter = 0;
            }
            }, 1500);
        // setTimeout(clearInterval(queueInterval), 300000);
    }

    _gameCountdown() {
        _countdown(300, timer);
    }

    start(){
        console.log("The game has started");
        this._gameCountdown();
        this._buildQueue();
        if (this._gameCountdown() === 0) {
        _GameOver();
        }
    }
}