import { RequestHandler } from "express";
import axios from "axios";

interface BookController {
    searchBook: RequestHandler;
}

const bookController: BookController = {
    searchBook(req, res, next) {
        const search = req.query.search
        const searchType = req.query.searchType
        const bookSearch = async () => {
            const res = await axios.get(`${process.env.GOOGLE_API_URL}volumes?q=flowers+inauthor:keyes&key=${process.env.GOOGLE_API_KEY}`)
            //console.log(res.data)
        }
        bookSearch()

        res.send('Books API');
    }
}

export default bookController