// from data.js

//var tableData = data;
// reference for table body
let tbody = d3.select("tbody");

function uploaddata(d) {
    d3.select("#ufo-table").selectAll("tbody").remove()
    let table = d3.select("table")
    table.append("tbody")
    let tbody = d3.select("tbody")
    // Step 1: Loop Through `data` and log each sighting report object
    d.forEach((sighting => {
        // console.log(sighting);

        // Step 2:  Use d3 to append one table row `tr` for each sighting report object
        var row = tbody.append("tr");

        // Step 3:  Use `Object.entries` to log each sighting report value
        Object.entries(sighting).forEach(([key, value]) => {
            // console.log(key, value);

            // Step 4: Use d3 to append 1 cell per sighting report value `date/time`, `city`, `state`, `country`, `shape`, duration, `comment`
            var cell = row.append("td");

            // Step 5: Use d3 to update each cell's text with
            // weather report values (weekday, date, high, low)
            cell.text(value);

        });
    })
    );
}
//run function to upload data
uploaddata(data);

// Select the button
var button = d3.select("#filter-btn");

//select the form
//var form = d3.select("form")

// button.on("click", filteredInfo);
button.on("click", filterOnInput);
// d3.select("form").on("submit", filteredInfo)

function filterOnInput() {
    var filters = {
        "datetime": d3.select("#datetime").property("value"),
        "city": d3.select("#city").property("value"),
        "state": d3.select("#state").property("value"),
        "country": d3.select("#country").property("value"),
        "shape": d3.select("#shape").property("value"),
    };
    var dataFilter = data;
    Object.entries(filters).forEach(function ([key, value]) {
        if (value !== "") {
            console.log(key + ":" + value)
            dataFilter = dataFilter.filter(d => d[key] === value);
        };
    });

    uploaddata(dataFilter);
}
