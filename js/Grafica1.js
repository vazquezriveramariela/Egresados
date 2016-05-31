
var chart = c3.generate({
    data: {
        // iris data from R
   
   columns: [
            
           ["Primaria", 14909419],
            ["Secundaria", 6167424],
            ["Preparatoria", 3950126],
        ],
        type : 'pie',
       onclick: function (d, i) { console.log("onclick", d, i); },
       onmouseover: function (d, i) { console.log("onmouseover", d, i); },
       onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});



setTimeout(function () {
    chart.unload({
        ids: 'Primaria'
    });
    chart.unload({
        ids: 'Secundaria'
    });
    chart.unload({
       ids:'Preparatoria' 
    });
}, 200000);







