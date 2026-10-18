import mongoose from "mongoose";
const expenseSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    paymentMethod : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    description : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})

const Expense = mongoose.model('Expense', expenseSchema)
export default Expense