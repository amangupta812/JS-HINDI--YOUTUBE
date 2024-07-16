const account_ID = 14334 // we can't change the value 
let accountEmail = "amanku0036@gmail.com" //we can change the value
var accountPassword = "123456"
accountcity = "Saran" 
let accountStatus;

// account_ID = 2  //not allowed
console.log(account_ID);

accountEmail = "aman09@gmail.com"
accountPassword = "09876"

console.table([account_ID,accountEmail,accountPassword , accountStatus]);

/*
prefer not to uses var 
because of issue in block scopr{} and
functional scope
*/