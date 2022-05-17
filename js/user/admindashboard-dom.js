import { getUsers } from "./index.js";
import { totalBalance } from "../transaction/index.js";
import { loadData } from "../helper.js";

let tableBody = document.querySelector(".users>tbody");
let loadBtn = document.querySelector("#load-data-btn");
let users = getUsers();

loadBtn.onclick = function (e) {
  e.preventDefault();
  loadData();
};

function displayUsers(users) {
  let result = users.map((u) => {
    let total = totalBalance(users, u.mobile);
    return `
          <tr>
            <td>${u.mobile}</td>
            <td>${u.fullname}</td>
            <td>${total.balance}</td>
            <td>
                <a href="#withdraw-modal" class="withdraw-modal-btn">withdraw</a>
            </td>
          </tr>
    `;
  });

  tableBody.innerHTML = result.join("").toString();
}

// Get the modal
// var modal = document.getElementById("withdraw-modal");

// // Get the button that opens the modal
// var btn = document.querySelector(".withdraw-modal-btn");
// console.log(btn);
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = (function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// })
displayUsers(users);
