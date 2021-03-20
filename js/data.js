//SPLASH SCREEN
const startBtn = document.getElementById("startBtn");
const title = document.getElementById("title");
const splashScreen = document.getElementById("splashScreen");
function _hideSplashScreen() {splashScreen.classList.remove("show"); splashScreen.classList.add("hide");}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------



//GAME SCREEN
//General--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function _drawGame() {
    _hideSplashScreen();
    _drawGameScreen();
}
function _drawGameScreen() {gameScreen.classList.remove("hide"); gameScreen.classList.add("show");}
const gameScreen = document.getElementById("gameScreen");

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
const spotsHtmlArr = [spot0Html, spot1Html, spot2Html, spot3Html, spot4Html, spot5Html, spot6Html, spot7Html];
const spotsHtmlQueue = document.getElementById("queue");

/*Array*/
const queue = [];

//Customers--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Array*/
const customersLooksArr = ['"<img src="img/Customer0.png">','"<img src="img/Customer1.png">', '"<img src="img/Customer2.png">', '"<img src="img/Customer3.png">', '"<img src="img/Customer4.png">'];
/*Instances*/
const cust0 = new Customer(customersLooksArr[0]);
const cust1 = new Customer(customersLooksArr[1]);
const cust2 = new Customer(customersLooksArr[2]);
const cust3 = new Customer(customersLooksArr[3]);
const cust4 = new Customer(customersLooksArr[4]);
/*function*/
function _randomNumGenerator(range){
    return Math.round(Math.random()*range);
}

//Timer------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Dom*/
const timer = document.getElementById("timer");
/*Function*/
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
            return;
        }
    }
    let subsInt = setInterval(() => substract(), 1000);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------



// GAME OVER SCREENS
function _GameOver(){
    gameScreen.classList.remove("show"); gameScreen.classList.add("hide");
    winScreen.classList.remove("hide"); winScreen.classList.add("show");
}
const winScreen = document.getElementById("winScreen");