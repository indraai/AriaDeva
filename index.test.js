// Copyright (c)2023 Quinn Michaels
// AriaAI test file

const {expect} = require('chai')
const :key: = require('./index.js');

describe(aria.me.name, () => {
  beforeEach(() => {
    return aria.init()
  });
  it('Check the DEVA Object', () => {
    expect(aria).to.be.an('object');
    expect(aria).to.have.property('agent');
    expect(aria).to.have.property('vars');
    expect(aria).to.have.property('listeners');
    expect(aria).to.have.property('methods');
    expect(aria).to.have.property('modules');
  });
})
