var expect = require('chai').expect

var getPrimeFactor = require('../getPrimeFactor')

describe('prime factor', function(){
  it('should empty for 1', function(){
    expect(getPrimeFactor(1)).to.be.empty
  })
  it('should [2] for 2', function(){
    expect(getPrimeFactor(2)).to.eql([2])
  })
  it('should [3] for 3', function(){
    expect(getPrimeFactor(3)).to.eql([3])
  })
  it('should [2, 2] for 4', function(){
    expect(getPrimeFactor(4)).to.eql([2, 2])
  })
})
