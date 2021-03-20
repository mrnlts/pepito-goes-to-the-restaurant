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

/*Event Listeners*/
table0.btn.addEventListener("click", () => {console.log('table0 = ' + table0.status); table0._changeTableStatus();});
table1.btn.addEventListener("click", () => {console.log('table1 = ' + table1.status); table1._changeTableStatus();});
table2.btn.addEventListener("click", () => {console.log('table2 = ' + table2.status); table2._changeTableStatus();});
table3.btn.addEventListener("click", () => {console.log('table3 = ' + table3.status); table3._changeTableStatus();});

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
/*Array*/
const queue = [];

//Customers--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Instances*/
const cust0 = new Customer();
const cust1 = new Customer();
const cust2 = new Customer();
const cust3 = new Customer();
const cust4 = new Customer();
/*Array*/
const customersLooksArr = ["img/Customer0.png","img/Customer1.png","img/Customer2.png","img/Customer3.png", "img/Customer4.png"];
//Timer
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