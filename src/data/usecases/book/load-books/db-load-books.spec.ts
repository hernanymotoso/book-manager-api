import MockDate from 'mockdate'
import { DbLoadBooks } from './db-load-books'
import { BookModel, LoadBooksRepository } from './db-load-books-protocols'

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

const makeLoadBooksRepository = (): LoadBooksRepository => {
  class LoadBooksRepositoryStub implements LoadBooksRepository {
    async loadAll (): Promise<BookModel[]> {
      return await Promise.resolve(makeBookModels())
    }
  }
  return new LoadBooksRepositoryStub()
}

type SutTypes = {
  sut: DbLoadBooks
  loadBooksRepositoryStub: LoadBooksRepository
}

const makeSut = (): SutTypes => {
  const loadBooksRepositoryStub = makeLoadBooksRepository()
  const sut = new DbLoadBooks(loadBooksRepositoryStub)

  return {
    sut,
    loadBooksRepositoryStub
  }
}

describe('DbLoadBooks UseCase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should call LoadBooksRepository', async () => {
    const { sut, loadBooksRepositoryStub } = makeSut()
    const loadAllSpy = jest.spyOn(loadBooksRepositoryStub, 'loadAll')
    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })

  it('should return a list of books on success', async () => {
    const { sut } = makeSut()
    const books = await sut.load()
    expect(books).toEqual(makeBookModels())
  })

  it('should throw if LoadBooksRepository throws', async () => {
    const { sut, loadBooksRepositoryStub } = makeSut()
    jest.spyOn(loadBooksRepositoryStub, 'loadAll')
      .mockImplementationOnce(async () => await new Promise((resolve, reject) => { reject(new Error()) }))
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
