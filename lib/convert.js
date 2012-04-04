var fs = require('fs'),
    path = require('path'),
    spawn = require('child_process').spawn,
    exec = require('child_process').exec;

var inputDir = process.argv[2];
var outputDir = process.argv[3] || path.resolve(inputDir, '_output');
var size = process.argv[4] || 15;
var prefix = '-resized';

try {
    var dir = fs.statSync(outputDir);
} catch(e) {
    fs.mkdirSync(outputDir);
} finally {
    fs.readdir(inputDir, function(err, files) {
        var inputFile, outputFile;
        var command;

        function queue(item) {
            inputFile = path.resolve(inputDir, item);
            outputFile = path.resolve(outputDir, item).replace('.CR2', prefix +'.jpg');

            command = 'dcraw -e '+ inputFile +' | convert '+ inputFile.replace('.CR2', '.thumb.jpg') +' -resize '+ size +'% '+ outputFile;
            
            if(files.length <= 0) {
                return;
            }

            exec(command, function(err, stdout, stderr) {
                console.log('export to ', outputFile);
                queue(files.shift());
            });
        }

        queue(files.shift());
    });
}//end finally

