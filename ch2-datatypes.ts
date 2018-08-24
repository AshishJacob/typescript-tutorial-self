let a: string = "a is  a string";
let b: number = 100;
let c: boolean = true;
let d: null = null;
let e: string = ` ${a},
  b is a number type - ${b},
  c is a boolean type -  ${c},
  d is a null type -  ${d},
  and e i.e. I is also a string aka template string or template literal `;

console.log("DATATYPES");
console.log(e);


let f: number[] = [10,20,30];
let g: string[] = ["a","b","c"];
let h: Array<string> = ["h1","h2","h3"];

console.log("ARRAY");
console.log(f);
console.log(g[1]);
console.log(h[2]);

let i: [number, string] = [105, "owl"];
let j: [string, number] = ["bat", 2];

console.log("TUPLES ARRAY");
console.log(i);
console.log(j);

enum k {ALPHA, BETA, GAMMA, OMEGA}
let l:k = k.ALPHA;
let m:string = k[3];

console.log("ENUM");
console.log(k);
console.log(l);
console.log(m);

let n: any = "Any String";
let o: any = 123456;

function stuck(): never {
  console.log("NEVER RETURNS AND I WILL RUN FOR...");
  while (true) {
      console.log("...EVA");
  }
};

console.log("ANY and NEVER");
console.log(n);
console.log(o);
// console.log(stuck());
