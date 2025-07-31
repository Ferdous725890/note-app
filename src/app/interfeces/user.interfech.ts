export interface Iuser {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
  role: "user" | "admin";
}
