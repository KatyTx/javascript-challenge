// from data.js
//var tableData = data;
// reference for table body
var tbody = d3.select("tbody");

// function uploaddata(data) {
// Step 1: Loop Through `data` and log each sighting report object
data.forEach(sighting => {
    //console.log(sighting);

    // Step 2:  Use d3 to append one table row `tr` for each sighting report object
    var row = tbody.append("tr");

    // Step 3:  Use `Object.entries` to log each sighting report value
    Object.entries(sighting).forEach(([key, value]) => {
        //console.log(key, value);

        // Step 4: Use d3 to append 1 cell per sighting report value `date/time`, `city`, `state`, `country`, `shape`, duration, `comment`
        var cell = row.append("td");

        // Step 5: Use d3 to update each cell's text with
        // weather report values (weekday, date, high, low)
        cell.text(value);

    });
})
// );

// uploaddata(data);

// Select the button
var button = d3.select("#filter-btn");

//select the form
//var form = d3.select("form")

button.on("click", filteredInfo);
d3.select("form").on("submit", filteredInfo)

function filteredInfo() {
    // emptying existing table
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    //d3.event.preventdefault();

    filteredData.forEach(sighting => {
        //console.log(sighting);

        // Step 2:  Use d3 to append one table row `tr` for each sighting report object
        var row = tbody.append("tr");

        // Step 3:  Use `Object.entries` to log each sighting report value
        Object.entries(sighting).forEach(([key, value]) => {
            //console.log(key, value);

            // Step 4: Use d3 to append 1 cell per sighting report value `date/time`, `city`, `state`, `country`, `shape`, duration, `comment`
            var cell = row.append("td");

            // Step 5: Use d3 to update each cell's text with
            // weather report values (weekday, date, high, low)
            cell.text(value);

        });
    })
    // uploaddata(filteredData);
};