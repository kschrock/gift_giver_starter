
class GiftExchange{

    static async createPairsArray(listOfNames){
        let arr1 = listOfNames.slice() // copy array
        let arr2 = listOfNames.slice() // copy array again

        arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
        arr2.sort(function() { return 0.5 - Math.random();});
        let pairs = []
        while (arr1.length) {
            var name1 = arr1.pop(), // get the last value of arr1
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
            //        ^^ if the first value is the same as name1, 
            //           get the last value, otherwise get the first
            let tempArr = [name1,name2]
            pairs.push(tempArr)
            //console.log(name1 + ' gets ' + name2);
        }

        return pairs

    }

    static async createPairsTraditional(listOfNames){
        let arr1 = listOfNames.slice() // copy array
        let arr2 = listOfNames.slice() // copy array again

        arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
        arr2.sort(function() { return 0.5 - Math.random();});
        let pairs = []
        while (arr1.length) {
            let name1 = arr1.pop(), // get the last value of arr1
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
            //        ^^ if the first value is the same as name1, 
            //           get the last value, otherwise get the first
            pairs.push(name1 + ' gets ' + name2)
            //console.log(name1 + ' gets ' + name2);
        }

        return pairs

    }
}

module.exports = GiftExchange