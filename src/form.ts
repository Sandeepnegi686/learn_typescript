function combine(a: number, b: number, c: "add" | "concat"): string | number {
  if (c == "add") {
    return a + b;
  }
  return "" + a + b;
}

const len: number = combine(2, 3, "add") as number;
const data: string = combine(2, 3, "concat") as string;

// console.log(len);
// console.log(data);

const nameBox = document.getElementById("name")! as HTMLInputElement;
const ageBox = document.getElementById("age")! as HTMLInputElement;
const form = document.getElementById("form")! as HTMLElement;

const list = document.getElementById("list")!;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameBox.value;
  const age: number = +ageBox.value;

  list.innerHTML = `<p>${name} : ${age}</p>`;
});
