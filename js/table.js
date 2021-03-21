class Table {
    constructor(btn, status) {
        this.number = 0;
        this.status = status;
        this.btn = btn;
        this.assignedCustomer = undefined;
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