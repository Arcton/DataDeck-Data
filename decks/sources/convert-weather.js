    var rw_csv = __dirname + '/region-weather-edited.csv';
    //Import CSV
    var fs = require("fs"); 
    var Converter = require("csvtojson").Converter;
    var csvConverter = new Converter();
    //Export JSON
    var writeStream = fs.createWriteStream("region-weather-edited.json");
    fs.createReadStream(rw_csv).pipe(csvConverter).pipe(writeStream);
