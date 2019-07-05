queue()
    .defer(d3.csv, "assets/data/lotr_characters.csv")
    .await(makeGraphs);

function makeGraphs(error, lotrData) {
    var ndx = crossfilter(lotrData);

    gender(ndx);
    dc.renderAll();

}


function gender(ndx) {
    var dim = ndx.dimension(function(d) {
        if (d.gender === ',,') {

            return null;
        }
        else {
            return d.gender;
        }
    });
    var group = dim.group();

    dc.pieChart('#gender')
        .height(500)
        .radius(1000)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);

}

//(dc.pluck('gender'));
