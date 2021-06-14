const express = require("express")
const router = express.Router()
const giftExchange = require("../models/gift-exchange")


router.get("/", async (req,res, next) =>{
    //console.log("hello world")
    res.status(200).json("hello world")
})

router.get("/quiz", async (req, res, next) =>{
    const quiz = await giftExchange.getQuiz()
    res.status(200).json(quiz)
})


router.post("/pairs", async (req,res, next) =>{
    const listOfNames = req.body.names
    const pairs = await giftExchange.createPairsArray(listOfNames)
    res.status(200).json(pairs)
})

router.post("/traditional", async (req,res, next) =>{
    const listOfNames = req.body.names
    const pairs = await giftExchange.createPairsTraditional(listOfNames)
    res.status(200).json(pairs)
})

module.exports = router