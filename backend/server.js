import express from 'express'
import mongoose from 'mongoose'
import expenseController from './controllers/expenseController'

const PORT = 5789
const app = express()
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/expensedb")

app.post("/api/expenses", expenseController.addExpenses);
app.get("/api/expenses", expenseController.getExpenses);
app.get("/api/expenses/:id", expenseController.getExpense);
app.put("/api/expenses/:id", expenseController.updateExpenses);
app.delete("/api/expenses/:id", expenseController.deleteExpenses);

app.get("/", (req, res) => {
    res.send("Welcome to the Coding World!")
})

app.get("/about", (req, res) => {
    res.send("Something about me.")
})

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})

