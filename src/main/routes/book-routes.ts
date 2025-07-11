import { Router } from 'express'
import { makeAddBookController } from '../factories/controllers/add-book'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/books', adaptRoute(makeAddBookController()))
}
