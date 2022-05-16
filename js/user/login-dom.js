import { createUser, login } from "./index.js";
import { loadData } from "../helper.js";

let loadBtn = document.querySelector("#load-data-btn");
const loginBtn = document.querySelector("#login-btn");
const loginSection = document.querySelector("section.login");
const adminDashboardSection = document.querySelector("section.admin-dashboard");
const userDashboardSection = document.querySelector("section.user-dashboard");
const mobile = document.querySelector("#mobile");
const password = document.querySelector("#password");

loadBtn.onclick = function (e) {
  e.preventDefault();
  loadData();
};

loginBtn.onclick = function (e) {
  e.preventDefault();

  let result = login(mobile.value, password.value);
  if (result !== undefined && result.isAdmin)
    window.location = "./admin-dashboard.html";
  if (result !== undefined && result.isAdmin === false)
    window.location = "./user-dashboard.html";
};
