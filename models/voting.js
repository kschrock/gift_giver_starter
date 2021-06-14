const { NotFoundError, BadRequestError } = require("../utils/errors")

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
    if(!user){
        throw new BadRequestError("You must have a user in the request body to vote.")
    }
    if(!voting[pizzaName]){
        throw new NotFoundError("That pizza is not part of the poll.")
    }
    if(voting[pizzaName].includes(user)){
        throw new BadRequestError("That user has already voted for that pizza.")
    }
    // increment the pizza name that was voted for
    // and return the final result
    voting[pizzaName].push(user)

        return Voting.tallyVotes()
    }
}

module.exports = Voting