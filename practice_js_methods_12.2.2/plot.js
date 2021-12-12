console.log(cityGrowths);

// Now take a moment to plan our next steps. We will need to:

// Sort the cities in descending order of population growth.
// Select only the top five cities in terms of growth.
// Create separate arrays for the city names and their population growths.
// Use Plotly to create a bar chart with these arrays.

/////
// STEP 1 
// Sort and Select the Cities
var sortedCities = cityGrowths.sort((city1, city2) => city1.Increase_from_2016 - city2.Increase_from_2016).reverse();
console.log(sortedCities);

var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

/////
// STEP 2
// Create Arrays of City Names and Growth Figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: 'bar'
};
var layout = {
    title: 'Most Rapidly Growing Cities',
    xaxis: {title: "City"},
    yaxis: {title: "Pop Growth 2016-2017"}
};
Plotly.newPlot('bar-plot',[trace],layout);


/////
//SKILL DRILL
// Use the same dataset to create a bar chart of the seven largest cities by population.
var sortedSeven = cityGrowths.sort((c1,c2) => c1.population - c2.population).reverse();
console.log(sortedSeven);
var topSeven = sortedSeven.slice(0,7);
console.log(topSeven);
var topSevenCityNames = topSeven.map(c => c.City);
var topSevenPops = topSeven.map(c=>c.population);
var trace = {
    x: topSevenCityNames,
    y: topSevenPops,
    type: 'bar'
};
var layout = {
    title: 'Seven Largest Populations',
    xaxis: {title: 'City Name'},
    yaxis: {title: 'Populatoin'},
};
Plotly.newPlot('bar-plot',[trace],layout);










