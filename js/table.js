class Table {
    constructor() {
        this.number = 0;
        this.status = ['free'];
        this.btn = [];
    }
    _draw(){
        console.log("table is drawn");
    }

    _changeTableStatus(){
        if (this.status[0] == 'free') {
            this._assignCustomerToTable();
            this.status.pop();
            this.status.push('countdown');
        } else if (this.status[0] == 'countdown') {
            setTimeout(this._collect(), 10000);
            this.status.pop();
            this.status.push('collect');
        } else if (this.status[0] == 'collect') {
            this.status.pop();
            this.status.push('free');
        }
    }

    _assignCustomerToTable() {
        console.log(this.status[0]);
        let customer = new Customer();
        this._changeTableStatus();
        console.log(this.status[0]);
        setTimeout(_collect(this), 100000);
    }

    _collect() {
        console.log(this.status[0]);
        this._changeTableStatus();
        console.log(this.status[0]);
    }
}