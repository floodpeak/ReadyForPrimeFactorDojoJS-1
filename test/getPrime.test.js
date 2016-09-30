var expect = require('chai').expect

var getPrimeFactor = require('../getPrimeFactor')

describe('prime factor', function(){
  it('should empty for 1', function(){
    expect(getPrimeFactor(1)).to.be.empty
  })
})
