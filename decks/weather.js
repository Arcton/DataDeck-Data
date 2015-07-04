exports.generate = function() {
    //Read in JSON
    var rw_json = require(__dirname + '/region-weather-edited.json');
    //Strip Useless & ReFormat
    var newJSON = {};
    newJSON.name = "Weather";
    inputCategories = [];
    newJSON.categories = [];
    var rw_fields = [];
    for(var i in rw_json[0])
    rw_fields.push([i, rw_json[0][i]]);
    for (i = 0; i < rw_fields.length; i++) {
        if(i == 1 || i == 3 || i == 4 || i == 8) {
            newJSON.categories.push(rw_fields[i][0]);
            inputCategories.push(rw_fields[i][0]);
        }
    }
    newJSON.cards = [];
    for (i = 0; i < rw_json.length; i++) {
        var card = {
            id: newJSON.cards.length,
            name: rw_json[i].Location.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }),
            description: "",
            categories: []
        };
        for (j = 0; j < inputCategories.length; j++) {
            var cat = rw_json[i][inputCategories[j]];
            card.categories.push(cat);
        }
        console.log(card);
        newJSON.cards.push(card);
    }
    return newJSON;
}
