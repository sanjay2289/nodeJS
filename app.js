/*
const trainerModule = require('./trainer');

let trainerObj = new trainerModule.Trainer('anil', 1, 'Node JS');
let info = trainerObj.print();
console.log(info)
*/

function success(user) {
    console.log(user);
}

function failure(errorMessage) {
    console.log(errorMessage)
}

const callbackModule = require('./callback');
callbackModule.getUser(3, success, failure);