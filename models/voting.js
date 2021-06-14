const voting = {
    pepperoni: [],
    cheese: [],
    hawaiian: [],
}

class Voting {
    static async tallyVotes(){
        const votingResults = {
            pepperoni: voting.pepperoni.length,
            cheese: voting.cheese.length,
            hawaiian: voting.hawaiian.length,
        }
        return votingResults
    }
    //handling calculating the final results for out poll
    // and return those results

    static async recordVote(pizzaName, user){
    // increment the pizza name that was voted for
    // and return the final result
    if(voting[pizzaName]){
        if(!voting[pizzaName].includes(user)){
            voting[pizzaName].push(user)
        }
    }

        return Voting.tallyVotes()
    }
}

module.exports = Voting