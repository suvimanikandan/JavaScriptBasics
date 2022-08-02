console.log("hello");
alert("hello");
//var,let,const


//data types
//strings,numbers,boolean,null,undefined, 

const name='swetha';
const age=30;

//concatenation
console.log('myName is '+name+ ' and I am age'+age);

const s='Hello world';

console.log(s.length);
console.log(s.toLocaleUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.split(''));


const a='technology,computers,it,code';
console.log(a.split(','));

//arrays

/* multi 
line
commment*/
//arrays-variables that hold multiple values

const numbers=new Array(1,2,3,4,5);
console.log(numbers);

const fruits=['apples','oranges','pears'];
console.log(fruits[1]);

fruits.push('mangoes');
fruits.unshift('stawberries');

fruits.pop();

console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));
console.log(fruits);


const person={
    firstName:'swetha',
    lastname:'Venkatesan',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

person.email='john@gmail.com';
alert('person');
console.log(person);
console.log(person.firstName,person.lastname);
console.log(person.hobbies[1]);
console.log(person.address.city);

//






