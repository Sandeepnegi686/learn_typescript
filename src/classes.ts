class Animal {
  name: string;
  age: number;
  readonly species: string;
  private ishungry: boolean;
  protected myData: string = "hello";
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.ishungry = true;
  }
  get hungry(): string {
    return this.ishungry
      ? `${this.name} is hungry`
      : `${this.name} is not hungry`;
  }
  hungry2(): string {
    return this.ishungry
      ? `${this.name} is hungry`
      : `${this.name} is not hungry`;
  }
  set feed(food: string) {
    console.log(`${this.name} eated ${food}.`);
    this.ishungry = false;
  }
}

class Dog extends Animal {
  breed: string;
  skills: string[];
  constructor(name: string, age: number, breed: string, skills: string[]) {
    super(name, age, "Dog");
    this.breed = breed;
    this.skills = skills;
  }
  getProtectedData(): void {
    console.log(this.myData);
  }
}

// const a1 = new Animal("Tom", 8, "Dog");
// const a2 = new Dog("Lucy", 15, "labra", ["jumping", "walking"]);
// console.log(a2.hungry);
// a2.feed = "biscuits";
// a2.getProtectedData();

interface PersonType {
  name: string;
  age: number;
}

abstract class Persons implements PersonType {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  abstract getInfo(): void;
}

class Student extends Persons {
  constructor(public name: string, public age: number) {
    super(name, age);
  }
  getInfo(): void {
    console.log("Hello myself", this.name, "and my age is", this.age);
  }
}

const s1 = new Student("Rahul", 26);

// console.log(s1);
// s1.getInfo();
