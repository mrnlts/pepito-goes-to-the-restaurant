class Game {
    constructor() {
        this.terrace = terrace; // Array of tables
        this.queue = queue; // Array of waiting customers
        this.queueHtmlArr = queueHtmlArr;
    }

    _assignCustomerToTable(i) {
        this.terrace[i]._changeTableStatus();
        switch (this.terrace[i].status){
            case 'free':
                freeTable.bind(Game);    
                _freeTable(this.terrace[i], [i]);
                break;
            case 'countdown':
                countdownTable.bind(Game);
                _countdownTable(this.terrace[i], [i]);
                break;
            case 'collect':
                collectTable.bind(Game);
                _collectTable(this.terrace[i], [i]);
                break;
        }
    }

    _buildQueue() {
        let spotsCounter = 0;
        let customsCounter = 0;
        const queueInterval = setInterval(()=> {  
            this._checkProgress();
            if (customsCounter <= 3) {
                const currentSpot = this.queueHtmlArr[spotsCounter];
                const currentCustom = people[Math.round(Math.random()*4)];
                currentSpot.innerHTML = currentCustom.look;
                queue.push(currentCustom);
            } else {
                customsCounter = 0;
            }
            if (spotsCounter <= 6) {
                spotsCounter++;
            } else {
                spotsCounter = 0;
            }
            }, 1500);    
    }

    _checkProgress() {
        if (this.queue.length > 3 && patience.innerHTML !== "1") {
            patience.innerHTML = parseInt(patience.innerHTML)-1;    
        } else if (patience.innerHTML === "1") {
            this._gameOver("lose");
        }
        // } else if (patience <= 0) {
        //     this._gameOver(lose);
        // }
    }

    _gameCountdown() {
        _countdown(60, timer);
    }

    _gameOver(x) {
        _drawGameOver(x);
    }

    start(){
        console.log("The game has started");
        _drawGame();
        this._gameCountdown();
        this._buildQueue();
        this._checkProgress();
    }

    // _reset() {
    //     clearQueue.bind(this._buildQueue);
    // }    

}