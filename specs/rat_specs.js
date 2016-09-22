var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js')

describe("Rat", function(){

  var steve;

  before(function(){
    steve = new Rat("Steve");
  })

  it("Rat has a name", function(){
    assert.equal("Steve", steve.name);
  })

})

describe("Rat messing with food", function(){

  var steve;
  var cheese;

  before(function(){
    steve = new Rat("Steve");
    cheese = new Food("Cheese", 10);
  })

  it("Rat can touch food", function(){
    steve.touch(cheese);
    assert.equal(true, cheese.beenPoisoned);
  })

})