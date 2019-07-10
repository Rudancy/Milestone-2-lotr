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
        .width(300)
        .height(500)
        .radius(600)
        .innerRadius(30)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
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
        .height(500)
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
            ['Hobbits', 'Men', 'Ents', 'Elves', 'Orc', 'Ainur', 'Dwarves', 'Ainur']
        ])

        .ordinalColors(['#5896ff', '#ffc158', '#5896ff', '#ffc158', '#5896ff', '#ffc158']);


    //please not Nazgul where men and therefore are treated as such


}
