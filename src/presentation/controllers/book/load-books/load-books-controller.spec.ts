import { BookModel } from '../../../../domain/models/book'
import { LoadBooks } from '../../../../domain/usecases/book/load-books'
import MockDate from 'mockdate'
import { LoadBooksController } from './load-books-controller'
import { noContent, ok, serverError } from '../../../helpers/http-helpers'

const makeBookModels = (): BookModel[] => {
  return [{
    id: 'any_id',
    title: 'any_title',
    author: 'any_author',
    createdAt: new Date().getTime()
  },
  {
    id: 'other_id',
    title: 'other_title',
    author: 'other_author',
    createdAt: new Date().getTime()
  }]
}

const makeLoadBooks = (): LoadBooks => {
  class LoadBooksStub implements LoadBooks {
    load = async (): Promise<BookModel[]> => {
      return await new Promise(resolve => {
        resolve(makeBookModels())
      })
    }
  }
  return new LoadBooksStub()
}

type SutTypes = {
  sut: LoadBooksController
  loadBooksStub: LoadBooks
}

const makeSut = (): SutTypes => {
  const loadBooksStub = makeLoadBooks()
  const sut = new LoadBooksController(loadBooksStub)

  return {
    sut,
    loadBooksStub
  }
}

describe('LoadBooks Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should call LoadBooks', async () => {
    const { sut, loadBooksStub } = makeSut()
    const loadSty = jest.spyOn(loadBooksStub, 'load')
    await sut.handle({})
    expect(loadSty).toHaveBeenCalled()
  })

  it('should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(ok(makeBookModels()))
  })

  it('should return 204 if LoadBooks return empty ', async () => {
    const { sut, loadBooksStub } = makeSut()
    jest.spyOn(loadBooksStub, 'load')
      .mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(noContent())
  })

  it('should return 500 if LoadBooks throws', async () => {
    const { sut, loadBooksStub } = makeSut()
    jest.spyOn(loadBooksStub, 'load')
      .mockImplementationOnce(async () => await new Promise((resolve, reject) => { reject(new Error()) }))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError())
  })
})
