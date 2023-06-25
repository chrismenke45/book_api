import mongoose from "mongoose"

const bookShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  ISBN13: {
    type: Number,
    required: true,
    unique: true,
    dropDups: true,
    min: 1000000000000,
    max: 9999999999999,
  },
}, { _id: false })

const BookModel = mongoose.model("Book", bookShema)
export { BookModel }
