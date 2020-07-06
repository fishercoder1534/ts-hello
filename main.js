"use strict";
exports.__esModule = true;
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
var Red = 0;
var Blue = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
console.log(backgroundColor);
var message2;
message2 = "abc";
var endsWithC = message2.endsWith('c'); //this is type assertion in TS
console.log(endsWithC);
// this is the traditional way of defining a function in JS
var logFunc1 = function (message) {
    console.log(message);
};
logFunc1("Hello from logFunc1");
// but in TS, we could use arrow functions like below
var logFunc2 = function (message) {
    console.log(message);
};
logFunc2("Hello from logFunc2");
// or even remove the curly brackets since there's only one line of logic for the function
var logFunc3 = function (message) { return console.log(message); };
logFunc3("Hello from logFunc3");
// or even remove the parenthesis for the paremeter, but this is not encouraged as it makes code less readable
var logFunc4 = function (message) { return console.log(message); };
logFunc4("Hello from logFunc4");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();
point.x = 1;
point.y = 2;
point.draw();
var point_1 = require("./point"); //it's not point.ts, but just point
var point2 = new point_1.Point2(3, 4);
point2.draw();
console.log("getX(): " + point2.getX());
console.log("Program finished.");
