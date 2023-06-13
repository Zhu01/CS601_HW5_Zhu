document.addEventListener("DOMContentLoaded", function (event) {
  let button = document.getElementById("btn");

  //Add event listener for the button when button be clicked
  button.addEventListener("click", function (event) {
    //Clear everything when clicking on the button
    let div = document.getElementById("container");
    div.innerHTML = "";

    fetch("https://zhu01.github.io/degrees.json").then((response) => {
      if (response.status == 200) {
        response.json().then((data) => {
          //Create a table
          const table = document.createElement("table");

          //Get and creat the header for table
          let headers = [];
          for (let item in data.my_degrees[0]) {
            headers.push(item);
          }

          let tr = table.insertRow(-1);
          for (let i = 0; i < headers.length; i++) {
            let th = document.createElement("th");
            th.innerHTML = headers[i];
            tr.appendChild(th);
          }

          //Create other table rows with degrees information
          for (let i = 0; i < data.my_degrees.length; i++) {
            let tr = table.insertRow(-1);
            let degree = data.my_degrees[i];
            for (let header of headers) {
              let td = document.createElement("td");
              td.innerHTML = degree[header];
              tr.appendChild(td);
            }
          }

          //Add the whole table to the page
          div.appendChild(table);
        });
      } else {
        div.innerHTML = "Sorry, there may some error!";
      }
    });
  });
});
