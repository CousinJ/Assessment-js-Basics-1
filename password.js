/*
Welcome the user to the password validator tool

Prompt the user for a password to validate

Check if the user’s password meets the following constraint:

At least 10 characters long

If the user’s password meets the constraint, show a success message to the user

If the user’s password fails the constraint, show a failure message to the user
*/
//CODE//
console.log('Weclome to The Password Validator Tool')
let ps = require("prompt-sync")
const prompt = ps();
let password = prompt("Password:")


if(password.length >= 10) {
    console.log("Password successfully validated")
    console.log(`
    ________                  .___      ____.________ __________._.
   /  _____/  ____   ____   __| _/     |    |\_____  \\______   \ |
  /   \  ___ /  _ \ /  _ \ / __ |      |    | /   |   \|    |  _/ |
  \    \_\  (  <_> |  <_> ) /_/ |  /\__|    |/    |    \    |   \\|
   \______  /\____/ \____/\____ |  \________|\_______  /______  /__
          \/                   \/                    \/       \/ \/
  `)
} else {
    console.log("Password validation failed; Must be over 10 characters long.")
    console.log(`
                            
    ____   ____ ______  ______
   /  _ \ /  _ \\____ \/  ___/
  (  <_> |  <_> )  |_> >___ \ 
   \____/ \____/|   __/____  >
                |__|       \/ 
  `)
}

console.log(password.length)


  
 
