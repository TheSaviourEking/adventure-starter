const { getItemByName, moveItem } = require("../_sharedMethods");
const { Food } = require("./food");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        let currentRoomItems = this.currentRoom.items;
        moveItem(itemName, currentRoomItems, this.items);
    }

    dropItem(itemName) {
        moveItem(itemName, this.items, this.currentRoom.items)
    }

    eatItem(itemName) {
        let item = getItemByName(this.items, itemName);
        if (item instanceof Food) {
            moveItem(itemName, this.items, []);
        }
    }

    getItemByName(name) {
        return getItemByName(this.items, name)
    }
}

module.exports = {
    Player,
};
