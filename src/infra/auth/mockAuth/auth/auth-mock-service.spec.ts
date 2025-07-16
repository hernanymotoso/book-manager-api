import { AuthMockService } from './auth-mock-service'

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
})
