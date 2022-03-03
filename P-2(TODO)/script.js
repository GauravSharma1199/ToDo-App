// program started:======================================
updateTable(JSON.parse(localStorage.getItem("itemsJson")));

// add button:===================================
let add = document.getElementById("add");
add.addEventListener("click", () => {
  let tit = document.getElementById("title").value;
  let desc = document.getElementById("description").value;
  let itemJsonArr = [];
  if (localStorage.getItem("itemsJson") != null) {
    let itemJsonArrStr = localStorage.getItem("itemsJson");
    itemJsonArr = JSON.parse(itemJsonArrStr);
  }
  if (tit != "" || desc != "") {
    itemJsonArr.push([tit, desc]);
    console.log("item added !!");
  }
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArr));
  updateTable(itemJsonArr);
  
});

// Clear All button:=====================================
let clearButton = document.getElementById("clearAll");
let itemArr = JSON.parse(localStorage.getItem("itemsJson"));
clearButton.addEventListener("click", () => {
  localStorage.clear();
  updateTable(JSON.parse(localStorage.getItem("itemsJson")));
});

// update table:=================================
function updateTable(itemJsonArr) {
  let tableBody = document.getElementById("tableBody");
  let str = "";
  if (itemJsonArr != null && itemJsonArr.length != 0) {
    itemJsonArr.forEach((element, index) => {
      str += `
              <tr>
                      <th scope="row">${index + 1}</th>
                      <td>${element[0]}</td>
                      <td>${element[1]}</td>
                      <td><button class="btn btn-primary btn-sm" onclick="removeElement(${index})" id="deleteBtn">Delete</button></td>
                    </tr>
          `;
    });
  } else {
    str += `
    <tr>
            <th scope="row">0</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
`;
  }
  tableBody.innerHTML = str;
}

function removeElement(itemIndex) {
  let itemArr = JSON.parse(localStorage.getItem("itemsJson"));
  itemArr.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemArr));
  updateTable(itemArr);
  console.log("item deleted !!");
}
