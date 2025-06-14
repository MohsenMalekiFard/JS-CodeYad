class BankAccount {
    #balance = 0;
    
    
    get balanced(){
        return ` $ ${this.#balance.toLocalString()}`;
    }
    
    set balanced(amount) {
        if (typeof amount !== 'number') {
            throw new Error("Value must is Number");
        }
        if (amount <0) {
            throw new Error("Value must is plus");
        }
        
        this.#balance = amount;
    }
}

const acount1 = new BankAccount();

acount1 = balanced=120;
console.log(acount1.balanced);
