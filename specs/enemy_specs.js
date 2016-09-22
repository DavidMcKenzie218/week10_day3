var assert = require('assert');
var Enemy = require('../enemy.js');
var Food = require('../food.js');
var Rat = require('../rat.js')

describe("Enemy", function(){

  var ogre;

  before(function(){
    ogre = new Enemy("Greg", "Goats");
  })

  it("The enemy has a name", function(){
    assert.equal("Greg", ogre.name);
  })

  it("The enemy has a favourite food", function(){
    assert.equal("Goats", ogre.favouriteFood);
  })

  it("The enemy has health points", function(){
    assert.equal(100, ogre.health);
  })

  it("The enemy can say his name", function(){
    assert.equal("I am Greg, the Dastardly", ogre.speak());
  })

})

describe("Enemy Eating", function(){

  var ogre;
  var cheese;
  var goat;

  before(function(){
    ogre = new Enemy("Greg", "Goats");
    cheese = new Food("Cheese", 20);
    goat = new Food("Goats", 40);
  })

  beforeEach(function(){
    ogre.reset();
  })

  it("The enemy can eat", function(){
    ogre.eat(cheese);
    assert.equal(120, ogre.health);
  })

  it("The enemy gets more health from their favourite food", function(){
    ogre.eat(goat);
    assert.equal(160, ogre.health);
  })

})

describe("Enemy eating poisoned food", function(){

  var ogre;
  var cheese;
  var rodent;

  before(function(){
    ogre = new Enemy("Greg", "Goats");
    cheese = new Food("Cheese", 20);
    rodent = new Rat("Jim");
  })

  it("enemy loosed helth eatinf poisoned food", function(){
    rodent.touch(cheese);
    ogre.eat(cheese);
    assert.equal(80, ogre.health);
  })

})