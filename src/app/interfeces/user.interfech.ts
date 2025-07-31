export interface IAddress {
  city: string;
  state: string;
  zip: number;
}

export interface Iuser {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
  addreess: IAddress;
  role: "user" | "admin";
}
