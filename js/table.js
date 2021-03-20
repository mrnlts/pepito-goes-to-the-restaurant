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
                this.status = 'collect';
                break;
            case 'collect':
                this.status = 'free';
                break;
        }
    }
}