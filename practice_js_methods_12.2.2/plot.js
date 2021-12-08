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
//

/////
// STEP 3
//

/////
// STEP 4
//

/////
// STEP 5
//