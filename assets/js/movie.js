queue()
    .defer(d3.csv, "assets/data/Movies.csv")
    .await(makeGraphs);

function makeGraphs(error, lotrData) {
    var ndx = crossfilter(lotrData);


    run_time(ndx);
    budgets(ndx);
    revenue(ndx);
    awards(ndx);
    dc.renderAll();

}

//---------------------------------------------------- Runtime Information---------------------------------

function run_time(ndx) {



    var minus_series = ndx.dimension(function(d) {
        if (d.Name === 'The Lord of the Rings Series') {
            d.RuntimeInMinutes = 0;
            return null;
        }
        else if (d.Name === 'The Hobbit Series') {
            d.RuntimeInMinutes = 0;
            return null;

        }
        else {
            return d.Name;
        }
    });

    var group = minus_series.group().reduceSum(dc.pluck('RuntimeInMinutes'));

    dc.barChart('#runtime')
        .width(400)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .dimension(minus_series)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .renderHorizontalGridLines(true)
        .xAxisLabel('Movies')
        .yAxisLabel('In Minutes')
        .yAxis().ticks(10);

}

//---------------------------------------------------- Runtime Information end---------------------------------


//---------------------------------------------------- budget Information---------------------------------

function budgets(ndx) {

    var minus_series = ndx.dimension(function(d) {
        if (d.Name === 'The Lord of the Rings Series') {
            d.BudgetInMillions = 0;
            return null;
        }
        else if(d.Name === 'The Hobbit Series') {
            d.BudgetInMillions = 0;
            return null;

        }

        else {
            return d.Name;
        }
    });

    var group = minus_series.group().reduceSum(dc.pluck('BudgetInMillions'));

    dc.barChart('#budgets')
        .width(400)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .dimension(minus_series)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Movies')
        .renderHorizontalGridLines(true)
        .yAxisLabel('In Millions')
        .yAxis().ticks(10);

}
//---------------------------------------------------- budget Information end---------------------------------

//---------------------------------------------------- revenue Information ---------------------------------



function revenue(ndx) {

    var minus_series = ndx.dimension(function(d) {
        if (d.Name === 'The Lord of the Rings Series') {
            d.BoxOfficeRevenueInMillions = 0;
            return null;
        }
       else if (d.Name === 'The Hobbit Series') {
            d.BoxOfficeRevenueInMillions = 0;
            return null;

        }
        else {
            return d.Name;
        }
    });

    var group = minus_series.group().reduceSum(dc.pluck('BoxOfficeRevenueInMillions'));

    dc.barChart('#revenue')
        .width(400)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .dimension(minus_series)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Movies')
        .renderHorizontalGridLines(true)
        .yAxisLabel('In Millions')
        .yAxis().ticks(10)

    ;


}
//-------------------------------------------------------------awards-----------------------------------------

function awards(ndx) {



    var noAwards = ndx.dimension(function(d) {
        if (d.Name === 'The Lord of the Rings Series') {
            d.AcademyAwardNominations = 0;
            d.AcademyAwardWins = 0;
            d.RottenTomatoesScore = 0;
            return null;
        }
       else if (d.Name === 'The Hobbit Series') {
            d.AcademyAwardNominations = 0;
            d.AcademyAwardWins = 0;
            d.RottenTomatoesScore = 0;
            return null;

        }
        else {
            return d.Name;
        }
    });


    //--------------------------------------------------------grouping function----------------

    var group = noAwards.group().reduceSum(dc.pluck('AcademyAwardNominations'));

    var awardsNominationsByFilm1 = noAwards.group().reduceSum(function(d) {
        if (d.Name === 'The Fellowship of the Ring') {
            return +d.AcademyAwardWins;
        }
        else {
            return 0;
        }
    });

    var awardsNominationsByFilm2 = noAwards.group().reduceSum(function(d) {
        if (d.Name === 'The Two Towers') {
            return +d.AcademyAwardWins;

        }
        else {
            return 0;
        }
    });
    var awardsNominationsByFilm3 = noAwards.group().reduceSum(function(d) {
        if (d.Name === 'The Return of the King') {
            return +d.AcademyAwardWins;
        }
        else {
            return 0;
        }
    });
    var awardsNominationsByFilm4 = noAwards.group().reduceSum(function(d) {
        if (d.Name === 'The Unexpected Journey') {
            return +d.AcademyAwardWins;
        }
        else {
            return 0;
        }
    });
    var awardsNominationsByFilm5 = noAwards.group().reduceSum(function(d) {
        if (d.Name === 'The Desolation of Smaug') {
            return +d.AcademyAwardWins;
        }
        else {
            return 0;
        }
    });
    var awardsNominationsByFilm6 = noAwards.group().reduceSum(function(d) {
        if (d.Name === 'The Battle of the Five Armies') {
            return +d.AcademyAwardWins;
        }
        else {
            return 0;
        }
    });



    var stackedChart = dc.barChart('#academy');
    stackedChart
        .width(400)
        .height(400)
        .dimension('noAwards')
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .group(group)
        .stack(awardsNominationsByFilm1, 'The Fellowship of the Ring')
        .stack(awardsNominationsByFilm2, 'The Two Towers')
        .stack(awardsNominationsByFilm3, 'The Return of the King')
        .stack(awardsNominationsByFilm4, 'The Unexpected Journey')
        .stack(awardsNominationsByFilm5, 'The Desolation of Smaug')
        .stack(awardsNominationsByFilm6, 'The Battle of the Five Armies')
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxisLabel('Number of Awards')

        //struggle to get colors right- had to play around and just wing it.
        .colors(d3.scale.ordinal().domain([0, 6])
            .range(['#5896FF', '#ffc158', '#ffc158']))
        .renderHorizontalGridLines(true);







    stackedChart.margins().right = 100;
}
