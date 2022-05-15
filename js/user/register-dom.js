import { users, createUser } from "./index.js";
import { setItem, getItem } from "../localStorage.js";

const sendBtn = document.querySelector("#send");
const name = document.querySelector("#name");
const mobile = document.querySelector("#mobile");
const password = document.querySelector("#password");

sendBtn.onclick = function (e) {
  e.preventDefault();
  let result = createUser(mobile.value, password.value, name.value);
  if (result !== undefined) window.location = "../index.html";
};
