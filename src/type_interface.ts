import { Person as BasePerson } from "./types";

interface Person extends BasePerson {
  adult: boolean;
}

const p1: Person = {
  firstName: "Rahul",
  lastName: "Negi",
  address: {
    houseNo: "1",
    street: "bundi road",
    area: "kamla udhyan",
    landmark: "allen",
    pincode: "324008",
  },
  adult: true,
};

// console.log(p1);
