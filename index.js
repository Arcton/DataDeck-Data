var inJson = require('./region-census.json');
var fs = require('fs');

var out = process(inJson);

fs.writeFile("./out.json", out, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

function process(rc_json) {
    //Strip Useless & ReFormat
    var newJSON = {};
    newJSON.name = "Regions";
    inputCategories = [];
    newJSON.categories = [];
    for (i = 0; i < rc_json.fields.length; i++) {
        if(rc_json.fields[i].name != "Code" && rc_json.fields[i].name != "Name") {
            newJSON.categories.push(rc_json.fields[i].name);
            inputCategories.push(rc_json.fields[i].name);
        }
    }
    newJSON.cards = [];
    for (i = 0; i < rc_json.features.length; i++) {
        if(parseInt(rc_json.features[i].attributes.Code) < 500) {
            var card = {
                id: newJSON.cards.length,
                name: rc_json.features[i].attributes.Name,
                categories: []
            };
            for (j = 0; j < inputCategories.length; j++) {
                var cat = rc_json.features[i].attributes[inputCategories[j]];
                if(cat != "Code" && cat != "Name") {
                    card.categories.push(cat);
                }
            }
            newJSON.cards.push(card);
        }
    }

    return JSON.stringify(newJSON, null, 2);
}
