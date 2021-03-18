class Game {
    constructor() {
        this.table0 = new Table();
        this.table1 = new Table();
        this.table2 = new Table();
        this.table3 = new Table();
        this.terrace = [this.table0, this.table1, this.table2, this.table3];

        this.spot0 = new Spot();
        this.spot1 = new Spot();
        this.spot2 = new Spot();
        this.spot3 = new Spot();
        this.spot4 = new Spot();
        this.spot5 = new Spot();
        this.spot6 = new Spot();
        this.spot7 = new Spot();
        this.queue = [this.spot0, this.spot1, this.spot2, this.spot3, this.spot4, this.spot5, this.spot6, this.spot7];
        
        this.cust0 = new Customer();
        this.cust1 = new Customer();
        this.cust2 = new Customer();
        this.cust3 = new Customer();
        this.cust4 = new Customer();
        this.customers = [this.cust0, this.cust1, this.cust2, this.cust3, this.cust4];
    }

    start(){
        console.log("The game has started");
    }
}