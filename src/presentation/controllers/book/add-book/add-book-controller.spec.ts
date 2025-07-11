import MockDate from 'mockdate'
import { AddBookController } from './add-book-controller'
import { badRequest } from '../../../helpers/http-helpers'
import { MissingParamError } from '../../../errors'

type SutTypes = {
  sut: AddBookController
}

const makeSut = (): SutTypes => {
  const sut = new AddBookController()

  return {
    sut
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
})
