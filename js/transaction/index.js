/*
 * Transaction
 * id: random-number
 * type: income/expense string
 * amount: number
 */
export function Transaction(type, amount) {
  this.id = Math.floor(100000 + Math.random() * 900);
  this.type = type;
  this.amount = amount;
}

export function addIncome(users, amount, mobile) {
  let found = users.find((user) => user.mobile === mobile);

  if (!found) return undefined;

  let income = createIncome("income", amount);
  found.balance += amount;
  found.incomes.push(income);
  return found;
}

export function addExpense(users, amount, mobile) {
  let found = users.find((user) => user.mobile === mobile);

  if (!found) return undefined;
  if (found.balance === 0) return undefined;

  let expense = createExpense("expense", amount);
  found.balance -= amount;
  found.expenses.push(expense);
  return found;
}

// create income
export function createIncome(type, amount) {
  if (!["income", "deposit"].includes(type)) return undefined;
  return new Transaction(type, amount);
}

// create expense
export function createExpense(type, amount) {
  if (!["expense", "withdraw"].includes(type)) return undefined;
  return new Transaction(type, amount);
}

// deposit
export function deposit(user, amount) {
  let income = createIncome("deposit", amount);
  user.incomes.push(income);
  user.balance += amount;
  return user;
}

// withdraw
export function withdraw(user, amount) {
  if (user.balance === 0) return undefined;
  let expense = createExpense("withdraw", amount);
  user.expenses.push(expense);
  user.balance -= amount;
  return user;
}

// compute total balance
export function totalBalance(users, mobile) {
  let user = users.find((u) => u.mobile === mobile);

  if (!user) return undefined;

  let totalIncome = user.incomes.reduce(
    (partialSum, income) => partialSum + income.amount,
    0
  );
  let totalExpense = user.expenses.reduce(
    (partialSum, expense) => partialSum + expense.amount,
    0
  );
  user.balance = user.balance + totalIncome - totalExpense;

  return user;
}

export function transfer(from, to, amount) {
  from.balance -= amount;
  to.balance += amount;

  return "Transferred";
}
