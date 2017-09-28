'use strict';

const process = require('process');

const lib = require('../lib');

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
  console.log('I passed in csv');
} else if (tsv) {
  console.log('I passed in tsv');
} else {
  lib.UsageMessage();
  process.exit(1);
}
