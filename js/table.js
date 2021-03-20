class Table {
    constructor(btn) {
        this.number = 0;
        this.status = 'free';
        this.btn = btn;
        this.assignedCostumer = undefined;
    }

    _changeTableStatus(){
        switch (this.status) {
            case 'free':
                this.status = 'countdown';
                break;
            case 'countdown':
                // setTimeout(this._collect(), 10000);
                this.status = 'collect';
                break;
            case 'collect':
                this.status = 'free';
                break;
        }
    }
    
    _collect() {
        console.log(this.status);
        this._changeTableStatus();
        console.log(this.status);
    }
}