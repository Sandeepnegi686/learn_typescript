function identify<T>(data: T) {
  return data;
}

const val1 = identify<string>("Hello");
const val2 = identify(5) as number;

// console.log(typeof val2.toString());

function identifyWithConstraints<T extends string | number>(data: T): T {
  return data;
}

// console.log(identifyWithConstraints("true"));
identifyWithConstraints(5);

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// console.log(getFirstElement<string>(["as", "wd", "ws"]));
// console.log(getFirstElement<number>([54, 26, 85, 14]));
// console.log("hello" as number);

function putValue<K, V>(val1: K, val2: V): [K, V] {
  return [val1, val2];
}

// console.log(putValue<string, number>("abc", 55));

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: false;
}
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData<T>(url: string): Promise<T[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Something went wrong");
  const data = res.json();
  return data;
}

getData<Todo>("https://jsonplaceholder.typicode.com/todos").then((data) => {
  const titles = data.map((item) => item.title);
  // console.log(titles);
});
getData<Post>("https://jsonplaceholder.typicode.com/posts").then((data) => {
  const titles = data.map((item) => item.body);
  // console.log(titles);
});

type GEO = { lat: string; lng: string };
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GEO;
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type ParticalUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadOnlyUser = Readonly<User>;

const u1: ParticalUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  // asd: "sdf",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const u2: RequiredUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const u3: ReadOnlyUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
// u3.name = "";
type Roles = "admin" | "editor" | "user";
type UserRoles = Record<Roles, string>;

const getUser = () => ({ id: 1, name: "Rahul" });
type UserType = ReturnType<typeof getUser>;
