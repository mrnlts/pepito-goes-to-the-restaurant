class Game {
    constructor() {
        this.terrace = terrace; // Array of tables
        this.terraceHtml = terraceHtml;
        this.queue = queue; // Array of waiting customers
        this.queueHtmlArr = queueHtmlArr;
        this.queueInterval = 0;
        this.backgroundSound = new sound ("sound/jazzyfrenchy.mp3", 0.2);
        this.coinSound = new sound ("sound/coins.mp3", 1);
    }

    start(){
        console.log("The game has started");
        this.backgroundSound.play();
        _drawGame();
        this._gameCountdown();
        this._buildQueue();
        this._checkProgress();
    }

    howToPlay(){
        console.log("these are the instructions");
        _hideSplashScreen();
        _showHowToScreen();
    }

    startFromInstructions(){
        console.log("the game has started");
        this.backgroundSound.play();
        _hideHowToScreen();
        _drawGame();
        this._gameCountdown();
        this._buildQueue();
        this._checkProgress();
    }

    _gameCountdown() {
        _countdown(60, timer);
    }

    _buildQueue() {
        let spotsCounter = 0;
        let customsCounter = 0;
        this.queueInterval = setInterval(()=> {  
            this._checkProgress();
            if (customsCounter <= 3) {
                const currentSpot = this.queueHtmlArr[spotsCounter];
                const currentCustom = people[Math.round(Math.random()*4)];
                currentSpot.innerHTML = currentCustom.look;
                queue.push(currentCustom);
                console.log(queue);
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

    _assignCustomerToTable(i) {
        this.terrace[i]._changeTableStatus();
        switch (this.terrace[i].status){
            case 'free':
                freeTable.bind(Game);    
                _freeTable(this.terrace[i], [i]);
                this.coinSound.play();
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

    _clearQueue() {
        clearInterval(this.queueInterval);
    }

    _checkWin() {
        if (patience.innerHTML > 1) {
            this._clearQueue();
        }
    }

    _checkProgress() {
        if (this.queue.length > 3 && patience.innerHTML !== "1") {
            patience.innerHTML = parseInt(patience.innerHTML)-1;    
        } else if (patience.innerHTML === "1") {
            this._gameOver("lose");
        }
        setTimeout(()=>this._checkWin(), 60000);
    }

    
    _gameOver(x) {
        _drawGameOver(x);
        this._clearQueue();
        this.backgroundSound.stop();
    }

    _reset() {
        console.log("this is a reset");
        _drawSplashScreen();
        queueHtmlArr.forEach((spot)=> spot.innerHTML="");
        this.terraceHtml.innerHTML = terraceHtmlCopy;  
        patience.innerHTML = 9;
        score.innerHTML = 0;
        queue = [];
        this.backgroundSound.play();
    }
}