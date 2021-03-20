class Table {
    constructor() {
        this.number = 0;
        this.status = 'free';
        this.assignedCostumer = undefined;
    }

    _changeTableStatus(){
        switch (this.status) {
            case 'free':
                this.status = 'countdown';
                break;
            case 'countdown':
                setTimeout(this._collect(), 10000);
                this.status = 'collect';
                console.log(this.status);
                break;
            case 'collect':
                this.status = 'free';
                console.log(this.status);
                break;
        }
    }
    
    _collect() {
        console.log(this.status);
        this._changeTableStatus();
        console.log(this.status);
    }
}