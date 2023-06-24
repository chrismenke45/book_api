import mongoose from "mongoose";

const bookShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true,
        dropDups: true,
    },
    pageCount: {
        type: Number,
        required: true,
    }
})

const BookModel = mongoose.model('Book', bookShema)
export { BookModel }