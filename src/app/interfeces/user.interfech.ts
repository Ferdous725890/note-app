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


export interface UserInstanceMethod {
  // haspassword(password: string): Promise<string>;
  haspassword(password: string): string
}
