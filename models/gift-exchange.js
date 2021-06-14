const { BadRequestError } = require("../utils/errors");

class GiftExchange{

    static async getQuiz(){
        const quiz = [
            {
                question: "2+2",
                answerChoices: [
                    "a. 1",
                    "b. 2",
                    "c. 3",
                    "d. 4"
                ] 
            },
            {
                question: "7*1",
                answerChoices: [
                    "a. 7",
                    "b. 6",
                    "c. 5",
                    "d. 4"
                ] 
            },
            {
                question: "1+0",
                answerChoices: [
                    "a. 0",
                    "b. 1",
                    "c. 2",
                    "d. 3"
                ] 
            }
        ]
        return quiz
    }

    static async createPairsArray(listOfNames){
        if(listOfNames.length == 0 || null){
            throw new BadRequestError("List of Names is empty. Need to add Names.")
        }
        if(listOfNames.length%2 != 0){
            throw new BadRequestError("Odd List of names were given. Need even number of names.")
        }

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
        if(listOfNames.length == 0 || null){
            throw new BadRequestError("List of Names is empty. Need to add Names.")
        }
        if(listOfNames.length%2 != 0){
            throw new BadRequestError("Odd List of names were given. Need even number of names.")
        }
        
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