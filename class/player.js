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
        // return Array.isArray(this.currentRoom.items);
        for (let item of this.currentRoom.items) {
            let index = this.currentRoom.items.indexOf(item);

            if (index >= 0) { // start from 0 to prevent accidental removal of last element if item not in array
                if (item.name === itemName) {
                    this.items.push(item);
                    this.currentRoom.items.splice(index, 1);
                }
            }
        }

    }

    dropItem(itemName) {

        // Fill this in
        for (let item of this.items) {
            let index = this.items.indexOf(item);

            if (index >= 0) {
                if (item.name === itemName) {
                    this.currentRoom.items.push(item) // push to current room
                    this.items.splice(index, 1); // remove from available items
                }
            }
        }
    }

    eatItem(itemName) {
        // Fill this in
        for (let item of this.items) {
            if (item instanceof Food) {
                let index = this.items.indexOf(item);
                if (item.name === itemName) {
                    this.items.splice(index, 1);
                }
            }
        }
    }

    getItemByName(name) {

        // Fill this in
        let playersItems = this.items;
        for (let item of playersItems) {
            if (item.name === name) return item;
        }
    }
}

module.exports = {
    Player,
};
