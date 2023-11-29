const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet)
	}
	return second;
}

const newFunc = first();
newFunc();


// closures


//currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;


//Composing

const compose = (f, g) => (a) => f(g(a));


const sum = (num) => num + 1;
compose(sum, sum)(5);


// forEach
let array = [1,2,10,16];
const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);

//map, filter, reduce

const mapArray = array.map((num) => {
	return num * 2
});

console.log(mapArray);



const filterArray = array.filter(num => num > 5);


const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0);
console.log('reduce', reduceArray);





//ADVANCED OBJECTS-------------

//reference type
//context
// instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, and I'm a ${this.type}`)
	}
}


class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log(`WEEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');




































