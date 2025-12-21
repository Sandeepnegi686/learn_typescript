function add(a: number, b: number): string {
  return a + " " + b;
}

const ans: string = add(5, 8);

// console.log(ans);

function greet(name?: string): void {
  console.log(`Hello ${name ?? "guest"}`);
}

function greet2(name: string = "guest"): void {
  console.log(`hello ${name}`);
}

// greet("rahul");
// greet();

// greet2("rahul");

function throwError(message: string): never {
  throw new Error(message);
}

//function overloading
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;

// function combine(a: number | string, b: number | string): number | string {
//   if (typeof a == "number" && typeof b == "number") {
//     return a + b;
//   } else if (typeof a == "string" && typeof b == "string") {
//     return a + " " + b;
//   } else {
//     throwError("invalid parameters");
//   }
// }
// console.log(combine(2, 3));
// console.log(combine("hello", "world"));
// console.log(combine("hello", 9));

function greet4(): void;
function greet4(name: string): void;

function greet4(name?: string): void {
  console.log(`Hello ${name ?? "user"}`);
}

// greet4();
// greet4("rahul");
