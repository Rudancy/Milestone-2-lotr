queue()
    .defer(d3.csv, "assets/data/WordsByCharacter.csv")
    .await(makeGraphs);

function makeGraphs(error, lotrData) {
    var ndx = crossfilter(lotrData);


    number_of_words_per_film(ndx);
    average_words(ndx);
    words_by_character(ndx);
    dc.renderAll();

}

function number_of_words_per_film(ndx) {

    var dim = ndx.dimension(dc.pluck('Film'));
    var group = dim.group().reduceSum(dc.pluck('Words'));

    dc.barChart('#total_words')
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Movies')
        .yAxis().ticks(15);

}


function words_by_character(ndx) {
    var dim = ndx.dimension(dc.pluck('Character'));

    var group = dim.group().reduceSum(dc.pluck('Words'))

    dc.barChart('#character_words')
        .width(1000)
        .height(800)
        .margins({ top: 10, right: 50, bottom: 100, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Characters')
        .yAxis().ticks(15);



}


function average_words(ndx) {

    var dim = ndx.dimension(dc.pluck('Race'))


    function add_item(p, v) {
        p.count++;
        p.total += v.Words;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.Words;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise() {
        return { count: 0, total: 0, average: 0 };
    }

    var average_words_group = dim.group().reduce(add_item, remove_item, initialise);



    dc.barChart('#average_words_spoken_by_race')
        .height(500)
        .width(500)
        .dimension(dim)
        .group(average_words_group)
        .valueAccessor(function(d) {
            return d.value.average;
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xAxisLabel('Characters')
        .yAxis().ticks(15);

}
