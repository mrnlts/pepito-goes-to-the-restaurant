class Table {
    constructor(assignedCostumer) {
        this.number = 0;
        this.status = 'free';
        this.assignedCostumer = assignedCostumer;
    }

    _changeTableStatus(){
        switch (this.status) {
            case 'free':
                _assignCustomerToTable(this);
                this.status === 'countdown';
                break;
            case 'countdown':
                setTimeout(this._collect(), 10000);
                this.status === 'collect';
                console.log(this.status);
                break;
            case 'collect':
                this.status === 'free';
                console.log(this.status);
                break;
        }
    }

    _collect() {
        console.log(this.status[0]);
        this._changeTableStatus();
        console.log(this.status[0]);
    }
}