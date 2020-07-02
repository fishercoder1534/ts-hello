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
var logFunc4 = function (message) { return console.log(message); };
logFunc4("Hello from logFunc4");
console.log("Program finished.");
