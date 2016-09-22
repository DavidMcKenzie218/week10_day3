var assert = require('assert');
var Table = require('../table.js');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');

describe("Table", function(){

  var playTable;
  var jim;
  var cheese;

  before(function(){
    playTable = new Table();
    jim = new Hero("Jim", "Hotdogs");
    cheese = new Food("Cheese", 10);
  })

  beforeEach(function(){
    playTable.reset();
  })

  it("The table has no one sat at it", function(){
    assert.equal(0, playTable.participants.length);
  })

  it("The table has no food", function(){
    assert.equal(0, playTable.foodPile.length);
  })

  it("The table allows someone to sit down", function(){
    playTable.sit(jim);
    assert.equal(1, playTable.participants.length);
  })

  it("The table can add food to the food pile", function(){
    playTable.addFood(cheese);
    assert.equal(1, playTable.foodPile.length);
  })

})

describe("Play Game", function(){

  var playTable;
  var jim;
  var cheese;
  var hotdog;
  var rodent;

  before(function(){
    playTable = new Table();
    jim = new Hero("Jim", "Hotdogs");
    cheese = new Food("Cheese", 10);
    hotdog = new Food("Hotdogs", 10);
    rodent = new Rat("Frankie");
  })

  beforeEach(function(){
    playTable.reset();
    playTable.sit(jim);
    playTable.addFood(cheese);
    playTable.addFood(hotdog);
    playTable.addFood(cheese);
  })

  it("Food can be chosen", function(){
    var foodChosen = playTable.pickFood(0);
    assert.equal("Cheese", foodChosen.name);
  })

  it("Hero can choose food and eat it", function(){
    var foodChosen = playTable.pickFood(0);
    jim.eat(foodChosen);
    assert.equal(110, jim.health);
  })

  it("Food is removed from the foodPile and replaced by 'taken'", function(){
    var foodChosen = playTable.pickFood(0);
    var secondChoice = playTable.pickFood(0);
    assert.equal("This has already been taken", secondChoice);
  })

  it("Food pile can be shuffled", function(){
    var originalFoodPile = playTable.foodPile;
    var newFoodPile = playTable.shuffleFood();
    assert.notDeepEqual(originalFoodPile, newFoodPile);
  })

})