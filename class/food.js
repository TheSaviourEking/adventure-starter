
// FILL THIS OUT
/***************TEST**************/
const { Item } = require("./item");
const {Room} = require('./room');
const {Player} = require('./player')

class Food extends Item {
  constructor(name, description) {
    super(name, description);
  }
}

let food = new Food("sandwich", "a delicious sandwich");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

player.items.push(food);
player.eatItem("sandwich");

module.exports = {
  Food,
};
