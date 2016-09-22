var Hero = function(name, food){
  this.name = name;
  this.health = 100;
  this.favouriteFood = food;
  this.whom = "hero";
}

Hero.prototype = {
  talk: function(){
    return "I am " + this.name + ", the Great";
  },
  reset: function(){
    this.health = 100;
  },
  eat: function(food){
    if(food.beenPoisoned){
      this.poisoned(food);
    }else{
      this.replenish(food);
    }
    
  },
  replenish: function(food){
    var foodEaten = food;
    if(foodEaten.name === this.favouriteFood){
      this.health += (foodEaten.replenishValue * 1.5);
    }else{
      this.health += foodEaten.replenishValue;
    }
  },
  poisoned: function(food){
    this.health -= food.replenishValue;
  }
}

module.exports = Hero