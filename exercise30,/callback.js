
function operation(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}   
function subtract(a, b) {
    return a - b;
}   
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(operation(6, 5, add)); 
console.log(operation(10, 5, subtract));
console.log(operation(15, 5, multiply)); 
console.log(operation(20, 15, divide)); 