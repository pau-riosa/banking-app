import { User, users, createUser, login } from "./user.js";

let loginButton = document.querySelector(".loginButton");
let mobile = document.querySelector(".mobile");
let password = document.querySelector(".password");
let loginPage = document.querySelector(".loginPage");
let homePage = document.querySelector(".homePage");
let logOutButton = document.querySelector("#logOutButton");

function toggleHomePage() {
  loginPage.classList.toggle("remove");
  homePage.classList.toggle("remove");
  logOutButton.classList.toggle("remove");
}

loginButton.addEventListener("click", () => {
  let mobileValue = mobile.value;
  let passwordValue = password.value;

  let result = login(mobileValue, passwordValue);

  if (!result) console.error("check your email password");
  if (result.isAdmin) {
    toggleHomePage();
  } else {
    console.info("proceed to user dashboard");
  }
});
