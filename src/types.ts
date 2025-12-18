type Age = number;

interface Address {
  houseNo?: string;
  street?: string;
  area?: string;
  landmark?: string;
  pincode?: string;
}

export interface Person {
  firstName: string;
  lastName: string;
  age?: Age;
  address: Address;
}
