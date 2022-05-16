import { createUser } from "./user/index.js";

let data = [
  {
    fullname: "admin",
    mobile: 1000,
    password: "admin",
    isAdmin: true,
  },
  {
    fullname: "user-1",
    mobile: 1001,
    password: "password",
    isAdmin: false,
  },
  {
    fullname: "user-2",
    mobile: 1002,
    password: "password",
    isAdmin: false,
  },
  {
    fullname: "user-3",
    mobile: 1003,
    password: "password",
    isAdmin: false,
  },
  {
    fullname: "user-4",
    mobile: 1004,
    password: "password",
    isAdmin: false,
  },
  {
    fullname: "user-5",
    mobile: 1005,
    password: "password",
    isAdmin: false,
  },
  {
    fullname: "user-6",
    mobile: 1006,
    password: "password",
    isAdmin: false,
  },
];

export function loadData() {
  data.forEach((d) => {
    return createUser(d.mobile, d.password, d.fullname, d.isAdmin);
  });
}
