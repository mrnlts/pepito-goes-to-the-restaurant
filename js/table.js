class Table {
    constructor(assignedCostumer) {
        this.number = 0;
        this.status = 'free';
        this.assignedCostumer = assignedCostumer;
    }

    

    _collect() {
        console.log(this.status[0]);
        this._changeTableStatus();
        console.log(this.status[0]);
    }
}