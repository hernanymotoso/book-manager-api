import { DbAddBook } from './db-add-book'
import MockDate from 'mockdate'
import { AddBookParams, AddBookRepository, BookModel } from './db-add-book-protocols'

const makeAddBookParams = (): AddBookParams => ({
  title: 'any_title',
  author: 'any_author'
})

const makeAddBookRepository = (): AddBookRepository => {
  class AddBookRepositoryStub implements AddBookRepository {
    async add (data: AddBookParams): Promise<BookModel> {
      return {
        id: 'any_id',
        title: 'any_title',
        author: 'any_author',
        createdAt: new Date().getTime()
      }
    }
  }
  return new AddBookRepositoryStub()
}

type SutTypes = {
  sut: DbAddBook
  addBookRepositoryStub: AddBookRepository
}

const makeSut = (): SutTypes => {
  const addBookRepositoryStub = makeAddBookRepository()
  const sut = new DbAddBook(addBookRepositoryStub)

  return {
    sut,
    addBookRepositoryStub
  }
}

describe('DbAddBook UseCase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should call AddBookRepository with correct values', async () => {
    const { sut, addBookRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addBookRepositoryStub, 'add')
    await sut.add(makeAddBookParams())
    expect(addSpy).toHaveBeenCalledWith(makeAddBookParams())
  })

  it('should throw if AddBookRepository throws', async () => {
    const { sut, addBookRepositoryStub } = makeSut()
    jest.spyOn(addBookRepositoryStub, 'add').mockRejectedValueOnce(new Error())
    const promise = sut.add(makeAddBookParams())
    await expect(promise).rejects.toThrow()
  })
})
