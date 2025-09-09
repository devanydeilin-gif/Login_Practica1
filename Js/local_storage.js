const users =JSON.parse(localStorage.getItem("users")) || [];

const table = tableBody = document.getElementById("user_table");

users.forEach(user => {
    const row = document.createElement("tr")

    const userCell = document.createElement("td");
    userCell.textContent = user.username;

    const passCell = document.createElement("td");
    passCell.textContent = user.password;

    row.appendChild(userCell);
    row.appendChild(passCell);

    tableBody.appendChild(row);
});