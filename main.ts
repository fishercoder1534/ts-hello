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







console.log("Program finished.");