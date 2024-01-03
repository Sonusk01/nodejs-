const accountId = 144553
let acccountEmail = "sonu@example.com"
var acountPassword = "12345"
accountCity = "Ludhiana"

let accountState;

// accountId = 2 // not allowed

acccountEmail = "so@example.com"
acountPassword = "212121"
accountCity = "Jalandhar"

console.log(accountId);

/* 
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, acccountEmail, acountPassword, accountCity, accountState])