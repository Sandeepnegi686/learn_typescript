interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

const fruits: string[] = ["apple", "mango", "banana"];

const nums: (number | string)[] = [12, 5, 4, 85, 7];
nums.push("4");
// console.log(fruits);

const persons: Person[] = [];
persons.push({ firstName: "Rahul", lastName: "Negi" });
persons.push({ firstName: "Sandeep", lastName: "Negi", age: 26 });

// console.log(persons);

// const numbers: readonly number[] = [12, 4, 57, 98, 57];
// numbers.join("");
// numbers.push();
// console.log(numbers);

type arrTuple = [string, string, number];
const arr: arrTuple = ["rahul", "negi", 26];
// console.log(arr);
// console.log(typeof arrTuple);
