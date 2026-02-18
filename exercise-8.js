let car={
    make :"toyota",
    model :"rav4",
    year : 2002,

    start : function(){
        console.log("the car has started", this.model);
    }
}
console.log(car);
console.log(car.make);
console.log(car.model);
console.log(car.year);

console.log(car.start());