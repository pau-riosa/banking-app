/*
 * User
 * mobile - unique + 11 digits
 * password - string
 * fullname - string
 * balance - number
 * incomes - [] of Transaction of Income
 * expenses - [] of Transaction of Expense
 */

export let users = [];
export function User(mobile, password, fullname, isAdmin = false) {
  this.mobile = mobile;
  this.password = password;
  this.fullname = fullname;
  this.isAdmin = isAdmin;
  this.balance = 0;
  this.incomes = [];
  this.expenses = [];
}

// create user
// find user
// if exisiting, return an error
// if not, add to the list
// and then return user
export function createUser(mobile, password, fullname, isAdmin = false) {
  let found = users.find((u) => u.mobile === mobile);

  if (found) return undefined;

  let user = new User(mobile, password, fullname, isAdmin);
  users.push(user);
  return user;
}

export function login(mobile, password) {
  let found = users.find((u) => u.mobile === mobile);

  if (!found) return undefined;
  if (!found || !found.mobile === mobile || !found.password === password)
    return undefined;
  return found;
}

export function register(mobile, password, fullname) {
  let user = createUser(mobile, password, fullname);

  if (user !== undefined) console.info("error");
  else console.error("error");
}
