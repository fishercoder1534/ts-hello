"use strict";
exports.__esModule = true;
exports.Point2 = void 0;
//as soon as we add "export" keyword in a file, then this file becomes a module in TypeScript context
var Point2 = /** @class */ (function () {
    // we don't need to explicitly declare fields in a class, TS will compile them based on the constructor we define
    function Point2(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    Point2.prototype.getX = function () {
        return this.x;
    };
    return Point2;
}());
exports.Point2 = Point2;
