// / from data.js
// var tableData = data;

// // Select the button
// var button = d3.select("#filter-btn");

// button.on("click", function () {

//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
//     console.log(tableData);

//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

//     console.log(filteredData);
// });
var filters = {
    "State": d3.select("#datetime").property("value"),
    "City": d3.select("#datetime").property("value"),
    "Country": d3.select("#datetime").property("value"),
    "Shape": d3.select("#datetime").property("value"),
};


filteredInfo(filters)

If Date provided is True, then..
    if(dates){
    // Filter the data to match the date provided by the user
    filteredData = data.filter((sightDate => sightDate.datetime === dates));
    console.log(filteredData);
}