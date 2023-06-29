class Account {
    open_Acc() {
        console.log("Account opened successfully")

    }
    deposite_Amount(){
        console.log("Amount deposied successfully")
    }
    get_balance(){
        console.log("Server Busy")
    }
    withdrawl(){
        console.log("Insuffient Balance")

    }
    get_statement(){
        console.log("charges apply")
    }
}
let a1=new Account()
console.log(a1)
a1.open_Acc()
a1.deposite_Amount()
a1.get_balance()
a1.withdrawl()
a1.get_statement()

