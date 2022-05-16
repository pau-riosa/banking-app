import { getUsers } from "./index.js";
import { totalBalance } from "../transaction/index.js";

let tableBody = document.querySelector(".users>tbody");
let users = getUsers();

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

  tableBody.innerHTML = result;
}

(function () {
  displayUsers(users);
})();
