class Game {
    constructor() {
        this.terrace = terrace; // Array de tables
        this.queue = queue; // Array of customers
    }

    _assignCustomerToTable(i) {
        this.terrace[i]._changeTableStatus();
        switch (this.terrace[i].status){
            case 'free':
                this.terrace[i].btn.disabled = false; 
                this.terrace[i].btn.classList.remove("red");this.terrace[i].btn.classList.add("green");        
                score.innerHTML = parseInt(score.innerHTML)+1;
                console.log("This is free");
                break;
            case 'countdown':
                console.log("This is countdown");
                this.terrace[i].btn.classList.remove("green"); this.terrace[i].btn.classList.add("yellow");
                this.terrace[i].btn.disabled = true;
                setTimeout(()=> {
                    this.terrace[i].btn.disabled = false; 
                    this.terrace[i].btn.classList.remove("yellow"); this.terrace[i].btn.classList.add("red");
                    this.terrace[i].status = "collect";
                }, 3000);
                break;
            case 'collect':
                console.log("This is collect");
                this.terrace[i].btn.disabled = false; 
                this.terrace[i].btn.classList.remove("yellow"); this.terrace[i].btn.classList.add("red");
                break;
        }
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
                queue.push(currentCustom);
                console.log(queue);
            } else {
                customsCounter = 0;
            }
            if (spotsCounter <= 7) {
                spotsCounter++;
            } else {
                return;
            }
            }, 1500);
        
        // setTimeout(clearInterval(queueInterval), 300000);
    }

    _gameCountdown() {
        _countdown(300, timer);
    }

    start(){
        console.log("The game has started");
        _drawGame();
        this._gameCountdown();
        this._buildQueue();
        if (this._gameCountdown() === 0) {
        _GameOver();
        }
    }
}