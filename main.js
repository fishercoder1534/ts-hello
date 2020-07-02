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
