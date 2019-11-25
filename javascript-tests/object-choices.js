function loader() {
    const  =
        document.getElementById('feetToAction');
    const milesToFeetAction =
        document.getElementById('milesToFeetAction');
    const triangleAction =
        document.getElementById('areaOfTriangleAction');
    const circleAction =
        document.getElementById('areaOfCircleAction');

};


window.onload = loader();

const simpleObject = {
    sayName: function () {
        console.log("Simple object.");
    }
};

simpleObject.sayName();

simpleObject.dynamic = function () {
    console.log("dynamic method.");
}

simpleObject.dynamic();

// function constructor
function FunctionObject() {
    FunctionObject.prototype.proto = function () {
        return 'Function object';
    }
};

FunctionObject.prototype.dynamicProto = function () {
    return 'dynamic proto';
};


let obj = new FunctionObject();
console.log(obj.proto());
console.log(obj.dynamicProto());
console.log(obj.constructor.toString());


class custom {
    constructor(word) {
        this.word = word;
    }

    printMe() {
        console.log(this.word);
    }
};

let myWord = new custom("my word");
myWord.printMe();