var Table = function(){
  this.participants = [];
  this.foodPile = [];
}

Table.prototype = {
  reset: function(){
    this.participants = [];
    this.foodPile = [];
  },
  sit: function(person){
    this.participants.push(person);
  },
  addFood: function(food){
    this.foodPile.push(food);
  },
  pickFood: function(choice){
    var foodChosen = this.foodPile[choice];
    this.foodPile[choice] = "This has already been taken";
    return foodChosen;
  }, shuffleFood: function(){
    var currentIndex = this.foodPile.length;
    var temporaryValue;
    var randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.foodPile[currentIndex];
        this.foodPile[currentIndex] = this.foodPile[randomIndex];
        this.foodPile[randomIndex] = temporaryValue;
      }
  }
}

module.exports = Table;