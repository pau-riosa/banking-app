import {
  Transaction,
  addIncome,
  addExpense,
  transfer,
  totalBalance,
  withdraw,
  deposit,
} from "./js/transaction/index.js";
import { User, users, createUser } from "./js/user/index.js";

let edcel = createUser(1000000001, "password", "edcel");
withdraw(edcel, 100); // undefined
deposit(edcel, 200); // 200
addIncome(users, 200, 1000000001); // 400
addExpense(users, 100, 1000000001); // 300
console.log(edcel); // 200
