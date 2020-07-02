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
