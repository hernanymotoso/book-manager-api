import { Router } from 'express'
import { makeAddBookController } from '../factories/controllers/add-book'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadBooksController } from '../factories/controllers/load-books'
import { auth } from '../middlewares'

export default (router: Router): void => {
  router.post('/books', auth, adaptRoute(makeAddBookController()))
  router.get('/books', auth, adaptRoute(makeLoadBooksController()))
}
