const assert = require('assert');git 
const toReadable = require('../src/index');


it('Should return \'zero\' when 0 given', () => {
  const readable = toReadable(0);
  assert.equal(readable, 'zero');
});

it('Should return \'one\' when 1 given', () => {
  const readable = toReadable(1);
  assert.equal(readable, 'one');
});

it('Should return \'two\' when 2 given', () => {
  const readable = toReadable(2);
  assert.equal(readable, 'two');
});