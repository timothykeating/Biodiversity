// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]},{x: [4, 5, 6], y: [44, 55, 66]}]);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

//  var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

//  Plotly.newPlot("plotArea", [trace], layout);


// var trace1 = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type:'pie'
// };

// var layout1 = {
//     title: " 'Pie' Chart"
//     // ,
//     // xaxis: {title: "Drinks"},
//     // yaxis: {title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", [trace1], layout1);
var size = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];
var trace2 = {
        x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
        y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
        mode: 'markers',
        marker: {
            size: size
        },
        type: 'scatter'
};

Plotly.newPlot("plotArea", [trace2]);
/////////////////////////////////////////////////////////
var numbers = [1,2,3,4,5];
var plusFive = numbers.map(function(num) {
    return num + 5;
});
console.log(plusFive);
/////////////////////////////////////////////////////////
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPops = cities.map(function(city){
    
    return city.population;
});
console.log(cityPops);
/////////////////////////////////////////
// find animals that start with the letter s
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sWordsOnly = words.filter(wor => wor.startsWith('s'));
console.log(sWordsOnly);

/////////////////////////////////////////
// sort an arry
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b).reverse();
console.log(sortedAge);

////////////////////////////
// select first 3 items
var words2 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sliceWords = words.slice(0,3);
console.log(sliceWords)