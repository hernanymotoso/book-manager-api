import MockDate from 'mockdate'
import { AddBookController } from './add-book-controller'
import { badRequest } from '../../../helpers/http-helpers'
import { MissingParamError } from '../../../errors'
import { AddBook, AddBookParams } from '../../../../domain/usecases/book/add-book'
import { BookModel } from '../../../../domain/models/book'

const makeAddBook = (): AddBook => {
  class AddBookStub implements AddBook {
    add = async (data: AddBookParams): Promise<BookModel> => {
      return await new Promise(resolve => {
        resolve({
          id: 'valid_id',
          title: 'valid_title',
          author: 'valid_author',
          createdAt: new Date().getTime()
        })
      })
    }
  }
  return new AddBookStub()
}

type SutTypes = {
  sut: AddBookController
  addBookStub: AddBook
}

const makeSut = (): SutTypes => {
  const addBookStub = makeAddBook()
  const sut = new AddBookController(addBookStub)

  return {
    sut,
    addBookStub
  }
}

describe('AddBook Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should return 400 if no title is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        author: 'any_author'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('title')))
  })

  it('should return 400 if no author is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        title: 'any_title'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('author')))
  })

  it('should call addBook with correct values', async () => {
    const { sut, addBookStub } = makeSut()
    const addSpy = jest.spyOn(addBookStub, 'add')
    const httpRequest = {
      body: {
        title: 'any_title',
        author: 'any_author'
      }
    }
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith({
      title: 'any_title',
      author: 'any_author'
    })
  })
})
