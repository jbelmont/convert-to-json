'use strict';

const test = require('ava');

const usageMessage = require('../lib').UsageMessage;

test('should print out message to stdout', t => {
  t.plan(0);
  usageMessage();
});
