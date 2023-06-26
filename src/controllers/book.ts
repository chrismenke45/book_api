import { RequestHandler } from "express"
import axios from "axios"

const bookController: Record<string, RequestHandler> = {
  searchBook(req, res, next) {
    const search = req.query.search
    const searchType = req.query.searchType
    const bookSearch = async () => {
      let searchParam = ""
      searchParam += searchType || ""
      searchParam += search
      const res = await axios.get(
        `${process.env.GOOGLE_API_URL}volumes?q=${searchParam}&projection=full&key=${process.env.GOOGLE_API_KEY}`
      )
      return res.data
    }

    res.send("Books API")
  },
}

export default bookController
