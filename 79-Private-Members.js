class Wallet{
    #money;
    
    constructor(){
        this.#money = 0;
    }
    
    getBalance() {
        return this.#money;
    }
    
    add(amount) {
        if(amount <= 0){
            throw new Error("Value Must Plus")
        }
        this.#money += amount;
    }
    
    spend(amount) {
        if(amount > this.#money) {
            throw new Error("Not Money");
        }
        this.#money -= #money;
    }
    
    #transactionHistory(){
        
    }
}

//const MohsenWallet = new Wallet();

//console.log(MohsenWallet.getBalance());

//MohsenWallet.add(100);

//console.log(MohsenWallet.getBalance());

//MohsenWallet.spend(10);

//console.log(MohsenWallet.getBalance());

console.log(MohsenWallet.money);  //undefine
console.log(MohsenWallet.transactionHistory());
