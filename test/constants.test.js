'use strict';

const test = require('ava');

const {
  usage,
  utf8
} = require('../constants');

test('usage should return values', t => {
  t.plan(3);
  const values = [
    'Please pass in --tsv-file option',
    'Please pass in --csv-file option'
  ];
  Object.keys(usage).map((val, index) => {
    t.is(usage[val], values[index]);
  });
  t.is(utf8, 'utf8');
});
