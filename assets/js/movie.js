queue()
    .defer(d3.csv, "assets/data/Movies.csv")
    .await(makeGraphs);

function makeGraphs(error, lotrData) {
    var ndx = crossfilter(lotrData);


    run_time(ndx);
    budgets(ndx);
    revenue(ndx)
    dc.renderAll();

}

//---------------------------------------------------- Runtime Information---------------------------------

function run_time(ndx) {



    var minus_series = ndx.dimension(function(d) {
        if (d.Name === 'The Lord of the Rings Series') {
            return null;
        }
        if (d.Name === 'The Hobbit Series') {
            return null;

        }
        else {
            return d.Name;
        }
    });

    var group = minus_series.group().reduceSum(dc.pluck('RuntimeInMinutes'));

    dc.barChart('#runtime')
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(minus_series)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Movies')
        .yAxis().ticks(10);

}

//---------------------------------------------------- Runtime Information end---------------------------------


//---------------------------------------------------- budget Information---------------------------------

function budgets(ndx) {

    var minus_series = ndx.dimension(function(d) {
        if (d.Name === 'The Lord of the Rings Series') {
            return null;
        }
        if (d.Name === 'The Hobbit Series') {
            return null;

        }
        else {
            return d.Name;
        }
    });

    var group = minus_series.group().reduceSum(dc.pluck('BudgetInMillions'));

    dc.barChart('#budgets')
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(minus_series)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Movies')
        .yAxis().ticks(10);

}
//---------------------------------------------------- budget Information end---------------------------------

//---------------------------------------------------- revenue Information ---------------------------------



function revenue(ndx) {

    var minus_series = ndx.dimension(function(d) {
        if (d.Name === 'The Lord of the Rings Series') {
            return null;
        }
        if (d.Name === 'The Hobbit Series') {
            return null;

        }
        else {
            return d.Name;
        }
    });

    var group = minus_series.group().reduceSum(dc.pluck('BoxOfficeRevenueInMillions'));

    dc.barChart('#revenue')
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(minus_series)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Movies')
        .yAxis().ticks(10);


console.log(minus_series);
}



