var Food = function(name, replenValue){
  this.name = name;
  this.replenishValue = replenValue;
  this.beenPoisoned = false;
}

Food.prototype = {
  touched: function(whom){
    if(whom === "rat"){
      this.beenPoisoned = true;
    }
  }
}

module.exports = Food;