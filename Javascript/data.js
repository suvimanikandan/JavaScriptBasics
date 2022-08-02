
//constructor function
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;

}

//instiate object
const person1=new Person('john','Doe','4-3-1980');
console.log(person1)

const person2=new Person('Mary','Smith','3-8-2001');
console.log(person2.firstName);

