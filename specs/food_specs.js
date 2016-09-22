var assert = require('assert');
var Food = require('../food.js');

describe("Food", function(){

  var cheese;

  before(function(){
    cheese = new Food("Cheese", 10);
  }),

  it("The food has a name", function(){
    assert.equal("Cheese", cheese.name);
  })

  it("The food has a replenishment value", function(){
    assert.equal(10, cheese.replenishValue);
  })

})