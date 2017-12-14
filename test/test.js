'use strict';

const expect = require('chai').expect;
const dumbImagePreloader = require('../index');

describe('#dumbImagePreloader', () => {
  it('should return `false` if empty array or undefined is provided', () => {
    const imgURLs = [];
    expect(dumbImagePreloader(imgURLs)).to.equal(false);
    expect(dumbImagePreloader()).to.equal(false);
  });
});
