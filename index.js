var ls = require('ls');
var fs = require('fs');
exports.generate = function(dir) {
    if(dir === undefined || dir === null) {
        dir = __dirname;
    }
    fs.mkdir(dir);
    var decks = ls(__dirname + "/decks/*.js");
    for(var i = 0, len = decks.length; i < len; i++) {
        var json = require(decks[i].full).generate();
        var out = JSON.stringify(json, null, 2);
        var filename = json.name.replace(" ", "_").replace("[^a-zA-Z0-9]", "");
        fs.writeFile(dir + "/" + filename + ".json", out, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log(filename + " was saved!");
        });
    }
}
if(module.parent == null) {
    exports.generate();
}
