# _Restaurant madness_, a challenge for your taste buds and your attention!
The purpose of the game is to successfully finish a lunch session at your restaurant. You will play as the _mâitre_, the waiter and _le cashier_. Keep the costumers happy so that they leave good reviews of our restaurant on TripAdvisor! 

The game screen is an interface of the restaurant where you can see the tables and the client queue. 

The **player** is responsible for assigning customers to the tables and stay alert to when they finish eating and want to pay. This is important, since making the costumers wait for payment can make them angry! 

The **costumers** come to the restaurant, are assigned a seat, they eat and they pay. Customer satisfaction is very relevant to win the game. We must be quick in collecting the bills from the customers that have finished their lunch, and try to avoid long queues.

The game ends when the lunch time is finished (5 minutes), and it can be either a succesful service or a disaster. Each one implies a different "reward", which includes the player's name on it.
- A **success trophy** is handled at game over when lunch time has finished without angry costumers. 
- A **disaster sticker** is received when the queue was too long or the waiter was too slow. 

* * *
## MVP
### Technique
HTML5 __Canvas__, __¿DOM?__ and Vanilla __Javascript__

### Game states
* __Start Screen__
  * Title
  * Play button
  * How to play button
* __Game Screen__
  * Queue
  * Customers
  * Tables
  * Assign customer button
  * Collect button
* __Game Over - Win Screen__
  * Play again button
* __Game Over - Lose Screen__
  * Play again button
### Game
* Random customers arrive and appear on the queue
* Empty tables have buttons to assign customers from queue
* When player clicks on the table buttons, a table is assigned to the first costumer from the queue
* Once table is assigned, eating countdown begins and table button displays time left, disabling button
* Once countdown is finished, table button displays "Collect"
* Click on collect to get the bill and clear the table
  * If >10s pass after collect button is activated, costumer status changes to angry and Game Over is displayed
  * If max length of queue is achieved,  Game Over is displayed
* If 5 minutes pass without angry costumers or long queues, Win screen is displayed
* From both win/game over screens, player can go back to main screen
* * *
## Data structure
__main.js__
````
displayStartScreen(id);
displayGameScreen(id);
displayGameOverWinScreen(id);
displayGameOverLoseScreen(id);
hideStartScreen();
hideGameScreen();
hideGameOverWinScreen();
hideGameOverLoseScreen();
class Game {
    constructor() {
        this.queue;
        this.table1 = {
            status: empty/eating/finished;
        }
        this.table2 = {
            status: empty/eating/finished;
        }
        this.table3 = {
            status: empty/eating/finished;
        }
        this.table4 = {
            status: empty/eating/finished;
        }
    }
    start();
}
var game = new Game();
game.start();
````
__Game.js__
````
function drawBoard(){};
function drawCostumer(){};
function displayAssignButton(){};
function displayTimer(){};
function collectBill(){};
function removeFromQueue();
function addToTable();
function editQueue();
function assignCostumer(){
    removeFromQueue(); 
    addToTable(); 
    editQueue();
}
````# Pepito-goes-to-the-restaurant
# Pepito
