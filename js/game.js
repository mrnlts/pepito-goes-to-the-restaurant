class Game {
    constructor() {
        this.terrace = terrace;
        this.terraceHtml = terraceHtml;
        this.queue = queue; 
        this.queueHtmlArr = queueHtmlArr;
    }

    start(){
        clickSound.play();
        setTimeout(()=>backgroundSound.play(), 500);
        _drawGame();
        this._gameCountdown();
        this._buildQueue();
        this._checkProgress();
    }

    howToPlay(){
        clickSound.play();
        _hideSplashScreen();
        _showHowToScreen();
    }

    startFromInstructions(){
        clickSound.play();
        setTimeout(()=>backgroundSound.play(), 500);
        _hideHowToScreen();
        _drawGame();
        this._gameCountdown();
        this._buildQueue();
        this._checkProgress();
    }

    _gameCountdown() {
        _countdown(40, timer);
    }

    _buildQueue() {
        let spotsCounter = 0;
        let customsCounter = 0;
        queueInterval = setInterval(()=> {  
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
                coinSound.play();
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
        clearInterval(queueInterval);
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
        setTimeout(()=>this._checkWin(), 40000);
    }

    _gameOver(x) {
        _drawGameOver(x);
        this._clearQueue();
    }

    _reset() {
        clickSound.play();
        console.log("this is a reset");
        queueHtmlArr.forEach((spot)=> spot.innerHTML="");
        this.terraceHtml.innerHTML = terraceHtmlCopy;  
        patience.innerHTML = 10;
        score.innerHTML = 0;
        queue = [];
    }
}