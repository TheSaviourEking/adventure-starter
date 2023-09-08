function getItemByName(array, name) {
    // for (let item of this.item) {
    //     if (item.name === name) return item;
    // }

    return array.find(item => item.name === name);
}

// function moveItem(itemName, sourceArray, targetArray) {
//     const item = getItemByName(sourceArray, itemName);

//     if (item) {
//         const index = sourceArray.indexOf(item);
//         if (index !== -1) {
//             sourceArray.splice(index, 1);
//             targetArray.push(item);
//         }
//     }
// }

module.exports = {
    getItemByName,
    // moveItem
}
