
console.log("imediate fetch");

function getUserData(callback) {
  
        setTimeout(() => {
            const user = {id: 1, name: "John Doe"};   
            callback(user);
        }, 2000);
    };


console.log("starting to fetch user data");
    getUserData(function(user) {
    console.log("user:", user);
});

console.log("this message shows up immediately ");