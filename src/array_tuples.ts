interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

const fruits: string[] = ["apple", "mango", "banana"];

const nums: (number | string)[] = [12, 5, 4, 85, 7];
nums.push("4");
console.log(fruits);

const persons: Person[] = [];
persons.push({ firstName: "Rahul", lastName: "Negi" });
persons.push({ firstName: "Sandeep", lastName: "Negi", age: 26 });

console.log(persons);
