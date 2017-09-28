'use strict';

const {
  usage
} = require('../constants');

function UsageMessage() {
  console.log(`
Usage:	convert-to-json [options]

A small utility to convert tsv and csv to json

Options:
  --tsv-file  Path to tsv file
  --csv-file  Path to csv file
  `);
}

module.exports = {
  UsageMessage: UsageMessage
};
