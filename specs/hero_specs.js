var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');

describe("Hero", function(){

  var knight;

  before(function(){
    knight = new Hero("Fred", "Pork");
  })

  it("The hero has a name", function(){
    assert.equal("Fred", knight.name);
  })

  it("The hero has health points", function(){
    assert.equal(100, knight.health);
  })

  it("The hero has a favourite food", function(){
    assert.equal("Pork", knight.favouriteFood);
  })

  it("The hero can say their name", function(){
    assert.equal("I am Fred, the Great", knight.talk());
  })

})

describe("Hero Eating", function(){

  var knight;
  var cheese;
  var pork;

  before(function(){
    knight = new Hero("Fred", "Pork");
    pork = new Food("Pork", 20);
    cheese = new Food("Cheese", 10);
  })

  beforeEach(function(){
    knight.reset();
  })

  it("The hero can eat", function(){
    knight.eat(cheese);
    assert.equal(110, knight.health);
  })

  it("The hero gets more health from their favourite food", function(){
    knight.eat(pork);
    assert.equal(130, knight.health);
  })

})

describe("Hero eating poisoned food", function(){

  var knight;
  var cheese;
  var rodent;

  before(function(){
    knight = new Hero("Fred", "Pork");
    cheese = new Food("Cheese", 10);
    rodent = new Rat("Steve");
  })

  it("hero loses health eating a poisoned food", function(){
    rodent.touch(cheese);
    knight.eat(cheese);
    assert.equal(90, knight.health);
  })

})