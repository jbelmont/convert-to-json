'use strict';

const process = require('process');
const fs = require('fs');

const lib = require('../lib');
const utf8 = require('../constants').utf8;

const args = process.argv.slice(2);

const tsvOrCsv = args.some(arg => {
  return arg === '--tsv-file' || arg === '--csv-file';
});

if (!tsvOrCsv) {
  lib.UsageMessage();
  process.exit(1);
}

const csvIndex = args.findIndex(arg => arg === '--csv-file');
let csv, tsv;
if (csvIndex > -1) {
  csv  = args.slice(csvIndex);
}

const tsvIndex = args.findIndex(arg => arg === '--tsv-file');
if (tsvIndex > -1) {
  tsv = args.slice(tsvIndex);
}
if (csv) {
  const csvPath = csv[1];
  const fileContents = [];
  fileReader(csvPath, function(err, data) {
    if (err) throw err;
    const [
      language,
      frequency
    ] = data.split(',');
    console.log(language);
    console.log(frequency);
  });
} else if (tsv) {
  const tsvPath = tsv[1];
  console.log(tsvPath);
} else {
  lib.UsageMessage();
  process.exit(1);
}

function fileReader(filePath, cb) {
  fs.readFile(`${__dirname}/../${filePath}`, utf8, function(err, data) {
    if (err) return cb(err);
    cb(null, data);
  });
}
