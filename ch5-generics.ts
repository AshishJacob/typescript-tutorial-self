function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}
 
let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor: string = randomElem(colors);

console.log(colors);
console.log("random>"+ randomElem(colors));
console.log("random>"+ randomElem(colors));
console.log("random>"+ randomElem(colors));
console.log("random>"+ randomElem(colors));
console.log("random>"+ randomElem(colors));
console.log("random>"+ randomElem(colors));
console.log("random>"+ randomElem(colors));