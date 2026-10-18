const express = require("express")
const { default: mongoose } = require("mongoose")
const PORT = 5789
const app = express()


mongoose.connect("mongodb://localhost:27017/expensedb")



app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})