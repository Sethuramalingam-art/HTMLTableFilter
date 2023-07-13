var dataTable = [
  {
    name: "Sethu",
    rollNo: 1,
    children: "magi",
  },
  {
    name: "Prasanna",
    rollNo: 2,
    children: "son",
  },
  {
    name: "Kumar",
    rollNo: 3,
    children: "daug",
  },
  {
    name: "Jegathish",
    rollNo: 4,
    children: "jegs",
  },
  {
    name: "Tamil",
    rollNo: 5,
    children: "no child",
  },
];

var tableContainer = document.getElementById("generateTable");

var builtTable = document.createElement("table");
tableContainer.appendChild(builtTable);
var tableHeader = document.createElement("thead");
var tableBody = document.createElement("tbody");
var tableHeadRow = document.createElement("tr");
var tableFilterRow = document.createElement("tr");

Object.keys(dataTable[0]).forEach((item) => {
  var tableHeadCol = document.createElement("th");
  tableHeadCol.textContent = item;
  tableHeadRow.appendChild(tableHeadCol);

  var tableColFilter = document.createElement("td");
  var tableFilterInputCol = document.createElement("input");
  tableFilterInputCol.setAttribute("id", item);
  tableFilterInputCol.addEventListener("input", () => {
    filterFunc(item);
  });
  tableColFilter.appendChild(tableFilterInputCol);
  tableFilterRow.appendChild(tableColFilter);
});
tableHeader.appendChild(tableHeadRow);

tableContainer.appendChild(tableHeader);
tableBody.appendChild(tableFilterRow);
tableContainer.appendChild(tableBody);

function filterFunc(item) {
  resultArr = [...dataTable];
  if (item !== "") {
    var getElement = document.getElementById(item);
    resultArr.forEach((data, index) => {
      document.getElementById(index + 1)
        ? document.getElementById(index + 1).remove()
        : "";
    });
    var getElement = document.getElementById(item);
    if (getElement.value !== "") {
      resultArr = dataTable.filter((obj) => {
        return String(obj[item]).indexOf(getElement.value) !== -1;
      });
    }
  }

  resultArr.forEach((data, index) => {
    var tableDataRow = document.createElement("tr");
    tableDataRow.setAttribute("id", index + 1);
    Object.keys(data).forEach((item) => {
      var tableDataCol = document.createElement("td");
      tableDataCol.textContent = data[item];
      tableDataRow.appendChild(tableDataCol);
    });
    tableBody.appendChild(tableDataRow);
  });
}

tableContainer.appendChild(tableBody);
filterFunc("");
