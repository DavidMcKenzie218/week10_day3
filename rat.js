var Rat = function(name){
  this.name = name;
  this.whom = "rat";
}

Rat.prototype = {
  touch: function(food){
    food.touched(this.whom);
  }
}

module.exports = Rat;