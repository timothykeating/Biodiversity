const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

var jsonData = d3.json(url)

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));


/////
//SKILL DRILL
// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.

for (let i=0;i<jsonData.length;i++) {
    var lat = d3.json(url).map(spaceXResults[i].full_name);
    console.log(lat);
};





