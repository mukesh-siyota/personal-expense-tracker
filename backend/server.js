import express from 'express'
import mongoose from 'mongoose'
import expenseController from './controllers/expenseController'
import authController from './controllers/authController.js'
import authMiddleware from './middleware/authMiddleware.js'

const PORT = 5789
const app = express()
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/expensedb")

app.post("/api/expenses", authMiddleware, expenseController.addExpenses);
app.get("/api/expenses", authMiddleware, expenseController.getExpenses);
app.get("/api/expenses/:id", authMiddleware, expenseController.getExpense);
app.put("/api/expenses/:id", authMiddleware, expenseController.updateExpenses);
app.delete("/api/expenses/:id", authMiddleware, expenseController.deleteExpenses);

app.post("/register", authController.register)
app.post("/login", authController.login)

app.get("/", (req, res) => {
    res.send("Welcome to the Coding World!")
})

app.get("/about", (req, res) => {
    res.send("Something about me.")
})

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})

