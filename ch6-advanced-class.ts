console.log("Pizza STATIC METHOD - NO INSTANCE ");

class PizzaStaticClass {
	/*
		It has a static method called create
		Use it without creating an instance of the class
	*/

	static create(event: { name:string, toppings:string[] }){
		return {name:event.name, toppings:event.toppings};
	}
}


let pizza = PizzaStaticClass.create({name:"Pineapple",toppings:["Pineapple","Death"]});
console.log(pizza);

console.log("--------------------------------------------");
console.log("Pizza NO STATIC - INSTANCE - CONSTRUCTOR");

class PizzaClass {
	name:string;
	toppings:string[];

	constructor(name:string, toppings:string[]){
		this.name=name;
		this.toppings=toppings;
	}

	create(event: { name:string, toppings:string[] }){
		return {name:event.name, toppings:event.toppings};
	}

	create2(){
		return {name:this.name, toppings:this.toppings};
	}
}

let pizza2 = new PizzaClass("Sicilian", ["Mozzarella", "Olive Oil", "Tomato Sauce"]);
console.log(pizza2.create({name:"Marinara",toppings:["Cheese", "Olive Oil", "Garlic", "Tomatoes"]}));
console.log(pizza2.create2());

console.log("--------------------------------------------");
console.log("Pizza INTERFACE");

interface PizzaInterface{
	name:string;
	toppings?:string[];
	done?:boolean;
}

class PizzaMaker {
	static create(event: PizzaInterface):PizzaInterface {
		let cookPizza:PizzaInterface = {
			name:event.name,
			toppings:event.toppings,
			done:true
		}
		return cookPizza;
	}
}
let pizza3:PizzaInterface = {
	name:"Margherita",
	toppings:["Tomatoes", "Mozzarella", "Olive Oil", "Fresh Basil"]
};
console.log(PizzaMaker.create(pizza3));


console.log("--------------------------------------------");
console.log("Pizza Class SETTERS GETTERS");

class PizzaOven {
	private name:string;
	private toppings?:string[];
	private done?:boolean;

	constructor(name:string){
		this.name=name;
	}

	setToppings(toppings:string[]){
			this.toppings=toppings;
	}

	private setDone(){
		this.done=true;
	}
	create():PizzaInterface {
		this.setDone();
		let cookPizza:PizzaInterface = {
			name:this.name,
			toppings:this.toppings,
			done:this.done
		}
		return cookPizza;
	}
}
var pizzaOven = new PizzaOven("California");
pizzaOven.setToppings(["Barbecue", "Mustard", "Ricotta", "Red Pepper"]);
console.log(pizzaOven.create());

console.log("--------------------------------------------");
