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
              <select>
                 <option value="withdraw">withdraw</option> 
                 <option value="deposit">deposit</option> 
                 <option value="transfer">transfer</option> 
              </select>
            </td>
          </tr>
    `;
  });

  tableBody.innerHTML = result.join("").toString();
}

(function () {
  displayUsers(users);
})();
