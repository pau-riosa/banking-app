import { login } from "./index.js";

const loginBtn = document.querySelector("#login-btn");
const loginSection = document.querySelector("section.login");
const adminDashboardSection = document.querySelector("section.admin-dashboard");
const userDashboardSection = document.querySelector("section.user-dashboard");
const mobile = document.querySelector("#mobile");
const password = document.querySelector("#password");

loginBtn.onclick = function (e) {
  e.preventDefault();

  let result = login(mobile.value, password.value);

  if (result !== undefined && result.isAdmin)
    window.location = "./admin-dashboard.html";
  if (result !== undefined && !result.isAdmin)
    window.location = "./user-dashboard.html";
};
