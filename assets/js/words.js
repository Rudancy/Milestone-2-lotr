queue()
    .defer(d3.csv, "assets/data/WordsByCharacter.csv")
    .await(makeGraphs);

function makeGraphs(error, lotrData) {
    var ndx = crossfilter(lotrData);


    number_of_words_per_film(ndx);
    words_by_character(ndx);
    total_times_race_speaks(ndx);
    dc.renderAll();

}

function number_of_words_per_film(ndx) {

    var dim = ndx.dimension(dc.pluck('Film'));
    var group = dim.group().reduceSum(dc.pluck('Words'));

    dc.barChart('#total_words')
        .width(300)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Movies')
        .renderHorizontalGridLines(true)
        .yAxisLabel('Number of words')
        .yAxis().ticks(15);

}


function total_times_race_speaks(ndx) {
    var dim = ndx.dimension(dc.pluck('Race'));
    var group = dim.group();

    dc.barChart('#total_times_spoken_by_race')
        .width(300)
        .height(300)
        .margins({ top: 10, right: 60, bottom: 100, left: 60 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Total Times Each Race Has Spoken")
        .yAxisLabel('Times Spoken')
        .renderHorizontalGridLines(true);
        
}




function words_by_character(ndx) {
    var dim = ndx.dimension(dc.pluck('Character'));

    var group = dim.group().reduceSum(dc.pluck('Words'));

    dc.barChart('#character_words')
        .width(1000)
        .height(500)
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Characters')
        .renderHorizontalGridLines(true)
        .yAxisLabel('Times Spoken')
        .yAxis().ticks(15);



}
