queue()
    .defer(d3.csv, "assets/data/lotr_characters.csv")
    .await(makeGraphs);

function makeGraphs(error, lotrData) {
    var ndx = crossfilter(lotrData);

    gender(ndx);

    race(ndx);
    dc.renderAll();

}


function gender(ndx) {
    var dim = ndx.dimension(function(d) {
        if (d.gender === '') {
            d.gender = 0;
            return null;
        }
        else {
            return d.gender;
        }
    });

    var group = dim.group();

    dc.pieChart('#gender')
        .width(400)
        .height(400)
        .radius(600)
        .innerRadius(30)
        .transitionDuration(1500)
        .dimension(dim)
        .externalRadiusPadding(60)
        .externalLabels(40)
        .drawPaths(true)
        .group(group)
        .ordinalColors(['#5896ff', '#ffc158']);

}





function race(ndx) {

    var dim = ndx.dimension(function(d) {
        if (d.race === '') {
            d.race = 0;
            return null;

        }
        else {
            return d.race;
        }
    });

    var group = dim.group();

    dc.pieChart('#race')
        .height(400)
        .width(400)
        .radius(600)
        .innerRadius(30)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group)
        .externalRadiusPadding(60)
        .externalLabels(40)
        .drawPaths(true)
        .minAngleForLabel(1)
        .filter([
            ['Dwarves', 'Men', 'Hobbits', 'Elves', 'Ents', 'Ainur', 'Orc']
        ])
        
        .ordinalColors(['#5896ff', '#ffc158', '#5896ff', '#ffc158', '#5896ff', '#ffc158']);


    //please not Nazgul where men and therefore are treated as such


}
