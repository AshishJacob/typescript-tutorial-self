interface Employee {
	name: string,
	age?: number,
	isWebDev: boolean,
	skills: string[],
	readonly company:string,
	[extraProps:string]:any	//Index Signature -- Additional Parameters
}

let emp1:Employee={
	name:"AshishJ",
	age:29,
	isWebDev:true,
	company:"Softeon",
	skills:["AngularJS","Angular","JQuery","TypeScript","Javascript"]
}

let emp2:Employee={
	name:"Sathish",
	isWebDev:false,
	company:"Softeon",
	skills:["Java","Javascript","Python"]
}

let emp3:Employee={
	name:"Lilford",
	isWebDev:true,
	company:"Softeon",
	skills:["AngularJS","Angular","JQuery","TypeScript","Javascript","Sencha","Java"],
	additionalSkills:"Uses Voice Something",
	specialPowers:"Mac"
}

//emp3.company = "Not Softeon"; //readonly will throw error

console.log("Interfaces");
console.log("Employee following Strict Parameters : ");
console.log(emp1);
console.log("Employee following Optional Parameters : ");
console.log(emp2);
console.log("Employee following Additional Parameters : ");
console.log(emp3);

console.log("Interfaces With Functions");

interface InitEmployeeName{
	(name: Employee,
	letter: string) : boolean;
}

let startsWith: InitEmployeeName = function(employee: Employee, letter: string) {
    return  (employee.name.indexOf(letter)==0)
}

interface InitName{
	(name: string,
	letter: string) : boolean;
}
let startsWithChar: InitName = function(name: string, letter: string) {
    return  (name.indexOf(letter)==0)
}

console.log(" startsWith B "+startsWith(emp1, "B"));
console.log(" startsWith A "+startsWith(emp1, "A"));

console.log(" startsWithChar B "+startsWithChar(emp1.name, "B"));
console.log(" startsWithChar A "+startsWithChar(emp1.name, "A"));
