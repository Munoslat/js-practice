
const numbers = [1, 2, 3];

const allnumbers = [...numbers, 4, 5, 6];

console.log(allnumbers);

function multiply (...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(20, 30, 4, 5));