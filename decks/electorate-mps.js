exports.generate = function() {
    //Read in JSON
    var mp_json = require(__dirname + '/electorate-mps.json');
    //Strip Useless & ReFormat
    var newJSON = {};
    newJSON.name = "Electorate MPs";
    inputCategories = [];
    newJSON.categories = [];
    var mp_fields = [];
    for(var i in mp_json[0])
    mp_fields.push([i, mp_json[0][i]]);
    for (i = 0; i < mp_fields.length; i++) {
        if(mp_fields[i][0] != "Name" && mp_fields[i][0] != "Description") {
            newJSON.categories.push(mp_fields[i][0]);
            inputCategories.push(mp_fields[i][0]);
        }
    }
    newJSON.cards = [];
    for (i = 0; i <  mp_json.length; i++) {
        var card = {
            id: newJSON.cards.length,
            name:  mp_json[i].Name,
            description: mp_json[i].Description,
            categories: []
        };
        for (j = 0; j < inputCategories.length; j++) {
            var cat =  mp_json[i][inputCategories[j]];
            card.categories.push(cat);
        }
        newJSON.cards.push(card);
    }
    return newJSON;
}
