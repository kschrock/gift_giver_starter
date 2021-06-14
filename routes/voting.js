const express = require("express")
const router = express.Router()
const voting = require("../models/voting")

router.get("/", async (req,res, next) =>{
    const votes = await voting.tallyVotes() 
    res.status(200).json(votes)
})

router.post("/:pizzaName", async (req,res, next) =>{
    console.log(req.body)
    const pizzaName = req.params.pizzaName
    const user = req.body.user
    const votes = await voting.recordVote(pizzaName, user)
    res.status(200).json(votes)
}) //:pizzaName Path Parameter

module.exports = router