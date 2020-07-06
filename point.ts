//as soon as we add "export" keyword in a file, then this file becomes a module in TypeScript context
export class Point2 {
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