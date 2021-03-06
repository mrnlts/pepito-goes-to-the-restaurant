//SPLASH SCREEN
const startBtn = document.getElementById("startBtn");
const howToBtn = document.getElementById("howToBtn");
const startFromHowToBtn = document.getElementById("startFromHowToBtn");
const title = document.getElementById("title");
const splashScreen = document.getElementById("splashScreen");
function _hideSplashScreen() {splashScreen.classList.remove("show"); splashScreen.classList.add("hide");}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//HOW-TO SCREEN
//General--------------------------------------------------------------------------------------------------------------------------------------------------------------------
const howToScreen = document.getElementById("howToScreen");
function _showHowToScreen() {howToScreen.classList.remove("hide"); howToScreen.classList.add("show");}
function _hideHowToScreen() {howToScreen.classList.remove("show"); howToScreen.classList.add("hide");}

//GAME SCREEN
//General--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function _drawGame() {
    _hideSplashScreen();
    _drawGameScreen();
}
function _drawGameScreen() {gameScreen.classList.remove("hide"); gameScreen.classList.add("show");}
function sound(src, volume) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.volume = volume;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}
const gameScreen = document.getElementById("gameScreen");
const score = document.getElementById("score");
const patience = document.getElementById("patience");
const backgroundSound = new sound ("sound/jazzyfrenchy.mp3", 0.2);
const coinSound = new sound ("sound/coins.mp3", 1);
const clickSound = new sound ("sound/metalClick.mp3", 1);
const heySound = new sound ("sound/hey.mp3", 0.3);
//Tables--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Dom*/
const table0Btn = document.getElementById("table0");
const table1Btn = document.getElementById("table1");
const table2Btn = document.getElementById("table2");
const table3Btn = document.getElementById("table3");
const tablesHtmlArr = [table0Btn, table1Btn, table2Btn, table3Btn];
/*Instances*/
const table0 = new Table(table0Btn);
const table1 = new Table(table1Btn);
const table2 = new Table(table2Btn);
const table3 = new Table(table3Btn);
/*Array*/
const terrace = [table0, table1, table2, table3];
const terraceHtml = document.getElementById("terrace");
const terraceHtmlCopy = '<div><span class="t0">Table 0</span><button class="green" id="table0"></button></div><div><span class="t1">Table 1</span><button class="green" id="table1"></button></div><div><span class="t2">Table 2</span><button class="green" id="table2"></button></div><div><span class="t3">Table 3</span><button class="green" id="table3"></button></div>';

/*Functions*/
function _freeTable(table, i) {
    table.btn.disabled = false; 
    table.btn.classList.remove("red");table.btn.classList.add("green");        
    score.innerHTML = parseInt(score.innerHTML)+1;
    table.assignedCustomer = undefined;
    tablesHtmlArr[i].innerHTML = "";
}
const freeTable = _freeTable;

function _countdownTable(table, i) {
    let shiftedCustomer = queue.shift();
        if (shiftedCustomer !== undefined) {
            table.btn.classList.remove("green"); table.btn.classList.add("yellow");
            table.btn.disabled = true;
            table.assignedCustomer = shiftedCustomer;
            tablesHtmlArr[i].innerHTML = shiftedCustomer.look;
            // queueHtmlArr.forEach((spot)=> {if(spot.innerHTML === '') {console.log("there's nobody behind me"); spot.innerHTML= spot.innerHTML;} else {console.log("coming");_advanceQueue();}});
            queueHtmlArr.forEach(()=> _advanceQueue());
            setTimeout(()=> {
                table.btn.disabled = false; 
                table.btn.classList.remove("yellow"); table.btn.classList.add("red");
                table.status = "collect";
                // setTimeout(()=> _angryCostumer(), 5000);
            }, 3000);
        } else {
            table.status = "free";
        }
}
const countdownTable = _countdownTable;

function _collectTable(table) {
    table.btn.disabled = false; 
    table.btn.classList.remove("yellow"); table.btn.classList.add("red");
}
const collectTable = _collectTable;



//Queue--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Dom*/
const spot0Html = document.getElementById("spot0");
const spot1Html = document.getElementById("spot1");
const spot2Html = document.getElementById("spot2");
const spot3Html = document.getElementById("spot3");
const spot4Html = document.getElementById("spot4");
const spot5Html = document.getElementById("spot5");
const spot6Html = document.getElementById("spot6");
const spot7Html = document.getElementById("spot7"); 
const queueHtmlArr = [spot0Html, spot1Html, spot2Html, spot3Html, spot4Html, spot5Html, spot6Html, spot7Html];
const spotsHtmlQueue = document.getElementById("queue");

/*Array*/
let queue = [];
function _advanceQueue() {
    spot0Html.innerHTML="";
    if (spot1Html.innerHTML) {
        spot0Html.innerHTML = spot1Html.innerHTML;
        spot1Html.innerHTML = "";
    }
    spot1Html.innerHTML="";
    if (spot2Html.innerHTML) {
        spot1Html.innerHTML = spot2Html.innerHTML;
        spot2Html.innerHTML = "";
    }
    spot2Html.innerHTML="";
    if (spot3Html.innerHTML) {
        spot2Html.innerHTML = spot3Html.innerHTML;
        spot3Html.innerHTML = "";
    }
    spot3Html.innerHTML="";
    if (spot4Html.innerHTML) {
        spot3Html.innerHTML = spot4Html.innerHTML;
        spot4Html.innerHTML = "";
    }
    spot4Html.innerHTML="";
    if (spot5Html.innerHTML) {
        spot4Html.innerHTML = spot5Html.innerHTML;
        spot5Html.innerHTML = "";
    }
    spot5Html.innerHTML="";
    if (spot6Html.innerHTML) {
        spot5Html.innerHTML = spot6Html.innerHTML;
        spot6Html.innerHTML = "";
    }
    spot6Html.innerHTML="";
    if (spot7Html.innerHTML) {
        spot6Html.innerHTML = spot7Html.innerHTML;
        spot7Html.innerHTML = "";
    }    
}
// function _advanceQueue() {
//     let counter= 0;
//     for (let i=0; i< 8; i++) {
//         let x = ("spot"+`${counter}`+"Html");
//         let y = ("spot"+`${counter+1}`+"Html");
//         x.innerHTML = y.innerHTML;
//         counter++;
//     }
//  }  
// function _clearQueue() {
//     clearInterval(queueInterval);
//     console.log("interval cleared");
// }
// const clearQueue = _clearQueue;


//Customers--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Array*/
const customersLooksArr = ['<img src="img/Customer0.png">','<img src="img/Customer1.png">', '<img src="img/Customer2.png">', '<img src="img/Customer3.png">', '<img src="img/Customer4.png">'];
/*Instances*/
const cust0 = new Customer(customersLooksArr[0]);
const cust1 = new Customer(customersLooksArr[1]);
const cust2 = new Customer(customersLooksArr[2]);
const cust3 = new Customer(customersLooksArr[3]);
const cust4 = new Customer(customersLooksArr[4]);
const people = [cust0, cust1, cust2, cust3, cust4];

/*function*/
function _randomNumGenerator(range){
    return Math.round(Math.random()*range);
}

//Timer------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Dom*/
const timer = document.getElementById("timer");
/*Function*/
let subsInt;
function _countdown(start, target) {
    function getTime() {
        let rest = Math.round(start % 60);
        function getMinutes() { return "0" + Math.floor(start / 60); }
        function getSeconds() {
            if (rest === 0) {
                return "00";
            } else {
                if (rest < 10) {
                    return "0" + rest;
                } else {
                    return rest;
                }
            }
        }
        return target.innerText = `${getMinutes()}:${getSeconds()}`;
    }
    function substract() {
        if (start >= 0) {
            getTime();
            start--;
        } else {
            clearInterval(subsInt);
            _drawGameOver("win");
            return;
        }
    }
    subsInt = setInterval(() => substract(), 1000);
}
let queueInterval;

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------


// GAME OVER SCREENS
const winSound = new sound ("sound/win.mp3", 0.8);
const loseSound = new sound ("sound/lose.mp3", 0.2);

function _drawGameOver(result) {
    console.log("game over");
    gameScreen.classList.remove("show"); gameScreen.classList.add("hide");
    if (result === "win") {
        winScreen.classList.remove("hide"); winScreen.classList.add("show"); patience.innerHTML === "-1"; tablesHtmlArr.forEach((spot) => spot.innerHTML = "");
        finalScoreWin.innerHTML = `Final score: ${score.innerHTML}`;
        backgroundSound.stop();
        winSound.play();
    } else if (result === "lose") {
        loseScreen.classList.remove("hide"); loseScreen.classList.add("show"); 
        finalScoreLose.innerHTML = `Final score: ${score.innerHTML}`;
        backgroundSound.stop();
        loseSound.play();
    }
}
function _hideWinScreen() {
    winScreen.classList.remove("show"); winScreen.classList.add("hide");
    console.log("hide win screen");
}
function _hideLoseScreen() {
    loseScreen.classList.remove("show"); loseScreen.classList.add("hide");
    console.log("hide lose screen");
}
    
const winScreen = document.getElementById("winScreen");
const loseScreen = document.getElementById("loseScreen");
const finalScoreWin = document.getElementById("showScoreWin");
const finalScoreLose = document.getElementById("showScoreLose");