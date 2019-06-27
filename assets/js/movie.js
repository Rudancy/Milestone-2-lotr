queue()
  .defer(d3.csv, "assets/data/Movies.csv")
  .await(makeGraphs);

 function makeGraphs(error, lotrData) {
  var ndx = crossfilter(lotrData);
  
  
 }