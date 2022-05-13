import {
  Transaction,
  addIncome,
  addExpense,
  transfer,
  totalBalance,
  withdraw,
  deposit,
} from "./transaction.js";
import { User, users, createUser } from "./user.js";

let edcel = createUser(1000000001, "password", "edcel");
withdraw(edcel, 100); // -100
deposit(edcel, 200); // 100
addIncome(users, 200, 1000000001); // 300
console.log(result1, "result"); // 200
console.log(edcel); // 200
