class EmployeeClass {
	private name: string;
	protected company: string;

	constructor(thisName:string){
		this.name=thisName;
	}

	introFunc(){
		console.log(`Hi My Name is... Hi My Name is... Chikka Chikka ${this.name}`);
	}

}

class Manager extends EmployeeClass{
	private age:number;

	constructor(thisName:string,company:string,age:number){
		super(thisName);
		this.company = company;
		this.age = age;
	}

	getAge(){
		console.log(`I am a ${this.age} Y.O. I work in ${this.company}`);
	}
}

let emp = new EmployeeClass("Slim Shady"); 
emp.introFunc();

let mgr = new Manager("Dr Dre", "Softeon", 100); 
mgr.introFunc();
mgr.getAge();

//emp.name = "Marshall"; //Private members cannot be assigned
//emp.introFunc();
