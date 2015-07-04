    var rw_csv = __dirname + '/electorate-mps.csv';
    //Import CSV
    var fs = require("fs"); 
    var Converter = require("csvtojson").Converter;
    var csvConverter = new Converter();
    //Export JSON
    var writeStream = fs.createWriteStream("electorate-mps.json");
    fs.createReadStream(rw_csv).pipe(csvConverter).pipe(writeStream);
