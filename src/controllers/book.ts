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
      console.log(res.data.items[0].volumeInfo)
      return res.data
    }
    bookSearch().then((bookRes) => {
      let bookList = bookRes.items.map((book: any) => {
        const isbn = book.volumeInfo.industryIdentifiers?.filter((identifier:any) => identifier.type === "ISBN_13")[0]
        console.log("book", book)
        return {
          title: book.volumeInfo.title,
          ISBN13: isbn?.identifier || null,
          pageCount: book.volumeInfo.pageCount,
          authors: book.volumeInfo.authors,
          image: book.volumeInfo.imageLinks?.smallThumbnail || null
        }
      })
      console.log(bookList)
      res.json({books: bookList})
    })
  },
}

export default bookController
