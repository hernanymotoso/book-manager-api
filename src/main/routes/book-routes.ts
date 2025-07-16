import { Router } from 'express'
import { makeAddBookController } from '../factories/controllers/add-book'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadBooksController } from '../factories/controllers/load-books'

export default (router: Router): void => {
  router.post('/books', adaptRoute(makeAddBookController()))
  router.get('/books', adaptRoute(makeLoadBooksController()))
}
