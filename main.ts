function logMsg(message) {
    console.log(message);
}

var message = 'Hello World';

logMsg(message);

function doThis() {
    var i = 0;
    for (; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doThis();

const Red = 0;
const Blue = 1;

enum Color {
    Red,
    Blue,
}

let backgroundColor = Color.Red;

console.log(backgroundColor)


let message2;
message2 = "abc";
let endsWithC = (<string>message2).endsWith('c');//this is type assertion in TS
console.log(endsWithC);




// this is the traditional way of defining a function in JS
let logFunc1 = function(message) {
    console.log(message);
}
logFunc1("Hello from logFunc1");

// but in TS, we could use arrow functions like below
let logFunc2 = (message) => {
    console.log(message);
}
logFunc2("Hello from logFunc2");

// or even remove the curly brackets since there's only one line of logic for the function
let logFunc3 = (message) => console.log(message);
logFunc3("Hello from logFunc3");

// or even remove the parenthesis for the paremeter, but this is not encouraged as it makes code less readable
let logFunc4 = message => console.log(message);
logFunc4("Hello from logFunc4");



class Point {
    x: number;
    y: number;

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

}

let point = new Point();
point.draw();
point.x = 1;
point.y = 2;
point.draw();

class Point2 {
// we don't need to explicitly declare fields in a class, TS will compile them based on the constructor we define
    constructor(private x?: number, private y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getX() {
        return this.x;
    }
}

let point2 = new Point2(3, 4);
point2.draw();
console.log("getX(): " + point2.getX());





console.log("Program finished.");