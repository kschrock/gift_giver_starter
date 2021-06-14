const express = require("express")
const morgan = require("morgan")
const votingRouter = require("./routes/voting")
const giftExchangeRouter = require("./routes/gift-exchange")
const { NotFoundError } = require("./utils/errors")

const app = express()

app.use(morgan("tiny"))
app.use(express.json()) 

app.use("/voting", votingRouter)

app.use("/gift-exchange", giftExchangeRouter)

app.get("/", async (req, res, next) => {
  res.status(200).json({ping: "pong"})
})

app.use( (req, res, next) => {
    //Handle all 404 errors that were found.
    return next(new NotFoundError())
})

//Generic error handler - anything unhandled handles here.
app.use( (error, req, res, next) => {
  const status = error.status || 500
  const message = error.message
  return res.status(status).json({
    error : { message, status }
  })
})

const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})
