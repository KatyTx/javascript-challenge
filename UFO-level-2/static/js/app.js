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

//function to filter data
function filteredInfo() {

    // Select the input element and get the raw HTML node
    var inputElementdt = d3.select("#datetime");

    // Get the value property of the input element for date
    var inputValuedt = inputElementdt.property("value");
    //console log the input value to verify
    console.log(inputValuedt);
    //console.log(tableData);

    //filter the data and console log the filtered info
    var filteredDate = data.filter(sighting => sighting.datetime === inputValuedt);
    console.log(filteredDate);
    //function to upload data from filtered input
    uploaddata(filteredDate);

    // Select the input element and get the raw HTML node
    var inputElementcity = d3.select("#city");
    // Get the value property of the input element for city
    var inputValuecity = inputElementcity.property("value");
    //console log the input value to verify
    console.log(inputValuecity);

    var filteredCity = filteredDate.filter(sighting => sighting.city === inputValuecity);
    console.log(filteredCity);
    //function to upload data from filtered input
    uploaddata(filteredCity);

    // Select the input element and get the raw HTML node
    var inputElementst = d3.select("#state");
    // Get the value property of the input element for city
    var inputValuest = inputElementst.property("value");
    //console log the input value to verify
    console.log(inputValuest);


    var filteredState = data.filter(sighting => sighting.state === inputValuest);
    console.log(filteredState);
    //function to upload data from filtered input
    uploaddata(filteredState);

    // Select the input element and get the raw HTML node
    var inputElementcountry = d3.select("#state");
    // Get the value property of the input element for city
    var inputValuecountry = inputElementcountry.property("value");
    //console log the input value to verify
    console.log(inputValuecountry);

    var filteredCountry = data.filter(sighting => sighting.country === inputValuecountry);
    console.log(filteredCountry);
    //function to upload data from filtered input
    uploaddata(filteredCountry);

    // Select the input element and get the raw HTML node
    var inputElementshape = d3.select("#state");
    // Get the value property of the input element for city
    var inputValueshape = inputElementshape.property("value");
    //console log the input value to verify
    console.log(inputValueshape);

    var filteredShape = data.filter(sighting => sighting.shape === inputValueshape);
    console.log(filteredShape);
    //function to upload data from filtered input
    uploaddata(filteredShape);

};


// filteredInfo(filters)

//If filter is True, then..
// if (dates) {
//     // Filter the data to match the date provided by the user
//     filteredData = data.filter((sightDate => sightDate.datetime === dates));
//     console.log(filteredData);

// }

/*
if the value of the input is "", don't add it to the filters
then loop through the filters and apply them to the set of data

i.e. filter on date, then filter that data on city



if (inputElementShape.property("value") != ""){
    proceed to filter this input
}

*/

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
