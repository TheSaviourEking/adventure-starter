function getItemByName(array, name) {
    // for (let item of this.item) {
    //     if (item.name === name) return item;
    // }

    return array.find(item => item.name === name);
}

module.exports = {
    getItemByName
}
