
// FILL THIS OUT

const { Item } = require("./item");

class Food extends Item{
  constructor(name, description) {
    super(name, description);
  }
}

let food = new Food("sandwich", "a delicious sandwich");
console.log(food);
module.exports = {
  Food,
};
