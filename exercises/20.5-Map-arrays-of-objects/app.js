let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
   // let diff = Date.now() - person.birthDate.getTime();
   // const ageDate = new Date(diff);
   //let today = new Date();
   // let year = today.getFullYear();
    let birth = person.birthDate.getUTCFullYear();
    let age = 2017 - birth;

	 return `Hello, my name is ${person.name} and I am ${age} years old`;
};

console.log(people.map(simplifier));