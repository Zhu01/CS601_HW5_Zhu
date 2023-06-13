document.getElementById("button").onclick = function () {
    // fetch json data
    fetch("https://zhu01.github.io//degrees.json")
        .then(response => response.json())
        .then(data => {
            // create the table and attach to fetchedData div
            const table = createTable(data.degrees);
            document.getElementById("fetchedData").appendChild(table);
        })
        .catch(error => {
            console.error("Error:", error);
        });
};

// function to create the table dynamically
function createTable(data) {
    const table = document.createElement("table");
    const headers = Object.keys(data[0]); 

    // creates the table header row
    const headerRow = table.insertRow();
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    // creates rows for each data set
    data.forEach(degree => {
        const row = table.insertRow();
        Object.values(degree).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    return table;
}
