//assignment brainstorm
//objects incolded in card game of war
// - cards 
    // - face vs number ?? coming back
    // suits - clubs, spades, diamonds, hearts
    // value aces high
// deck
    // array of 52 cards
    // shuffle
    // deal
// game?
    // start game
// - players
    // 2 platers for assignment
    //points
// - Time ?


// set up to start automatically
// 1. set players, shuffle, deal cards, start 26 rounds, give points, end game
// alert(), console.log the game outcome.




// INHERITANCE



class Shape{
    toString(){
        return `${this.getType()} area-${this.getArea()}`;
    }
    getArea(){
        return 0;
    }
    getType() {
        return 'Shape'
    }
}

class Rectangle extends Shape
{
    constructor(h,w)
    {
        super();
        this.height = h;
        this.width = w;
    }
    getArea() {
        return this.height * this.width;
    }
    getType() {
        return 'Rectangle';
    }
}

class Square extends Rectangle
{
    constructor (size)
    {
        super(size, size);
    }
    getType(){
        return 'Square';
    }
}

class Triangle extends Shape {
    constructor (height, base)
    {
        super();
        this.height = height;
        this.base = base;
    }
    getArea() {
        return 0.5 * this.height * this.base;
    }
    getType() {
        return 'Triangle';
    }
}

let myRectangle = new Rectangle(3,5);
console.log(myRectangle.toString());

let mySquare = new Square(3);
console.log(mySquare.toString());

let myTriangle = new Triangle(3,5);
console.log(myTriangle.toString());

let shapes = [new Rectangle(3,5), new Square(3), new Triangle(3,5)]                                         







class Circle {
    static get PI() {return 3.14159}
    constructor (r)
    {
        this.radius = r;
        console.log(this.radius)
    }
    getArea() {
        return Circle.PI * this.radius * this.radius;
    }
    getCircumference() {
        return Circle.PI * 2 * this.radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
}


let Circle1 = new Circle(3);
console.log(Circle1.getArea());
console.log(Circle1.getCircumference());


