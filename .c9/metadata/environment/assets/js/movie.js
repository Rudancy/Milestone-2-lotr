{"filter":false,"title":"movie.js","tooltip":"/assets/js/movie.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":54,"column":37},"end":{"row":54,"column":40},"action":"remove","lines":["red"],"id":21},{"start":{"row":54,"column":37},"end":{"row":54,"column":46},"action":"insert","lines":["reduceSum"]}],[{"start":{"row":54,"column":46},"end":{"row":54,"column":47},"action":"insert","lines":["<"],"id":22}],[{"start":{"row":54,"column":46},"end":{"row":54,"column":47},"action":"remove","lines":["<"],"id":23}],[{"start":{"row":54,"column":46},"end":{"row":54,"column":48},"action":"insert","lines":["()"],"id":24}],[{"start":{"row":54,"column":47},"end":{"row":54,"column":48},"action":"insert","lines":["d"],"id":25},{"start":{"row":54,"column":48},"end":{"row":54,"column":49},"action":"insert","lines":["c"]},{"start":{"row":54,"column":49},"end":{"row":54,"column":50},"action":"insert","lines":["."]}],[{"start":{"row":54,"column":50},"end":{"row":54,"column":51},"action":"insert","lines":["p"],"id":26},{"start":{"row":54,"column":51},"end":{"row":54,"column":52},"action":"insert","lines":["l"]},{"start":{"row":54,"column":52},"end":{"row":54,"column":53},"action":"insert","lines":["u"]},{"start":{"row":54,"column":53},"end":{"row":54,"column":54},"action":"insert","lines":["c"]},{"start":{"row":54,"column":54},"end":{"row":54,"column":55},"action":"insert","lines":["k"]}],[{"start":{"row":54,"column":55},"end":{"row":54,"column":57},"action":"insert","lines":["()"],"id":27}],[{"start":{"row":54,"column":56},"end":{"row":54,"column":58},"action":"insert","lines":["''"],"id":28}],[{"start":{"row":54,"column":57},"end":{"row":54,"column":58},"action":"insert","lines":["B"],"id":29}],[{"start":{"row":54,"column":57},"end":{"row":54,"column":58},"action":"remove","lines":["B"],"id":30},{"start":{"row":54,"column":57},"end":{"row":54,"column":73},"action":"insert","lines":["BudgetInMillions"]}],[{"start":{"row":54,"column":4},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"insert","lines":["    "]},{"start":{"row":55,"column":4},"end":{"row":56,"column":0},"action":"insert","lines":["",""]},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":53,"column":36},"end":{"row":53,"column":65},"action":"remove","lines":["(dc.pluck('BudgetInMillions')"],"id":32}],[{"start":{"row":53,"column":36},"end":{"row":53,"column":37},"action":"remove","lines":[")"],"id":33}],[{"start":{"row":52,"column":0},"end":{"row":70,"column":1},"action":"remove","lines":["function budgets(ndx) {","    var minus_series = ndx.dimension;","    ","    ","    var group = minus_series.group().reduceSum(dc.pluck('BudgetInMillions'));","","    dc.barChart('#runtime')","        .width(400)","        .height(300)","        .margins({ top: 10, right: 50, bottom: 30, left: 50 })","        .dimension(minus_series)","        .group(group)","        .transitionDuration(500)","        .x(d3.scale.ordinal())","        .xUnits(dc.units.ordinal)","        .xAxisLabel('Gender')","        .yAxis().ticks(10);","","}"],"id":34}],[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["/"],"id":35},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["/"]}],[{"start":{"row":51,"column":0},"end":{"row":80,"column":0},"action":"insert","lines":["","    var minus_series = ndx.dimension(function(d) {","        if (d.Name === 'The Lord of the Rings Series') {","            return null;","        }","        if (d.Name === 'The Hobbit Series') {","            return null;","","        }","        else {","            return d.Name;","        }","    });","","    var group = minus_series.group().reduceSum(dc.pluck('RuntimeInMinutes'));","","    dc.barChart('#runtime')","        .width(400)","        .height(300)","        .margins({ top: 10, right: 50, bottom: 30, left: 50 })","        .dimension(minus_series)","        .group(group)","        .transitionDuration(500)","        .x(d3.scale.ordinal())","        .xUnits(dc.units.ordinal)","        .xAxisLabel('Movies')","        .yAxis().ticks(10);","","}",""],"id":36}],[{"start":{"row":65,"column":57},"end":{"row":65,"column":73},"action":"remove","lines":["RuntimeInMinutes"],"id":37},{"start":{"row":65,"column":57},"end":{"row":65,"column":58},"action":"insert","lines":["B"]}],[{"start":{"row":65,"column":57},"end":{"row":65,"column":58},"action":"remove","lines":["B"],"id":38},{"start":{"row":65,"column":57},"end":{"row":65,"column":73},"action":"insert","lines":["BudgetInMillions"]}],[{"start":{"row":67,"column":18},"end":{"row":67,"column":25},"action":"remove","lines":["runtime"],"id":39},{"start":{"row":67,"column":18},"end":{"row":67,"column":19},"action":"insert","lines":["b"]},{"start":{"row":67,"column":19},"end":{"row":67,"column":20},"action":"insert","lines":["u"]},{"start":{"row":67,"column":20},"end":{"row":67,"column":21},"action":"insert","lines":["d"]},{"start":{"row":67,"column":21},"end":{"row":67,"column":22},"action":"insert","lines":["g"]},{"start":{"row":67,"column":22},"end":{"row":67,"column":23},"action":"insert","lines":["e"]},{"start":{"row":67,"column":23},"end":{"row":67,"column":24},"action":"insert","lines":["t"]},{"start":{"row":67,"column":24},"end":{"row":67,"column":25},"action":"insert","lines":["s"]}],[{"start":{"row":79,"column":0},"end":{"row":79,"column":1},"action":"remove","lines":["}"],"id":40}],[{"start":{"row":79,"column":0},"end":{"row":79,"column":1},"action":"insert","lines":["}"],"id":41}],[{"start":{"row":79,"column":1},"end":{"row":79,"column":2},"action":"insert","lines":[";"],"id":42}],[{"start":{"row":79,"column":1},"end":{"row":79,"column":2},"action":"remove","lines":[";"],"id":43},{"start":{"row":79,"column":0},"end":{"row":79,"column":1},"action":"remove","lines":["}"]}],[{"start":{"row":79,"column":0},"end":{"row":79,"column":1},"action":"insert","lines":["}"],"id":44},{"start":{"row":79,"column":1},"end":{"row":79,"column":2},"action":"insert","lines":["}"]}],[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":[" "],"id":45},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"remove","lines":["    "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":2},"action":"remove","lines":["  "]},{"start":{"row":53,"column":4},"end":{"row":53,"column":6},"action":"remove","lines":["  "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"remove","lines":["    "]},{"start":{"row":55,"column":4},"end":{"row":55,"column":8},"action":"remove","lines":["    "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"remove","lines":["    "]},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"remove","lines":["    "]},{"start":{"row":59,"column":4},"end":{"row":59,"column":8},"action":"remove","lines":["    "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":2},"action":"remove","lines":["  "]},{"start":{"row":60,"column":4},"end":{"row":60,"column":6},"action":"remove","lines":["  "]},{"start":{"row":61,"column":0},"end":{"row":61,"column":4},"action":"remove","lines":["    "]},{"start":{"row":62,"column":4},"end":{"row":62,"column":8},"action":"remove","lines":["    "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":4},"action":"remove","lines":["    "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":4},"action":"remove","lines":["    "]},{"start":{"row":67,"column":0},"end":{"row":67,"column":4},"action":"remove","lines":["    "]},{"start":{"row":68,"column":4},"end":{"row":68,"column":8},"action":"remove","lines":["    "]},{"start":{"row":69,"column":0},"end":{"row":69,"column":4},"action":"remove","lines":["    "]},{"start":{"row":70,"column":4},"end":{"row":70,"column":8},"action":"remove","lines":["    "]},{"start":{"row":71,"column":4},"end":{"row":71,"column":8},"action":"remove","lines":["    "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "]},{"start":{"row":73,"column":4},"end":{"row":73,"column":8},"action":"remove","lines":["    "]},{"start":{"row":74,"column":0},"end":{"row":74,"column":2},"action":"remove","lines":["  "]},{"start":{"row":74,"column":4},"end":{"row":74,"column":6},"action":"remove","lines":["  "]},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"remove","lines":["    "]},{"start":{"row":76,"column":4},"end":{"row":76,"column":8},"action":"remove","lines":["    "]},{"start":{"row":77,"column":0},"end":{"row":77,"column":2},"action":"remove","lines":["  "]},{"start":{"row":77,"column":4},"end":{"row":77,"column":6},"action":"remove","lines":["  "]},{"start":{"row":79,"column":1},"end":{"row":79,"column":2},"action":"remove","lines":["}"]},{"start":{"row":80,"column":0},"end":{"row":81,"column":0},"action":"remove","lines":["",""]},{"start":{"row":80,"column":0},"end":{"row":80,"column":1},"action":"insert","lines":["}"]}],[{"start":{"row":50,"column":0},"end":{"row":51,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":["f"]},{"start":{"row":51,"column":1},"end":{"row":51,"column":2},"action":"insert","lines":["u"]},{"start":{"row":51,"column":2},"end":{"row":51,"column":3},"action":"insert","lines":["n"]},{"start":{"row":51,"column":3},"end":{"row":51,"column":4},"action":"insert","lines":["c"]},{"start":{"row":51,"column":4},"end":{"row":51,"column":5},"action":"insert","lines":["t"]},{"start":{"row":51,"column":5},"end":{"row":51,"column":6},"action":"insert","lines":["i"]},{"start":{"row":51,"column":6},"end":{"row":51,"column":7},"action":"insert","lines":["o"]}],[{"start":{"row":51,"column":7},"end":{"row":51,"column":8},"action":"insert","lines":["n"],"id":47}],[{"start":{"row":51,"column":0},"end":{"row":51,"column":8},"action":"remove","lines":["function"],"id":48},{"start":{"row":51,"column":0},"end":{"row":51,"column":8},"action":"insert","lines":["function"]}],[{"start":{"row":51,"column":8},"end":{"row":51,"column":9},"action":"insert","lines":[" "],"id":49}],[{"start":{"row":51,"column":9},"end":{"row":51,"column":10},"action":"insert","lines":["b"],"id":50},{"start":{"row":51,"column":10},"end":{"row":51,"column":11},"action":"insert","lines":["u"]}],[{"start":{"row":51,"column":9},"end":{"row":51,"column":11},"action":"remove","lines":["bu"],"id":51},{"start":{"row":51,"column":9},"end":{"row":51,"column":16},"action":"insert","lines":["budgets"]}],[{"start":{"row":51,"column":16},"end":{"row":51,"column":18},"action":"insert","lines":["()"],"id":52}],[{"start":{"row":51,"column":17},"end":{"row":51,"column":18},"action":"insert","lines":["n"],"id":53},{"start":{"row":51,"column":18},"end":{"row":51,"column":19},"action":"insert","lines":["d"]},{"start":{"row":51,"column":19},"end":{"row":51,"column":20},"action":"insert","lines":["x"]}],[{"start":{"row":51,"column":21},"end":{"row":51,"column":22},"action":"insert","lines":["{"],"id":54}],[{"start":{"row":81,"column":0},"end":{"row":81,"column":1},"action":"remove","lines":["}"],"id":55}],[{"start":{"row":51,"column":21},"end":{"row":51,"column":22},"action":"insert","lines":[" "],"id":56},{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"insert","lines":["    "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":1},"action":"insert","lines":[" "]},{"start":{"row":54,"column":5},"end":{"row":54,"column":8},"action":"insert","lines":["   "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":3},"action":"insert","lines":["   "]},{"start":{"row":55,"column":11},"end":{"row":55,"column":12},"action":"insert","lines":[" "]},{"start":{"row":56,"column":4},"end":{"row":56,"column":8},"action":"insert","lines":["    "]},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"insert","lines":["    "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":3},"action":"insert","lines":["   "]},{"start":{"row":58,"column":11},"end":{"row":58,"column":12},"action":"insert","lines":[" "]},{"start":{"row":60,"column":4},"end":{"row":60,"column":8},"action":"insert","lines":["    "]},{"start":{"row":61,"column":0},"end":{"row":61,"column":1},"action":"insert","lines":[" "]},{"start":{"row":61,"column":5},"end":{"row":61,"column":8},"action":"insert","lines":["   "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":3},"action":"insert","lines":["   "]},{"start":{"row":62,"column":11},"end":{"row":62,"column":12},"action":"insert","lines":[" "]},{"start":{"row":63,"column":4},"end":{"row":63,"column":8},"action":"insert","lines":["    "]},{"start":{"row":64,"column":0},"end":{"row":64,"column":4},"action":"insert","lines":["    "]},{"start":{"row":66,"column":0},"end":{"row":66,"column":4},"action":"insert","lines":["    "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"insert","lines":["    "]},{"start":{"row":69,"column":4},"end":{"row":69,"column":8},"action":"insert","lines":["    "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":2},"action":"insert","lines":["  "]},{"start":{"row":70,"column":6},"end":{"row":70,"column":8},"action":"insert","lines":["  "]},{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"insert","lines":["    "]},{"start":{"row":72,"column":4},"end":{"row":72,"column":8},"action":"insert","lines":["    "]},{"start":{"row":73,"column":0},"end":{"row":73,"column":2},"action":"insert","lines":["  "]},{"start":{"row":73,"column":6},"end":{"row":73,"column":8},"action":"insert","lines":["  "]},{"start":{"row":74,"column":0},"end":{"row":74,"column":4},"action":"insert","lines":["    "]},{"start":{"row":75,"column":4},"end":{"row":75,"column":8},"action":"insert","lines":["    "]},{"start":{"row":76,"column":0},"end":{"row":76,"column":2},"action":"insert","lines":["  "]},{"start":{"row":76,"column":6},"end":{"row":76,"column":8},"action":"insert","lines":["  "]},{"start":{"row":77,"column":0},"end":{"row":77,"column":4},"action":"insert","lines":["    "]},{"start":{"row":78,"column":4},"end":{"row":78,"column":8},"action":"insert","lines":["    "]},{"start":{"row":81,"column":0},"end":{"row":82,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"remove","lines":[" "],"id":57},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"remove","lines":["/"]},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"remove","lines":["/"]}],[{"start":{"row":16,"column":2},"end":{"row":19,"column":70},"action":"remove","lines":["  // var dim = ndx.dimension(dc.pluck('Name'));","","","    //var group = dim.group().reduceSum(dc.pluck('RuntimeInMinutes'));"],"id":58},{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"remove","lines":[" "]}],[{"start":{"row":16,"column":1},"end":{"row":17,"column":0},"action":"remove","lines":["",""],"id":59},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":60},{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["<"],"id":61},{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["-"]},{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["-"]}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"remove","lines":["-"],"id":62},{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"remove","lines":["-"]}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["!"],"id":63},{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["-"]},{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["-"]}],[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"remove","lines":["-"],"id":64},{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"remove","lines":["-"]},{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"remove","lines":["!"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":["<"]}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["/"],"id":65},{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["-"],"id":66},{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["-"]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["-"]},{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["-"]},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["-"]},{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["-"]},{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["-"]},{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["-"]},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["-"]},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["-"]},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["-"]},{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["-"]},{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["-"]},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["-"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["-"]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["-"]},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["-"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":["-"]},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["-"]},{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"insert","lines":["-"]},{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["-"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["-"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["-"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":["-"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["-"]},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["-"]},{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":["-"]},{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":["-"]},{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"insert","lines":["-"]},{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"insert","lines":["-"]},{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"insert","lines":["-"]},{"start":{"row":14,"column":33},"end":{"row":14,"column":34},"action":"insert","lines":["-"]},{"start":{"row":14,"column":34},"end":{"row":14,"column":35},"action":"insert","lines":["-"]},{"start":{"row":14,"column":35},"end":{"row":14,"column":36},"action":"insert","lines":["-"]},{"start":{"row":14,"column":36},"end":{"row":14,"column":37},"action":"insert","lines":["-"]},{"start":{"row":14,"column":37},"end":{"row":14,"column":38},"action":"insert","lines":["-"]},{"start":{"row":14,"column":38},"end":{"row":14,"column":39},"action":"insert","lines":["-"]},{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"insert","lines":["-"]},{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"insert","lines":["-"]},{"start":{"row":14,"column":41},"end":{"row":14,"column":42},"action":"insert","lines":["-"]},{"start":{"row":14,"column":42},"end":{"row":14,"column":43},"action":"insert","lines":["-"]},{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"insert","lines":["-"]},{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["-"]},{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"insert","lines":["-"]},{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"insert","lines":["-"]},{"start":{"row":14,"column":47},"end":{"row":14,"column":48},"action":"insert","lines":["-"]},{"start":{"row":14,"column":48},"end":{"row":14,"column":49},"action":"insert","lines":["-"]},{"start":{"row":14,"column":49},"end":{"row":14,"column":50},"action":"insert","lines":["-"]},{"start":{"row":14,"column":50},"end":{"row":14,"column":51},"action":"insert","lines":["-"]}],[{"start":{"row":14,"column":51},"end":{"row":14,"column":52},"action":"insert","lines":["-"],"id":67},{"start":{"row":14,"column":52},"end":{"row":14,"column":53},"action":"insert","lines":["-"]},{"start":{"row":14,"column":53},"end":{"row":14,"column":54},"action":"insert","lines":["-"]}],[{"start":{"row":14,"column":54},"end":{"row":14,"column":55},"action":"insert","lines":[" "],"id":68},{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["m"]},{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":["o"]},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["v"]}],[{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":["i"],"id":69},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["e"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"remove","lines":["s"],"id":70},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"remove","lines":["e"]},{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"remove","lines":["i"]},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"remove","lines":["v"]},{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"remove","lines":["o"]},{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"remove","lines":["m"]}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["R"],"id":71},{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":["u"]},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["n"]},{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":["t"]},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["i"]}],[{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":["m"],"id":72},{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":62},"end":{"row":14,"column":63},"action":"insert","lines":[" "],"id":73},{"start":{"row":14,"column":63},"end":{"row":14,"column":64},"action":"insert","lines":["I"]},{"start":{"row":14,"column":64},"end":{"row":14,"column":65},"action":"insert","lines":["n"]},{"start":{"row":14,"column":65},"end":{"row":14,"column":66},"action":"insert","lines":["f"]},{"start":{"row":14,"column":66},"end":{"row":14,"column":67},"action":"insert","lines":["o"]}],[{"start":{"row":14,"column":67},"end":{"row":14,"column":68},"action":"insert","lines":["r"],"id":74},{"start":{"row":14,"column":68},"end":{"row":14,"column":69},"action":"insert","lines":["a"]},{"start":{"row":14,"column":69},"end":{"row":14,"column":70},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":70},"end":{"row":14,"column":71},"action":"insert","lines":["t"],"id":75}],[{"start":{"row":14,"column":70},"end":{"row":14,"column":71},"action":"remove","lines":["t"],"id":76},{"start":{"row":14,"column":69},"end":{"row":14,"column":70},"action":"remove","lines":["m"]},{"start":{"row":14,"column":68},"end":{"row":14,"column":69},"action":"remove","lines":["a"]}],[{"start":{"row":14,"column":68},"end":{"row":14,"column":69},"action":"insert","lines":["m"],"id":77},{"start":{"row":14,"column":69},"end":{"row":14,"column":70},"action":"insert","lines":["a"]},{"start":{"row":14,"column":70},"end":{"row":14,"column":71},"action":"insert","lines":["t"]},{"start":{"row":14,"column":71},"end":{"row":14,"column":72},"action":"insert","lines":["i"]},{"start":{"row":14,"column":72},"end":{"row":14,"column":73},"action":"insert","lines":["o"]},{"start":{"row":14,"column":73},"end":{"row":14,"column":74},"action":"insert","lines":["n"]}],[{"start":{"row":14,"column":74},"end":{"row":14,"column":75},"action":"insert","lines":["-"],"id":78},{"start":{"row":14,"column":75},"end":{"row":14,"column":76},"action":"insert","lines":["-"]},{"start":{"row":14,"column":76},"end":{"row":14,"column":77},"action":"insert","lines":["-"]},{"start":{"row":14,"column":77},"end":{"row":14,"column":78},"action":"insert","lines":["-"]},{"start":{"row":14,"column":78},"end":{"row":14,"column":79},"action":"insert","lines":["-"]},{"start":{"row":14,"column":79},"end":{"row":14,"column":80},"action":"insert","lines":["-"]},{"start":{"row":14,"column":80},"end":{"row":14,"column":81},"action":"insert","lines":["-"]},{"start":{"row":14,"column":81},"end":{"row":14,"column":82},"action":"insert","lines":["-"]},{"start":{"row":14,"column":82},"end":{"row":14,"column":83},"action":"insert","lines":["-"]},{"start":{"row":14,"column":83},"end":{"row":14,"column":84},"action":"insert","lines":["-"]},{"start":{"row":14,"column":84},"end":{"row":14,"column":85},"action":"insert","lines":["-"]},{"start":{"row":14,"column":85},"end":{"row":14,"column":86},"action":"insert","lines":["-"]},{"start":{"row":14,"column":86},"end":{"row":14,"column":87},"action":"insert","lines":["-"]},{"start":{"row":14,"column":87},"end":{"row":14,"column":88},"action":"insert","lines":["-"]},{"start":{"row":14,"column":88},"end":{"row":14,"column":89},"action":"insert","lines":["-"]},{"start":{"row":14,"column":89},"end":{"row":14,"column":90},"action":"insert","lines":["-"]},{"start":{"row":14,"column":90},"end":{"row":14,"column":91},"action":"insert","lines":["-"]},{"start":{"row":14,"column":91},"end":{"row":14,"column":92},"action":"insert","lines":["-"]},{"start":{"row":14,"column":92},"end":{"row":14,"column":93},"action":"insert","lines":["-"]},{"start":{"row":14,"column":93},"end":{"row":14,"column":94},"action":"insert","lines":["-"]},{"start":{"row":14,"column":94},"end":{"row":14,"column":95},"action":"insert","lines":["-"]},{"start":{"row":14,"column":95},"end":{"row":14,"column":96},"action":"insert","lines":["-"]},{"start":{"row":14,"column":96},"end":{"row":14,"column":97},"action":"insert","lines":["-"]},{"start":{"row":14,"column":97},"end":{"row":14,"column":98},"action":"insert","lines":["-"]},{"start":{"row":14,"column":98},"end":{"row":14,"column":99},"action":"insert","lines":["-"]},{"start":{"row":14,"column":99},"end":{"row":14,"column":100},"action":"insert","lines":["-"]},{"start":{"row":14,"column":100},"end":{"row":14,"column":101},"action":"insert","lines":["-"]},{"start":{"row":14,"column":101},"end":{"row":14,"column":102},"action":"insert","lines":["-"]},{"start":{"row":14,"column":102},"end":{"row":14,"column":103},"action":"insert","lines":["-"]},{"start":{"row":14,"column":103},"end":{"row":14,"column":104},"action":"insert","lines":["-"]},{"start":{"row":14,"column":104},"end":{"row":14,"column":105},"action":"insert","lines":["-"]},{"start":{"row":14,"column":105},"end":{"row":14,"column":106},"action":"insert","lines":["-"]},{"start":{"row":14,"column":106},"end":{"row":14,"column":107},"action":"insert","lines":["-"]}],[{"start":{"row":47,"column":1},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":79},{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":80}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":107},"action":"insert","lines":["//---------------------------------------------------- Runtime Information---------------------------------"],"id":81}],[{"start":{"row":49,"column":74},"end":{"row":49,"column":75},"action":"insert","lines":[" "],"id":82},{"start":{"row":49,"column":75},"end":{"row":49,"column":76},"action":"insert","lines":["e"]},{"start":{"row":49,"column":76},"end":{"row":49,"column":77},"action":"insert","lines":["n"]},{"start":{"row":49,"column":77},"end":{"row":49,"column":78},"action":"insert","lines":["d"]}],[{"start":{"row":50,"column":0},"end":{"row":51,"column":0},"action":"insert","lines":["",""],"id":83},{"start":{"row":51,"column":0},"end":{"row":52,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":107},"action":"insert","lines":["//---------------------------------------------------- Runtime Information---------------------------------"],"id":84}],[{"start":{"row":52,"column":55},"end":{"row":52,"column":62},"action":"remove","lines":["Runtime"],"id":85},{"start":{"row":52,"column":55},"end":{"row":52,"column":56},"action":"insert","lines":["b"]},{"start":{"row":52,"column":56},"end":{"row":52,"column":57},"action":"insert","lines":["u"]},{"start":{"row":52,"column":57},"end":{"row":52,"column":58},"action":"insert","lines":["d"]},{"start":{"row":52,"column":58},"end":{"row":52,"column":59},"action":"insert","lines":["g"]},{"start":{"row":52,"column":59},"end":{"row":52,"column":60},"action":"insert","lines":["e"]},{"start":{"row":52,"column":60},"end":{"row":52,"column":61},"action":"insert","lines":["t"]}],[{"start":{"row":84,"column":0},"end":{"row":84,"column":107},"action":"insert","lines":["//---------------------------------------------------- Runtime Information---------------------------------"],"id":86}],[{"start":{"row":84,"column":74},"end":{"row":84,"column":75},"action":"insert","lines":[" "],"id":87},{"start":{"row":84,"column":75},"end":{"row":84,"column":76},"action":"insert","lines":["e"]},{"start":{"row":84,"column":76},"end":{"row":84,"column":77},"action":"insert","lines":["n"]},{"start":{"row":84,"column":77},"end":{"row":84,"column":78},"action":"insert","lines":["d"]}],[{"start":{"row":84,"column":55},"end":{"row":84,"column":62},"action":"remove","lines":["Runtime"],"id":88},{"start":{"row":84,"column":55},"end":{"row":84,"column":56},"action":"insert","lines":["b"]},{"start":{"row":84,"column":56},"end":{"row":84,"column":57},"action":"insert","lines":["u"]},{"start":{"row":84,"column":57},"end":{"row":84,"column":58},"action":"insert","lines":["d"]},{"start":{"row":84,"column":58},"end":{"row":84,"column":59},"action":"insert","lines":["g"]},{"start":{"row":84,"column":59},"end":{"row":84,"column":60},"action":"insert","lines":["e"]},{"start":{"row":84,"column":60},"end":{"row":84,"column":61},"action":"insert","lines":["t"]}],[{"start":{"row":84,"column":110},"end":{"row":85,"column":0},"action":"insert","lines":["",""],"id":89},{"start":{"row":85,"column":0},"end":{"row":86,"column":0},"action":"insert","lines":["",""]},{"start":{"row":86,"column":0},"end":{"row":87,"column":0},"action":"insert","lines":["",""]},{"start":{"row":87,"column":0},"end":{"row":88,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":86,"column":0},"end":{"row":115,"column":1},"action":"insert","lines":["function budgets(ndx) {","","    var minus_series = ndx.dimension(function(d) {","        if (d.Name === 'The Lord of the Rings Series') {","            return null;","        }","        if (d.Name === 'The Hobbit Series') {","            return null;","","        }","        else {","            return d.Name;","        }","    });","","    var group = minus_series.group().reduceSum(dc.pluck('BudgetInMillions'));","","    dc.barChart('#budgets')","        .width(400)","        .height(300)","        .margins({ top: 10, right: 50, bottom: 30, left: 50 })","        .dimension(minus_series)","        .group(group)","        .transitionDuration(500)","        .x(d3.scale.ordinal())","        .xUnits(dc.units.ordinal)","        .xAxisLabel('Movies')","        .yAxis().ticks(10);","","}"],"id":90}],[{"start":{"row":86,"column":9},"end":{"row":86,"column":16},"action":"remove","lines":["budgets"],"id":91},{"start":{"row":86,"column":9},"end":{"row":86,"column":10},"action":"insert","lines":["r"]},{"start":{"row":86,"column":10},"end":{"row":86,"column":11},"action":"insert","lines":["e"]},{"start":{"row":86,"column":11},"end":{"row":86,"column":12},"action":"insert","lines":["v"]},{"start":{"row":86,"column":12},"end":{"row":86,"column":13},"action":"insert","lines":["e"]},{"start":{"row":86,"column":13},"end":{"row":86,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":86,"column":14},"end":{"row":86,"column":15},"action":"insert","lines":["u"],"id":92},{"start":{"row":86,"column":15},"end":{"row":86,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":17},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":93},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":16},"action":"insert","lines":["revenue(ndx)"],"id":94}],[{"start":{"row":87,"column":0},"end":{"row":88,"column":0},"action":"insert","lines":["",""],"id":95},{"start":{"row":88,"column":0},"end":{"row":89,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":85,"column":110},"end":{"row":86,"column":0},"action":"insert","lines":["",""],"id":96},{"start":{"row":86,"column":0},"end":{"row":87,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":87,"column":0},"end":{"row":87,"column":110},"action":"insert","lines":["//---------------------------------------------------- budget Information end---------------------------------"],"id":97}],[{"start":{"row":87,"column":55},"end":{"row":87,"column":61},"action":"remove","lines":["budget"],"id":98},{"start":{"row":87,"column":55},"end":{"row":87,"column":56},"action":"insert","lines":["r"]},{"start":{"row":87,"column":56},"end":{"row":87,"column":57},"action":"insert","lines":["e"]},{"start":{"row":87,"column":57},"end":{"row":87,"column":58},"action":"insert","lines":["v"]},{"start":{"row":87,"column":58},"end":{"row":87,"column":59},"action":"insert","lines":["e"]}],[{"start":{"row":87,"column":59},"end":{"row":87,"column":60},"action":"insert","lines":["n"],"id":99},{"start":{"row":87,"column":60},"end":{"row":87,"column":61},"action":"insert","lines":["u"]},{"start":{"row":87,"column":61},"end":{"row":87,"column":62},"action":"insert","lines":["e"]}],[{"start":{"row":87,"column":75},"end":{"row":87,"column":78},"action":"remove","lines":["end"],"id":100}],[{"start":{"row":106,"column":57},"end":{"row":106,"column":73},"action":"remove","lines":["BudgetInMillions"],"id":101},{"start":{"row":106,"column":57},"end":{"row":106,"column":83},"action":"insert","lines":["BoxOfficeRevenueInMillions"]}],[{"start":{"row":108,"column":18},"end":{"row":108,"column":25},"action":"remove","lines":["budgets"],"id":102},{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"insert","lines":["r"]},{"start":{"row":108,"column":19},"end":{"row":108,"column":20},"action":"insert","lines":["e"]},{"start":{"row":108,"column":20},"end":{"row":108,"column":21},"action":"insert","lines":["v"]},{"start":{"row":108,"column":21},"end":{"row":108,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":108,"column":18},"end":{"row":108,"column":22},"action":"remove","lines":["reve"],"id":103},{"start":{"row":108,"column":18},"end":{"row":108,"column":25},"action":"insert","lines":["revenue"]}],[{"start":{"row":121,"column":0},"end":{"row":122,"column":0},"action":"insert","lines":["",""],"id":104},{"start":{"row":122,"column":0},"end":{"row":123,"column":0},"action":"insert","lines":["",""]},{"start":{"row":123,"column":0},"end":{"row":123,"column":1},"action":"insert","lines":["c"]},{"start":{"row":123,"column":1},"end":{"row":123,"column":2},"action":"insert","lines":["o"]},{"start":{"row":123,"column":2},"end":{"row":123,"column":3},"action":"insert","lines":["n"]}],[{"start":{"row":123,"column":3},"end":{"row":123,"column":4},"action":"insert","lines":["s"],"id":105},{"start":{"row":123,"column":4},"end":{"row":123,"column":5},"action":"insert","lines":["o"]},{"start":{"row":123,"column":5},"end":{"row":123,"column":6},"action":"insert","lines":["l"]},{"start":{"row":123,"column":6},"end":{"row":123,"column":7},"action":"insert","lines":["."]}],[{"start":{"row":123,"column":7},"end":{"row":123,"column":8},"action":"insert","lines":["l"],"id":106},{"start":{"row":123,"column":8},"end":{"row":123,"column":9},"action":"insert","lines":["o"]},{"start":{"row":123,"column":9},"end":{"row":123,"column":10},"action":"insert","lines":["g"]}],[{"start":{"row":123,"column":10},"end":{"row":123,"column":12},"action":"insert","lines":["()"],"id":107}],[{"start":{"row":123,"column":11},"end":{"row":123,"column":13},"action":"insert","lines":["''"],"id":108}],[{"start":{"row":123,"column":12},"end":{"row":123,"column":13},"action":"insert","lines":["m"],"id":109}],[{"start":{"row":123,"column":12},"end":{"row":123,"column":13},"action":"remove","lines":["m"],"id":110},{"start":{"row":123,"column":12},"end":{"row":123,"column":24},"action":"insert","lines":["minus_series"]}],[{"start":{"row":123,"column":26},"end":{"row":123,"column":27},"action":"insert","lines":[";"],"id":111}],[{"start":{"row":123,"column":6},"end":{"row":123,"column":7},"action":"insert","lines":["e"],"id":112}],[{"start":{"row":123,"column":28},"end":{"row":123,"column":29},"action":"insert","lines":["0"],"id":113}],[{"start":{"row":123,"column":28},"end":{"row":123,"column":29},"action":"remove","lines":["0"],"id":114}],[{"start":{"row":123,"column":25},"end":{"row":123,"column":26},"action":"remove","lines":["'"],"id":115}],[{"start":{"row":123,"column":12},"end":{"row":123,"column":13},"action":"remove","lines":["'"],"id":116}],[{"start":{"row":123,"column":0},"end":{"row":123,"column":26},"action":"remove","lines":["console.log(minus_series);"],"id":117}],[{"start":{"row":119,"column":0},"end":{"row":120,"column":0},"action":"insert","lines":["",""],"id":118},{"start":{"row":120,"column":0},"end":{"row":121,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":121,"column":0},"end":{"row":121,"column":26},"action":"insert","lines":["console.log(minus_series);"],"id":119}],[{"start":{"row":94,"column":8},"end":{"row":95,"column":0},"action":"insert","lines":["",""],"id":120},{"start":{"row":95,"column":0},"end":{"row":95,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":94,"column":8},"end":{"row":95,"column":8},"action":"remove","lines":["","        "],"id":121}]]},"ace":{"folds":[],"scrolltop":1238.3125,"scrollleft":0,"selection":{"start":{"row":95,"column":23},"end":{"row":95,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":85,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1562147453126,"hash":"9018580d0828d1f66b2a14ff30301410bba5b9e2"}