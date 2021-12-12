function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  console.log(selector);

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    
    console.log(sampleNames);

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(metadata);
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log("hello in buildCHarts");
// 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    console.log("hello in buildCHarts 2");
    console.log(samples);

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var id = samples.filter(sampleObj => sampleObj.id == sample);
    console.log("ids: ");
    console.log(id);
    //  5. Create a variable that holds the first sample in the array.
    var idResult = id[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = id.map(sObj => sObj.otu_ids)
    var otuLabels = id.map(sObj => sObj.otu_labels)
    var otuSampleValues = id.map(sObj => sObj.sample_values)
    console.log(otuIds);
    console.log(otuLabels);
    console.log(otuSampleValues);



    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    sortedOnValues = samples.sort((a1,a2) => a1.sample_values-a2.sample_values).reverse();
    console.log("sorted On Values: ");
    console.log(sortedOnValues);
    var yticks = sortedOnValues.slice(0,10);    
    console.log(yticks);


    // // // 8. Create the trace for the bar chart. 
    var barData = [{
      x:  otuIds ,
      y:    yticks,
      type: 'bar'
    }
      
    ];
    // // 9. Create the layout for the bar chart. 
    var barLayout = {
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("plotArea",barData,barLayout)
    
  });
};



