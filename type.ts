//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);


//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("Decimal: " + decimal + " Hex: " + hex + " Binary: " + binary + " Octal: " + octal);

//String
let color: string = "blue";
console.log("Color is: " + color);
color = 'red';
console.log("Color is: " + color);

//array
let list: number[] = [1, 2, 3];
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);

//any 
int notSure: any = 4;
notSure = "maybe a string instead";
console.log("Value is a string: " + notSure + ".");
notSure = false;
console.log("Now value is a boolean: " + notSure + ".");

