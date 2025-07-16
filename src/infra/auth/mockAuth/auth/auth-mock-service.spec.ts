import { AuthMockService } from './auth-mock-service'
import { authMock } from '../helpers/auth-mock-helper'

jest.mock('../helpers/auth-mock-helper', () => ({
  authMock: {
    verifyToken: jest.fn(async (token) => true)
  }
}))

describe('Auth Mock Service', () => {
  it('should validate user token', async () => {
    const sut = new AuthMockService()
    const isValid = await sut.validate('valid_token')
    expect(isValid).toBe(true)
  })

  it('should return false if token is invalid', async () => {
    const sut = new AuthMockService()
    jest.spyOn(authMock, 'verifyToken').mockReturnValueOnce(Promise.resolve(false))
    const isValid = await sut.validate('invalid_token')
    expect(isValid).toBe(false)
  })
})
